import express from 'express';
import 'express-async-errors';
import http from 'http';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv';

import connectDB from './config/db';
import { ClientToServerEvents, ServerToClientEvents } from './config/socketTypes';
import { getMessage, updateMessage } from './controllers/messageController';

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;

connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server);

io.on('connection', async (socket) => {
  // fetch message from db
  const initMessage = await getMessage();

  socket.emit('message', initMessage);

  socket.on('new', async (newMessage: string) => {
    const updatedMessage = await updateMessage(newMessage);
    io.sockets.emit('message', updatedMessage);
  });

  // for debuging only; no use in production
  socket.on('stream', async () => {
    const message = await getMessage();
    socket.emit('message', message);
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
