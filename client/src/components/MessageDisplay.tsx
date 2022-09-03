import React, { useState, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import {
  Box,
  Stack,
  Heading,
} from '@chakra-ui/react';

import DateComponent from './DateComponent';
import ChangesComponent from './ChangesComponent';
import IMessage from '../api/message';

function MessageDisplay({ socket }: { socket: Socket }) {
  const [{
    message, createdAt, updatedAt, changes,
  }, setMessageData] = useState<IMessage>({
    message: '',
    createdAt: '',
    updatedAt: '',
    changes: 0,
  });

  useEffect(() => {
    socket.on('message', (data: IMessage) => {
      setMessageData(data);
    });
  }, []);

  return (
    <section>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" alignItems="center">
        <Heading alignItems="center">
          {message}
        </Heading>

        <Stack direction="row">
          <DateComponent dateAsString={createdAt} dateType="createdAt" />
          <DateComponent dateAsString={updatedAt} dateType="updatedAt" />
          <ChangesComponent changes={changes} />
        </Stack>
      </Box>
    </section>
  );
}

export default MessageDisplay;
