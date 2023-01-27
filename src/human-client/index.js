'use strict';

const { io } = require('socket.io-client');
const events = io('ws://localhost:6666');

const { startHuman } = require('./human');

startHuman(events)
