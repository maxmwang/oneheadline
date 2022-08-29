import axios from 'axios';

axios.defaults.baseURL = '/api';

export interface MessageState {
  message: string;
  createdAt: string;
  updatedAt: string;
  changes: number;
}

export async function getMessage(): Promise<MessageState> {
  const res = await axios.get('/message');

  return res.data;
}

export async function updateMessage(newMessage: string): Promise<MessageState> {
  const res = await axios.put('/message', { message: newMessage });

  return res.data;
}

export async function streamMessage(): Promise<String> {
  const res = await axios.get('/stream');

  console.log(res.data);

  return res.data;
}
// if streamMessage works no need to getMessage() after an updateMessage() call
// (change this in messageSlice.ts)
