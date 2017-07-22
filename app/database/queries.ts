import { db } from './db_connection';

export interface Todo {
  body: string;
  title: string;
  completed: boolean;
}

export const getAllTodos: Promise<any> = db
  .query('SELECT * FROM todos')
  .catch((e: Error) => e);

export const addTodo: (t: Todo) => Promise<any> = async ({
  title,
  body,
  completed,
}: Todo) => {
  const [
    id,
  ] = await db.query(
    'INSERT INTO todos(title, body, completed) VALUES ($1, $2, $3) RETURNING ID',
    [title, body, completed]
  );
  return id;
};
