"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg = require("pg-promise");
const pgp = pg(); // No initialization config needed
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'typescript_todos',
};
exports.db = pgp(connection);
//# sourceMappingURL=dbConnection.js.map