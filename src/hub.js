'use strict';


const { io } = require('socket.io-client');
const { CAT_EVENT_NAMES, HUMAN_EVENT_NAMES } = require('./utils');

function randomMeow() {
  let numE = Math.floor(Math.random() * 5) + 1;
  let numO = Math.floor(Math.random() * 5) + 1;
  let numW = Math.floor(Math.random() * 5) + 1;
  let meow = 'm' + 'e'.repeat(numE) + 'o'.repeat(numO) + 'w'.repeat(numW);

  return meow;
}

function startEventServer(io) {
  io.on('connection', (socket) => onConnection(socket, io));
  console.log('Everything is started!');
}

function onConnection(socket, io) {
  console.log('have new connection', socket.id);
  onCatEvents(socket, io);
}


function onCatEvents(socket, io) {
  console.log('Maru needs something');
  console.log(randomMeow());

  socket.on(CAT_EVENT_NAMES.hungry, () => {
    maruNeed('hungry');
    console.log("Event works")
    socket.emit(CAT_EVENT_NAMES.randomMeow, randomMeow);
  });

  socket.on(CAT_EVENT_NAMES.dirtyLitter, () => {
    maruNeed('dirty Litter');
    socket.emit(CAT_EVENT_NAMES.randomMeow, randomMeow);
  });

  socket.on(CAT_EVENT_NAMES.bored, () => {
    console.log("is this thing working")
    maruNeed('bored');
    io.emit(CAT_EVENT_NAMES.randomMeow, randomMeow());
  });

  socket.on(CAT_EVENT_NAMES.affection, () => {
     maruNeed('affection');
  socket.emit(CAT_EVENT_NAMES.randomMeow, randomMeow);
});

}

function onHumanEvents(socket) {

    let humanResponse = humanResponse();

    socket.on(HUMAN_EVENT_NAMES.cleanLitter, ()=> {
        if(maruNeed == "dirtyLitter"){
            // this would be correct response
        }
        // if not than we do this
    })
    
    socket.on(HUMAN_EVENT_NAMES.feed, ()=> {
        if(maruNeed == "hungry"){

        }
    })

    socket.on(HUMAN_EVENT_NAMES.pet, ()=> {
        if(maruNeed == "affection"){

        }
    })

    socket.on(HUMAN_EVENT_NAMES.play, (payload)=> {
        if(payload == "play"){
            console.log("You're correct!!!!")
        }
    })

}

function humanResponse(response){
    let humanResponse = response;
}

function maruNeed(need) {
  let maruNeed = need;
}



module.exports = { startEventServer };


let counter;
