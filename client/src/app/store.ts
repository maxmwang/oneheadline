import { configureStore, combineReducers } from '@reduxjs/toolkit';

import websocketMiddleware from './middleware/websocket';
import channelReducer from '../features/channelSlice';
import errorReducer from '../features/errorSlice';

const rootReducer = combineReducers({
  channel: channelReducer,
  error: errorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(websocketMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
