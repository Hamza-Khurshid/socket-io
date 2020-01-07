var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 5000;

users = [];
connections = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});