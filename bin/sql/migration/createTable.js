'use strict';

const createTableMigrationSQL = `

    CREATE TABLE migration (
      version integer NOT NULL DEFAULT 0,
      PRIMARY KEY (version)
    );

`;

module.exports = createTableMigrationSQL;
