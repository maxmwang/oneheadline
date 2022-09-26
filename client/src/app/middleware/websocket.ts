import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';

import { RootState as R } from '../store';
import { SOCKET_CONNECT, CHANNEL_UPDATE, CHANNEL_CHANGE } from '../../constants/actionNames';
import { channelSet, errorSet } from '../../constants/actionCreators';

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
      socket.on('error', (error) => {
        dispatch(errorSet(error));
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
    case CHANNEL_CHANGE: {
      if (socket) {
        socket.emit('channel/get', action.payload.code, action.payload.password);
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
