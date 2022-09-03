import { IMessage } from '../models/messageModel';

export interface ServerToClientEvents {
  message: (message: IMessage | null) => void;
}

export interface ClientToServerEvents {
  new: (newMessage: string) => void;
  stream: () => void;
}
