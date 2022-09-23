import IHeadline from '../api/headline';
import { SOCKET_CONNECT, HEADLINE_SET } from './actionNames';

export function socketConnect() {
  return {
    type: SOCKET_CONNECT,
  };
}

export function headlineSet(headline: IHeadline) {
  return {
    type: HEADLINE_SET,
    payload: headline,
  };
}
