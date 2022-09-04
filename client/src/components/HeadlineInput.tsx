import React, { useState } from 'react';
import {
  Input,
  IconButton,
  HStack,
  useToast,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const HEADLINE_LENGTH_LIMIT = 64;

interface HeadlineInputProps {
  emitNew: (inputHeadline: string) => void;
}

function HeadlineInput({ emitNew }: HeadlineInputProps) {
  const [inputHeadline, setInputHeadline] = useState('');

  const toast = useToast();
  const TOAST_ERROR_ID = 'error-toast';

  const handleSubmit = () => {
    if (inputHeadline) {
      emitNew(inputHeadline);
      setInputHeadline('');
      toast.close(TOAST_ERROR_ID);
    } else if (!toast.isActive(TOAST_ERROR_ID)) {
      toast({
        id: TOAST_ERROR_ID,
        title: 'Headlines can\'t be empty!',
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <section>
      <HStack>
        <Input
          placeholder="Share a headline."
          variant="flushed"
          colorScheme="blue"
          w="lg"
          size="sm"
          // width="auto"
          value={inputHeadline}
          onChange={(e) => setInputHeadline(e.target.value)}
        />
        <Text fontSize="xs" as="i">
          {`${inputHeadline.length} / ${HEADLINE_LENGTH_LIMIT}`}
        </Text>
        <IconButton
          aria-label="Submit"
          variant="ghost"
          colorScheme="blue"
          onClick={handleSubmit}
          icon={<ArrowForwardIcon />}
        />
      </HStack>
    </section>
  );
}

export default HeadlineInput;
