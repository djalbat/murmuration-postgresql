"use strict";

const insertVersionMigrationSQL = `

    INSERT INTO migration (version) VALUES($1);

`;

module.exports = insertVersionMigrationSQL;
