import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Spacer, VStack } from '@chakra-ui/react';

import IMessage from './api/message';

import MessageDisplay from './components/MessageDisplay';
import MessageInput from './components/MessageInput';
import MetadataDisplay from './components/MetadataDisplay';

const socket = io();

function App() {
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

  const emitNew = (inputMessage: string) => {
    socket.emit('new', inputMessage);
  };

  return (
    <section className="app">
      <VStack spacing={[4, 8]} alignContent="center">
        <MessageDisplay message={message} className="display" />
        <MetadataDisplay createdAt={createdAt} updatedAt={updatedAt} taps={taps} />
        <Spacer />
        <MessageInput emitNew={emitNew} className="input" />
      </VStack>
    </section>
  );
}

export default App;
