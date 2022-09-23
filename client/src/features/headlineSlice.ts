import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import IHeadline from '../api/headline';

const initialState: IHeadline = {
  headline: '',
  createdAt: '',
  updatedAt: '',
  taps: 0,
};

export const headlineSlice = createSlice({
  name: 'headline',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IHeadline>) => action.payload,
    // setHeadline will ONLY be called through socketMiddleware
    // client imput will only change server value,
    // which in turn will send a new socket to update the store
  },
});

export default headlineSlice.reducer;
