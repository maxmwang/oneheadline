import IChannel from '../api/channel';
import IError from '../api/error';
import {
  SOCKET_CONNECT,
  CHANNEL_UPDATE,
  CHANNEL_SET,
  CHANNEL_CHANGE,
  ERROR_SET,
} from './actionNames';

// @desc Creates initial socket.io connection
export function socketConnect() {
  return {
    type: SOCKET_CONNECT,
  };
}

export function channelChange(code: string, password: string = '') {
  return {
    type: CHANNEL_CHANGE,
    payload: {
      code,
      password,
    },
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

export function errorSet(error: IError) {
  return {
    type: ERROR_SET,
    payload: error,
  };
}

export function errorClear() {
  return {
    type: ERROR_SET,
    payload: {
      type: '',
      message: '',
    },
  };
}
