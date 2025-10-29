"use strict";

const showLikeTablesMigrationSQL = `

    SELECT table_name FROM information_schema.tables WHERE table_name LIKE 'migration';

`;

export default showLikeTablesMigrationSQL;
