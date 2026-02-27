"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Connection;
    }
});
const _pg = require("pg");
const _murmuration = require("murmuration");
let pool = null;
class Connection {
    constructor(client, done, log){
        this.client = client;
        this.done = done;
        this.log = log;
    }
    getLog() {
        return this.log;
    }
    query(sql, parameters, callback) {
        this.client.query(sql, parameters, (error, result)=>{
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
            pool = new _pg.Pool(configuration);
            Object.assign(configuration, {
                log
            });
        }
        pool.connect((error, client, done)=>{
            let connection = null;
            const { log = _murmuration.defaultLog } = configuration;
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
function diagnoseError(error, sql, log) {
    const { code } = error;
    log.error(`Error code "${code}"...`);
    switch(code){
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
        default:
            {
                const { message } = error;
                log.error(message);
                if (sql) {
                    log.error(`The offending SQL is: "${sql}"`);
                }
            }
            break;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgeyBkZWZhdWx0TG9nIH0gZnJvbSBcIm11cm11cmF0aW9uXCI7XG5cbmxldCBwb29sID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgZG9uZSwgbG9nKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5kb25lID0gZG9uZTtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxuICBxdWVyeShzcWwsIHBhcmFtZXRlcnMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jbGllbnQucXVlcnkoc3FsLCBwYXJhbWV0ZXJzLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBudWxsO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCB0aGlzLmxvZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoeyByb3dzIH0gPSByZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhlcnJvciwgcm93cyk7XG4gICAgfSk7XG4gIH1cblxuICByZWxlYXNlKCkge1xuICAgIHRoaXMuZG9uZSgpO1xuICB9XG5cbiAgYmVnaW4oY2FsbGJhY2spIHtcbiAgICB0aGlzLmNsaWVudC5xdWVyeShcIkJFR0lOXCIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbW1pdChjYWxsYmFjaykge1xuICAgIHRoaXMuY2xpZW50LnF1ZXJ5KFwiQ09NTUlUXCIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJvbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jbGllbnQucXVlcnkoXCJST0xMQkFDS1wiLCBjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBpZiAocG9vbCA9PT0gbnVsbCkge1xuICAgICAgY29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3VyYXRpb24pOyAvLy9cblxuICAgICAgY29uc3QgeyBsb2cgfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICAgIGRlbGV0ZSBjb25maWd1cmF0aW9uLmxvZztcblxuICAgICAgcG9vbCA9IG5ldyBQb29sKGNvbmZpZ3VyYXRpb24pO1xuXG4gICAgICBPYmplY3QuYXNzaWduKGNvbmZpZ3VyYXRpb24sIHtcbiAgICAgICAgbG9nXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwb29sLmNvbm5lY3QoKGVycm9yLCBjbGllbnQsIGRvbmUpID0+IHtcbiAgICAgIGxldCBjb25uZWN0aW9uID0gbnVsbDtcblxuICAgICAgY29uc3QgeyBsb2cgPSBkZWZhdWx0TG9nIH0gPSBjb25maWd1cmF0aW9uO1xuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc3FsID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZGlhZ25vc2VFcnJvcihlcnJvciwgc3FsLCBsb2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSBudWxsO1xuXG4gICAgICAgIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihjbGllbnQsIGRvbmUsIGxvZyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGVycm9yLCBjb25uZWN0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaWFnbm9zZUVycm9yKGVycm9yLCBzcWwsIGxvZykge1xuICBjb25zdCB7IGNvZGUgfSA9IGVycm9yO1xuXG4gIGxvZy5lcnJvcihgRXJyb3IgY29kZSBcIiR7Y29kZX1cIi4uLmApO1xuXG4gIHN3aXRjaChjb2RlKSB7XG4gICAgY2FzZSBcIkVDT05OUkVGVVNFRFwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIGRhdGFiYXNlIGlzbid0IHJ1bm5pbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIkVOT1RGT1VORFwiOlxuICAgICAgbG9nLmVycm9yKFwiVGhlIGhvc3QgaXMgd3JvbmcsIHByb2JhYmx5LlwiKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIjNEMDAwXCI6XG4gICAgICBsb2cuZXJyb3IoXCJUaGUgZGF0YWJhc2UgbmFtZSBpcyB3cm9uZywgcHJvYmFibHkuXCIpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiMjgwMDBcIjpcbiAgICAgIGxvZy5lcnJvcihcIlRoZSB1c2VybmFtZSBvciB0aGUgcGFzc3dvcmQgYXJlIHdyb25nLCBwcm9iYWJseS5cIik7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnJvcjtcblxuICAgICAgICBsb2cuZXJyb3IobWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKHNxbCkge1xuICAgICAgICAgIGxvZy5lcnJvcihgVGhlIG9mZmVuZGluZyBTUUwgaXM6IFwiJHtzcWx9XCJgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb25uZWN0aW9uIiwicG9vbCIsImNsaWVudCIsImRvbmUiLCJsb2ciLCJnZXRMb2ciLCJxdWVyeSIsInNxbCIsInBhcmFtZXRlcnMiLCJjYWxsYmFjayIsImVycm9yIiwicmVzdWx0Iiwicm93cyIsImRpYWdub3NlRXJyb3IiLCJyZWxlYXNlIiwiYmVnaW4iLCJjb21taXQiLCJyb2xsYmFjayIsImZyb21Db25maWd1cmF0aW9uIiwiY29uZmlndXJhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIlBvb2wiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsImRlZmF1bHRMb2ciLCJjb2RlIiwibWVzc2FnZSJdLCJtYXBw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