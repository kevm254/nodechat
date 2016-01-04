var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    port = 3000;


server.listen(process.env.PORT || port, function(){
    console.log('running on port ' + port);
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
    // Send Message
    socket.on('send message', function(data){
        io.sockets.emit('new message', { msg: data });
    });
});