// Lifted from: https://howtonode.org/hello-node

// Load the net module to create a tcp server.
var net = require('net');

// Creates a new TCP server. The handler argument is automatically set as a listener for the 'connection' event
var server = net.createServer(function (socket) {

  // Every time someone connects, tell them hello and then close the connection.
  console.log("Connection from " + socket.remoteAddress);
  socket.end("Hello World\n");

});

// Fire up the server bound to port 8123 on all interfaces
server.listen(8123);

// Put a friendly message on the terminal
console.log("TCP server listening on port 8123 on all interfaces.");
