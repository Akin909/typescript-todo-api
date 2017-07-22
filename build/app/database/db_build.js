"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var db_connection_1 = require("./db_connection");
var QueryFile = require('pg-promise').QueryFile;
var sqlPath = path.join(__dirname, '..', '..', '..', '/app/database/db_build.sql');
var sql = function (file) { return QueryFile(file, { minify: true }); };
var buildScript = sql(sqlPath);
db_connection_1.db
    .query(buildScript)
    .then(function (_) { return console.log('DB Created'); })
    .catch(function (e) { return console.log('error', e); });
//# sourceMappingURL=db_build.js.map