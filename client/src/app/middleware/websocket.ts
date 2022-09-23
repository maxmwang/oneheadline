import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';

import { RootState } from '../store';
import { SOCKET_CONNECT, HEADLINE_UPDATE } from '../../constants/actionNames';
import { headlineSet } from '../../constants/actionCreators';

let socket: Socket | null = null;

const websocketMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  switch (action.type) {
    case SOCKET_CONNECT: {
      if (socket) {
        socket.disconnect();
      }
      // socket will live in middleware
      socket = io();

      // socket listeners lives in middleware
      socket.on('headline', (headline) => {
        store.dispatch(headlineSet(headline));
      });
      break;
    }
    // socket emits live in middleware
    case HEADLINE_UPDATE: {
      if (socket) {
        socket.emit('new', action.payload);
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
