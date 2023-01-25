'use strict';

const { io } = require('socket.io-client');
const { CAT_EVENT_NAMES } = require('../utils');

function startMaru(ioClient) {
    function ready() {
        sendNeed(ioClient);
    }
    ready();
}

function sendNeed(ioClient) {
// conditional based on Maru's input(HTML)
// if Maru picks bored:
ioClient.emit(CAT_EVENT_NAMES.bored);
// if Maru picks hungry:
ioClient.emit(CAT_EVENT_NAMES.hungry);
// if Maru picks dirty litter:
ioClient.emit(CAT_EVENT_NAMES.dirtyLitter);
// if Maru picks affection:
ioClient.emit(CAT_EVENT_NAMES.affection);
}