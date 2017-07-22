import { QueryFile } from 'pg-promise';
import path from 'path';
import { db } from './dbConnection';

const sql: (f: string) => string = file =>
  QueryFile(path.join(__dirname, file), { minify: true });

const buildScript: string = sql('./db_build.sql');

db.query(buildScript).catch(e => console.log('error', e));
