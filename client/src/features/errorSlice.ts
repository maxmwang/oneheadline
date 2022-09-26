import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import IError from '../api/error';

const initialState: IError = {
  type: '',
  message: '',
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IError>) => action.payload,
  },
});

export default errorSlice.reducer;
