'use strict';

const { CAT_EVENT_NAMES, HUMAN_EVENT_NAMES} = require('./utils');

function startEventServer(io) {
    io.on('connection', (socket) => onConnection(socket,io));
        console.log('Everything is started!');
    }

function onConnection(socket, io) {
    console.log('have new connection', socket.id);
    socket.on(CAT_EVENT_NAMES.hungry, CAT_EVENT_NAMES.dirtyLitter, CAT_EVENT_NAMES.bored,CAT_EVENT_NAMES.affection,()=> onCatEvents)

}



function onCatEvents (socket) {
     console.log('Maru needs something');

     function randomMeow() {
        let numE = Math.floor(Math.random() * 5) + 1;
        let numO = Math.floor(Math.random() * 5) + 1;
        let numW = Math.floor(Math.random() * 5) + 1;
        let meow = "m" + "e".repeat(numE) + "o".repeat(numO) + "w".repeat(numW);
        
        console.log(meow);
      }
      randomMeow
}

