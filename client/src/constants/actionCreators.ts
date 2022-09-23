import IHeadline from '../api/headline';
import { SOCKET_CONNECT, HEADLINE_UPDATE, HEADLINE_SET } from './actionNames';

// @desc Creates initial socket.io connection
export function socketConnect() {
  return {
    type: SOCKET_CONNECT,
  };
}

// @desc Updates the headline document in MongoDB
export function headlineUpdate(headline: string) {
  return {
    type: HEADLINE_UPDATE,
    payload: headline,
  };
}

// @desc Updates the headline object in Redux store
export function headlineSet(headline: IHeadline) {
  return {
    type: HEADLINE_SET,
    payload: headline,
  };
}
