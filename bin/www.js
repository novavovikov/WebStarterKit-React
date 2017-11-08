const debug = require('debug')('server-render:server');
import { ENV } from '../server/config';
import app from '../server/app';
import http from 'http';
import db from '../server/db';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || ENV.port);
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Run database and server
 */

const startServer = () => {
    server.listen(port, function () {
        console.log(`App started on port ${port}`);
    });

    server.on('error', onError);
    server.on('listening', onListening);
};

db.connect(ENV.dbURL)
    .on('error', console.log)
    .on('disconnected', db.connect)
    .on('open', startServer);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
