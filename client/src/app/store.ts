import { configureStore, combineReducers } from '@reduxjs/toolkit';

import websocketMiddleware from './middleware/websocket';
import headlineReducer from '../features/headlineSlice';

const rootReducer = combineReducers({
  headline: headlineReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(websocketMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
