import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { Spacer, VStack } from '@chakra-ui/react';

import { useAppDispatch } from './app/hooks';
import { socketConnect } from './constants/actionCreators';

import HeadlineDisplay from './components/HeadlineDisplay';
import HeadlineInput from './components/HeadlineInput';
import MetadataDisplay from './components/MetadataDisplay';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(socketConnect());
  }, []);

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
