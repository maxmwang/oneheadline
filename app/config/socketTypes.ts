import { IChannel } from '../models/channelModel';

export interface Error {
  type: string;
  message: string;
}

export interface ServerToClientEvents {
  channel: (channel: IChannel) => void;
}

export interface ClientToServerEvents {
  'headline/update': (newHeadline: string) => void;
  'channel/get': (channelCode: string) => void;
  stream: () => void;
}
