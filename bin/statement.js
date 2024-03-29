"use strict";

const { Statement: BaseStatement, caseUtilities } = require("murmuration");

const { camelCaseToSnakeCase, snakeCaseToCamelCase } = caseUtilities;

class Statement extends BaseStatement {
  constructor(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler, placeholderIndex) {
    super(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler);

    this.placeholderIndex = placeholderIndex;
  }

  getPlaceholderIndex() {
    return this.placeholderIndex;
  }

  update(relation) {
    const sql = `UPDATE "${relation}"`;

    this.setSQL(sql);

    return this;
  }

  insertInto(relation) {
    const sql = `INSERT INTO "${relation}"`;

    this.setSQL(sql);

    return this;
  }

  deleteFrom(relation) {
    const sql = `DELETE FROM "${relation}"`;

    this.setSQL(sql);

    return this;
  }

  selectFrom(relation) {
    const sql = `SELECT * FROM "${relation}"`,
          query = true;

    this.setSQL(sql);

    this.setQuery(query);

    return this;
  }

  placeholder() {
    const placeholder = `\$${this.placeholderIndex}`;

    this.placeholderIndex++;

    return placeholder;
  }

  columnFromKey(key) {
    const column = `"${camelCaseToSnakeCase(key)}"`;

    return column;
  }

  keyFromColumn(column) {
    const key = snakeCaseToCamelCase(column);

    return key;
  }

  static fromConnection(Class, connection) {
    if (connection === undefined) {
      connection = Class; ///

      Class = Statement;
    }

    const sql = null,
          query = false,
          parameters = [],
          oneHandler = null,
          noneHandler = null,
          manyHandler = null,
          elseHandler = null,
          firstHandler = null,
          errorHandler = null,
          successHandler = null,
          placeholderIndex = 1,
          statement = new Class(connection, sql, query, parameters, oneHandler, noneHandler, manyHandler, elseHandler, firstHandler, errorHandler, successHandler, placeholderIndex);

    return statement;
  }
}

module.exports = Statement;
