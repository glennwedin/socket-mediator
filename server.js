var appserver = require('express')();
var socket  = require('socket.io');
var server = require('http').createServer(appserver);

var io = require('socket.io')(server);
io.on('connection', function(socket) {
	socket.on('notify', function (data) {
		io.emit('notification', {notification: data.notification, title: data.title, type: Math.round(Math.random(0,1))});
	});
});
//io.emit sender til alle
//socket.emit sender til én socket
//socket.broadcast.emit sender til alle andre sockets untatt til seg selv
io.on('disconnect', function (sock) {});
server.listen(4000);