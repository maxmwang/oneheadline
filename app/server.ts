import * as path from 'path';
import express from 'express';
import 'express-async-errors';
import http from 'http';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv';

import connectDB from './config/db';
import { ClientToServerEvents, ServerToClientEvents } from './config/socketTypes';
import { getHeadline, updateHeadline } from './controllers/headlineController';

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;

connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(server);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve('client/build')));
}

io.on('connection', async (socket) => {
  // fetch headline from db
  const initHeadline = await getHeadline();

  socket.emit('headline', initHeadline);

  socket.on('new', async (newHeadline: string) => {
    const updatedHeadline = await updateHeadline(newHeadline);
    io.sockets.emit('headline', updatedHeadline);
  });

  // for debuging only; no use in production
  socket.on('stream', async () => {
    const headline = await getHeadline();
    socket.emit('headline', headline);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client/build/index.html'));
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
