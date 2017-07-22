import { IDatabase, IMain } from 'pg-promise';
import * as pg from 'pg-promise';

interface IConnection {
  host: string;
  port: number;
  database: string;
}

const pgp: IMain = pg(); // No initialization config needed

const connection: IConnection = {
  host: 'localhost',
  port: 5432,
  database: 'typescript_todos',
};

export const db: IDatabase<any> = pgp(connection);
