import IHeadline from '../api/headline';
import { SOCKET_CONNECT, HEADLINE_UPDATE, HEADLINE_SET } from './actionNames';

export function socketConnect() {
  return {
    type: SOCKET_CONNECT,
  };
}

export function headlineUpdate(headline: string) {
  return {
    type: HEADLINE_UPDATE,
    payload: headline,
  };
}

export function headlineSet(headline: IHeadline) {
  return {
    type: HEADLINE_SET,
    payload: headline,
  };
}
