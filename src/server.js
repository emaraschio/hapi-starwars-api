import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({
  port: 8080
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, response) => {
    response('WELCOME TO STAR WARS API');
  }
});

server.start(err => {
  if (err) {
    console.error('Error was handled!');
    console.error(err);
  }

  console.log(`Server started at ${ server.info.uri }`);
});
