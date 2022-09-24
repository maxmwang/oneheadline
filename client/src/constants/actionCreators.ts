import IChannel from '../api/channel';
import { SOCKET_CONNECT, CHANNEL_UPDATE, CHANNEL_SET } from './actionNames';

// @desc Creates initial socket.io connection
export function socketConnect() {
  return {
    type: SOCKET_CONNECT,
  };
}

// @desc Updates the headline document in MongoDB
export function headlineUpdate(headline: string) {
  return {
    type: CHANNEL_UPDATE,
    payload: headline,
  };
}

// @desc Updates the headline object in Redux store
export function channelSet(channel: IChannel) {
  return {
    type: CHANNEL_SET,
    payload: channel,
  };
}
