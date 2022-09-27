import React, { useEffect, useState } from 'react';
import {
  Spacer,
  VStack,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import { useAppDispatch } from '../app/hooks';
import { socketConnect } from '../constants/actionCreators';

import HeadlineDisplay from '../components/HeadlineDisplay';
import HeadlineInput from '../components/HeadlineInput';
import MetadataDisplay from '../components/MetadataDisplay';
import HowItWorks from '../components/HowItWorks';
import WhatsNew from '../components/WhatsNew';

function App() {
  const [showWhatsNew, setShowWhatsNew] = useState(true);
  const dispatch = useAppDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const closeWhatsNew = () => {
    setShowWhatsNew(false);
  };

  useEffect(() => {
    dispatch(socketConnect());
  }, []);

  return (
    <section>
      <section className="app">
        <VStack spacing={8}>
          {showWhatsNew && (
            <WhatsNew onClick={closeWhatsNew} />
          )}
          <HeadlineDisplay />
          <MetadataDisplay />
          <Spacer />
          <HeadlineInput />
        </VStack>
      </section>

      <section className="footer">
        <Button
          className="button-how-it-works"
          onClick={onOpen}
          variant="link"
          size="xs"
        >
          How tap:in Works
        </Button>
        <HowItWorks isOpen={isOpen} onClose={onClose} />
      </section>
    </section>
  );
}

export default App;
