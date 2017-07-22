import * as hapi from 'hapi';

import * as queries from './database/queries';

export default async function init(port: number = 4001): Promise<hapi.Server> {
  const server: hapi.Server = new hapi.Server();
  server.connection({
    port,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const todos: Promise<any> = queries.getAllTodos;
      reply(todos);
    },
  });

  server.route({
    method: 'POST',
    path: '/todo',
    handler: (request, reply) => {
      const newTodo: queries.Todo = JSON.parse(request.payload);
      try {
        const id: Promise<any> = queries.addTodo(newTodo);
        const todo = { ...newTodo, id };
        reply(todo);
      } catch (e) {
        reply(e);
      }
    },
  });

  await server.start(err => {
    if (err) {
      throw err;
    }
    console.log(`server running on port ${port}`);
  });

  return server;
}
