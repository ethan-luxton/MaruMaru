const { Server } = require('socket.io');
const { startEventServer } = require('./hub');

const io = new Server(6666);

startEventServer(io);