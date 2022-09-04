import React, { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import {
  Box,
  Stack,
  Heading,
} from '@chakra-ui/react';

import DateComponent from './DateComponent';
import TapsComponent from './TapsComponent';
import IMessage from '../api/message';

function MessageDisplay({ socket, className }: { socket: Socket, className?: string }) {
  const [{
    message, createdAt, updatedAt, taps,
  }, setMessageData] = useState<IMessage>({
    message: '',
    createdAt: '',
    updatedAt: '',
    taps: 0,
  });

  useEffect(() => {
    socket.on('message', (data: IMessage) => {
      setMessageData(data);
    });
  }, []);

  return (
    <section className={className}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" alignItems="center">
        <Heading alignItems="center" className={`${className}-text`}>
          {message}
        </Heading>
      </Box>

      <Stack direction="row">
        <DateComponent dateAsString={createdAt} dateType="createdAt" />
        <DateComponent dateAsString={updatedAt} dateType="updatedAt" />
        <TapsComponent taps={taps} />
      </Stack>
    </section>
  );
}

MessageDisplay.defaultProps = {
  className: '',
};

export default MessageDisplay;
