'use strict';




const { CAT_EVENT_NAMES } = require('../utils');



function startMaru(events) {
    console.log("Meow")
    events.emit("Maru here");
    sendBored(events)
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

module.exports = { startMaru }
