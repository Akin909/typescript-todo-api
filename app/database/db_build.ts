import * as path from 'path';
import { db } from './db_connection';

const { QueryFile } = require('pg-promise');
const sqlPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  '/app/database/db_build.sql'
);
const sql: (f: string) => string = file => QueryFile(file, { minify: true });
const buildScript: string = sql(sqlPath);

db
  .query(buildScript)
  .then(_ => console.log('DB Created'))
  .catch((e: Error) => console.log('error', e));
