import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Button } from '@chakra-ui/react';

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
  const emitStream = () => {
    socket.emit('stream');
  };

  return (
    <section>
      <MessageDisplay message={message} className="display" />
      <MetadataDisplay createdAt={createdAt} updatedAt={updatedAt} taps={taps} />
      <MessageInput emitNew={emitNew} className="input" />
      <Button onClick={emitStream}>
        Refresh
      </Button>
    </section>
  );
}

export default App;
