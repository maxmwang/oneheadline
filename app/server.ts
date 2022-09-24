import * as path from 'path';
import express from 'express';
import 'express-async-errors';
import http from 'http';
import { Server } from 'socket.io';
import * as dotenv from 'dotenv';

import connectDB from './config/db';
import { ClientToServerEvents as C, ServerToClientEvents as S } from './config/socketTypes';
import channelController from './controllers/channelController';

dotenv.config();

const PORT = Number(process.env.PORT) || 5000;

connectDB();

const app = express();
const server = http.createServer(app);
const io = new Server<C, S>(server);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve('client/build')));
}

io.on('connection', async (socket) => {
  channelController(io, socket);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client/build/index.html'));
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
