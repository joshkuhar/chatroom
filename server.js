//imports the socket.io object
var socket_io = require('socket.io');

//HTTP object supports many features of the HTTP protocol 
var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));

// var server wraps the Express app in a Node http.Server object. This object inherits 
// from net.Server object which is used to create a TCP or local server. 
var server = http.Server(app);

// 	initialize the io socket_io object by passing in the server object creating 
//  a socket server.
var io = socket_io(server);

// server listening event. listens for messages from client.
io.on('connection', function (socket) {
    console.log('Client connected');
    // second event listener
    socket.on('message', function(message) {
        console.log('Received message:', message);
        // broadcasts to any clients listening
        socket.broadcast.emit('message', message);
    });
});

server.listen(process.env.PORT || 8080);