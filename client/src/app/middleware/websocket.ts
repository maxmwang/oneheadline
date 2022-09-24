import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';

import { RootState as R } from '../store';
import { SOCKET_CONNECT, CHANNEL_UPDATE } from '../../constants/actionNames';
import { channelSet } from '../../constants/actionCreators';

let socket: Socket | null = null;

const websocketMiddleware: Middleware<{}, R> = ({ dispatch, getState }) => (next) => (action) => {
  switch (action.type) {
    case SOCKET_CONNECT: {
      if (socket) {
        socket.disconnect();
      }
      // socket will live in middleware
      socket = io();

      // socket listeners lives in middleware
      socket.on('channel', (channel) => {
        dispatch(channelSet(channel));
      });

      // get initial channel
      socket.emit('channel/get', getState().channel.code, getState().channel.password);

      break;
    }
    // socket emits live in middleware
    case CHANNEL_UPDATE: {
      if (socket) {
        socket.emit('channel/update', getState().channel.code, action.payload);
      }
      break;
    }
    default: {
      break;
    }
  }

  return next(action);
};

export default websocketMiddleware;
