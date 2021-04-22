"use strict";

const { Pool } = require("pg"),
      { defaultLog } = require("murmuration");

let pool = null;

class Connection {
  constructor(client, done, log) {
    this.client = client;
    this.done = done;
    this.log = log;
  }

  getLog() {
    return this.log;
  }

  query(sql, parameters, callback) {
    this.client.query(sql, parameters, (error, result) => {
      let rows = null;

      if (error) {
        diagnoseError(error, sql, this.log);
      } else {
        ({ rows } = result);
      }

      callback(error, rows);
    });
  }

  release() {
    this.done();
  }

  begin(callback) {
    this.client.query("BEGIN", callback);
  }

  commit(callback) {
    this.client.query("COMMIT", callback);
  }

  rollback(callback) {
    this.client.query("ROLLBACK", callback);
  }

  static fromConfiguration(configuration, callback) {
    if (pool === null) {
      configuration = Object.assign({}, configuration); ///

      const { log } = configuration;

      delete configuration.log;

      pool = new Pool(configuration);

      Object.assign(configuration, {
        log
      });
    }

    pool.connect((error, client, done) => {
      let connection = null;

      const { log = defaultLog } = configuration;

      if (error) {
        const sql = null; ///

        diagnoseError(error, sql, log);
      } else {
        error = null;

        connection = new Connection(client, done, log);
      }

      callback(error, connection);
    });
  }
}

module.exports = Connection;

function diagnoseError(error, sql, log) {
  const { code } = error;

  log.error(`Error code "${code}"...`);

  switch(code) {
    case "ECONNREFUSED":
      log.error("The database isn't running, probably.");
      break;

    case "ENOTFOUND":
      log.error("The host is wrong, probably.");
      break;

    case "3D000":
      log.error("The database name is wrong, probably.");
      break;

    case "28000":
      log.error("The username or the password are wrong, probably.");
      break;

    default: {
        const { message } = error;

        log.error(message);

        if (sql) {
          log.error(`The offending SQL is: "${sql}"`);
        }
      }
      break;
  }
}
