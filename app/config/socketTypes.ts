import { IHeadline } from '../models/headlineModel';

export interface ServerToClientEvents {
  headline: (headline: IHeadline | null) => void;
}

export interface ClientToServerEvents {
  new: (newHeadline: string) => void;
  stream: () => void;
}
