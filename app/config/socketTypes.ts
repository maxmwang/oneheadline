import { IChannel } from '../models/channelModel';

interface Error {
  type: string;
  message: string;
}

export interface ServerToClientEvents {
  channel: (channel: IChannel) => void;
  error: (error: Error) => void;
}

export interface ClientToServerEvents {
  'headline/update': (newHeadline: string) => void;
  'channel/get': (channelCode: string, password: string) => void;
  stream: () => void;
}
