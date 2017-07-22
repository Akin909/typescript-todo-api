import * as hapi from 'hapi';

export default async function init(port: number = 4001): Promise<hapi.Server> {
  const server: hapi.Server = new hapi.Server();
  server.connection({
    port,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hello world');
    }
  });

  await server.start(err => {
    if (err) {
      throw err;
    }
    console.log(`server running on port ${port}`);
  });

  return server;
}
