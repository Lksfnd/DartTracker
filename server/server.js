const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3001;

const server = http.createServer(app);

console.log("Starting server...");

server.listen(port);

console.log("[DartTracker ]Server running on 127.0.0.1:" + port);
