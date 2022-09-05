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

  const inputTooLong = () => inputHeadline.length > HEADLINE_LENGTH_LIMIT;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputTooLong() && !toast.isActive('headline-length-limit')) {
      // input headline is too long
      toast({
        id: 'headline-length-limit',
        title: `Headline must be ${HEADLINE_LENGTH_LIMIT} characters or less.`,
        status: 'error',
        duration: 3000,
      });
    } else if (inputHeadline) {
      // input headline is valid
      emitNew(inputHeadline);
      setInputHeadline('');
      toast.closeAll();
    } else if (!toast.isActive('headline-doens\'t-exist')) {
      // input headline doesn't exist
      toast({
        id: 'headline-doens\'t-exist',
        title: 'Headlines can\'t be empty!',
        status: 'error',
        duration: 3000,
      });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <HStack>
        <Input
          className="input"
          placeholder="Share a headline."
          variant="flushed"
          colorScheme="blue"
          width="lg"
          size="sm"
          value={inputHeadline}
          onChange={(e) => setInputHeadline(e.target.value)}
        />
        <Text
          className={`input-length-indicator ${inputTooLong() ? 'error' : ''}`}
        >
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
    </form>
  );
}

export default HeadlineInput;
