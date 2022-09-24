import { configureStore, combineReducers } from '@reduxjs/toolkit';

import websocketMiddleware from './middleware/websocket';
import channelReducer from '../features/channelSlice';

const rootReducer = combineReducers({
  channel: channelReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(websocketMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
