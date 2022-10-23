import React, { useEffect, useState } from 'react';
import {
  Input,
  IconButton,
  HStack,
  useToast,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { channelChange, errorClear, headlineUpdate } from '../constants/actionCreators';

const INPUT_LIMITS = {
  Headline: 64,
  Code: 16,
};

function HeadlineInput() {
  const dispatch = useAppDispatch();

  const [rawInput, setRawInput] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const error = useAppSelector((state) => state.error);

  const toast = useToast();

  const getInputType = () => (rawInput.startsWith(':') ? 'Code' : 'Headline');
  const getInputLength = () => (getInputType() === 'Headline' ? headline.length : code.length);
  const inputTooLong = () => getInputLength() > INPUT_LIMITS[getInputType()];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputTooLong() && !toast.isActive('input-length-limit')) {
      // input exceeds limit
      toast({
        id: 'headline-length-limit',
        title: 'Headline too long',
        description: `${getInputType()} must be ${INPUT_LIMITS[getInputType()]} characters or less`,
        status: 'error',
        duration: 3000,
      });
      return;
    }

    if (getInputType() === 'Headline') {
      if (!headline.trim() && !toast.isActive('input-empty')) {
        // headline doesn't exist
        toast({
          id: 'input-empty',
          title: 'Headline can\'t be empty!',
          status: 'error',
          duration: 3000,
        });
        return;
      }
      dispatch(headlineUpdate(headline.trim()));
    }
    if (getInputType() === 'Code') {
      if (!code.trim() && !toast.isActive('input-empty')) {
        // code doesn't exist
        toast({
          id: 'input-empty',
          title: 'Code can\'t be empty!',
          status: 'error',
          duration: 3000,
        });
        return;
      }
      if (rawInput !== ':' && rawInput.endsWith(':')) {
        // password doesn't exist but second colon is added
        toast({
          id: 'input-empty',
          title: 'Password can\'t be empty!',
          status: 'error',
          duration: 3000,
        });
        return;
      }
      if (rawInput.split(':').length - 1 > 2) {
        // too many colons
        toast({
          id: 'input-invalid',
          title: 'Code or password cannot have a colon (:) in it.',
          description: 'Code must be in the format ":code:password".',
          status: 'error',
          duration: 3000,
        });
        return;
      }

      dispatch(channelChange(code, password));
    }

    setRawInput('');
    toast.closeAll();
  };

  useEffect(() => {
    if (rawInput.startsWith(':')) {
      const parsedInput = rawInput.split(':').filter((s) => s);
      // format: [code, password?]
      setCode(parsedInput[0] || '/');
      setPassword(parsedInput[1] || '');
    } else {
      setHeadline(rawInput);
    }
  }, [rawInput]);

  useEffect(() => {
    if (error.type && error.message) {
      toast({
        id: error.type,
        title: error.message,
        status: 'error',
        duration: 3000,
        onCloseComplete: () => dispatch(errorClear),
      });
    } else {
      toast.closeAll();
    }
  }, [error]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <HStack className="input">
        <Input
          placeholder="Tap a headline."
          variant="flushed"
          colorScheme="blue"
          width="lg"
          size="sm"
          value={rawInput}
          onChange={(e) => setRawInput(e.target.value)}
        />

        <Text
          className={`input-length-indicator ${inputTooLong() ? 'error' : ''}`}
        >
          {`${getInputLength()} / ${INPUT_LIMITS[getInputType()]}`}
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
