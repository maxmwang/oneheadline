import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Spacer, VStack } from '@chakra-ui/react';

import IHeadline from './api/headline';

import HeadlineDisplay from './components/HeadlineDisplay';
import HeadlineInput from './components/HeadlineInput';
import MetadataDisplay from './components/MetadataDisplay';

const socket = io();

function App() {
  const [{
    headline, createdAt, updatedAt, taps,
  }, setHeadlineData] = useState<IHeadline>({
    headline: '',
    createdAt: '',
    updatedAt: '',
    taps: 0,
  });

  useEffect(() => {
    socket.on('headline', (data: IHeadline) => {
      setHeadlineData(data);
    });
  }, []);

  const emitNew = (inputHeadline: string) => {
    socket.emit('new', inputHeadline);
  };

  return (
    <section className="app">
      <VStack spacing={8}>
        <HeadlineDisplay headline={headline} />
        <MetadataDisplay createdAt={createdAt} updatedAt={updatedAt} taps={taps} />
        <Spacer />
        <HeadlineInput emitNew={emitNew} />
      </VStack>
    </section>
  );
}

export default App;
