import { Middleware } from 'redux';
import { io, Socket } from 'socket.io-client';

import { RootState } from '../store';
import { SOCKET_CONNECT } from '../../constants/actionNames';
import { headlineSet } from '../../constants/actionCreators';

let socket: Socket | null = null;

const websocketMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  if (action.type === SOCKET_CONNECT) {
    if (socket) {
      socket.disconnect();
    }
    // socket will live in middleware
    socket = io();

    // socket listeners also live in middleware
    socket.on('headline', (headline) => {
      store.dispatch(headlineSet(headline));
    });
  }

  return next({ ...action, socket });
};

export default websocketMiddleware;
