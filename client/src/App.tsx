import React, { useEffect } from 'react';
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
        <HeadlineDisplay />
        <MetadataDisplay />
        <Spacer />
        <HeadlineInput />
      </VStack>
    </section>
  );
}

export default App;
