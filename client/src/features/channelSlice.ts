import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import IChannel from '../api/channel';

const initialState: IChannel = {
  code: '/',
  password: '',
  headline: '',
  createdAt: '',
  updatedAt: '',
  taps: 0,
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IChannel>) => action.payload,
    // set will ONLY be called through socketMiddleware
    // client imput will only change server value,
    // which in turn will send a new socket to update the store
  },
});

export default channelSlice.reducer;
