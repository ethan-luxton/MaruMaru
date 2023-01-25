'use strict';

const { CAT_EVENT_NAMES, HUMAN_EVENT_NAMES} = require('./utils');

function startEventServer(io) {
    io.on('connection', (socket) => onConnection(socket,io));
        console.log('Everything is started!');
    };

function onConnection(socket, io) {
    console.log('have new connection', socket.id);

}

function onCatEvents (socket) {
     console.log('Maru needs something');
     // print on HTML 'Meow'
}