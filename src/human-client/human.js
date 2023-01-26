'use strict';

const { Socket } = require('socket.io-client');
const { CAT_EVENT_NAMES, HUMAN_EVENT_NAMES } = require('../utils')

function handleMeow(ioClient){
    
console.log("Human: Hi, Maru are you hungry? do you want to play? do you need your liter cleaned? or you want affection?");
// human needs to respond to marus need


}

function humanFeed(ioClient){
    ioClient.on(CAT_EVENT_NAMES.randomMeow)
    ioClient.emit(HUMAN_EVENT_NAMES.feed);
    console.log("you fed the Maru");
}

function play(ioClient){
    ioClient.on(CAT_EVENT_NAMES.randomMeow)
    ioClient.emit(HUMAN_EVENT_NAMES.play)
    console.log("You decided to play with Maru");
}

function cleanLitter(ioClient){
    ioClient.on(CAT_EVENT_NAMES.randomMeow)
    ioClient.emit(HUMAN_EVENT_NAMES.cleanLitter)
    console.log("You seen you had to clean up the poop");
}

function pet(ioClient){
    ioClient.on(CAT_EVENT_NAMES.randomMeow)
    ioClient.emit(HUMAN_EVENT_NAMES.pet)
    console.log("You pet Maru");
}

function startHuman(ioClient){
    ioClient.on(CAT_EVENT_NAMES.dirtyLitter,CAT_EVENT_NAMES.bored, CAT_EVENT_NAMES.hungry, CAT_EVENT_NAMES.affection, ()=> handleMeow(ioClient));

}

