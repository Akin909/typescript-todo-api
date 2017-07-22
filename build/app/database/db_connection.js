"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg-promise");
var pgp = pg(); // No initialization config needed
var connection = {
    host: 'localhost',
    port: 5432,
    database: 'typescript_todos',
};
exports.db = pgp(connection);
//# sourceMappingURL=db_connection.js.map