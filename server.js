var express = require('express');
var http = require('http');
//var SocketIO = require('socket.io');

const port = 3000;

//Server instance
var app = express();
var server = http.createServer(app);
//Socket creation
var io = require('socket.io').listen(server);

io.on('connection', socket =>{
    console.log("New client connected");

    socket.on('change color', (color) => {
        console.log('Color Changed to: ', color)
        io.sockets.emit('change color', color)
    })

    socket.on('disconnnect', () => {
        console.log("Client disconnected");
    })
})

server.listen(4000);