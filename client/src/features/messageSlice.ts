import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  MessageState, getMessage, updateMessage, streamMessage,
} from '../api/message';
// import { RootState } from '../app/store';

const initialState: MessageState = {
  message: '',
  createdAt: '',
  updatedAt: '',
  changes: 0,
};

export const getMessageThunk = createAsyncThunk(
  'message/getMessage',
  async () => {
    const res = await getMessage();
    return res as MessageState;
  },
);

export const updateMessageThunk = createAsyncThunk(
  'message/updateMessage',
  async (newMessage: string) => {
    const res = await updateMessage(newMessage);
    return res;
  },
);

export const streamMessageThunk = createAsyncThunk(
  'message/streamMessage',
  async () => {
    const res = await streamMessage();
    return res;
  },
);

export const messageDataSlice = createSlice({
  name: 'messageData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessageThunk.fulfilled, (state, action) => action.payload);
    builder.addCase(updateMessageThunk.fulfilled, (state, action) => action.payload);
  },
});

export default messageDataSlice.reducer;
