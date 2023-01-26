'use strict';

const { io } = require('socket.io-client');
const { CAT_EVENT_NAMES } = require('../utils');

function startMaru(ioClient) {
    console.log("Meow")

}

function sendBored(ioClient) {
ioClient.emit(CAT_EVENT_NAMES.bored);
    
}

function sendHungry(ioClient){
    ioClient.emit(CAT_EVENT_NAMES.hungry);
}

function sendLitter(ioClient){
    ioClient.emit(CAT_EVENT_NAMES.dirtyLitter);
}

function sendAffection(ioClient){
    ioClient.emit(CAT_EVENT_NAMES.affection);

}