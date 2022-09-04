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

interface MessageInputProps {
  emitNew: (inputMessage: string) => void;
  className?: string;
}

function MessageInput({ emitNew, className }: MessageInputProps) {
  const [inputMessage, setInputMessage] = useState('');

  const toast = useToast();
  const TOAST_ERROR_ID = 'error-toast';

  const handleSubmit = () => {
    if (inputMessage) {
      emitNew(inputMessage);
      setInputMessage('');
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
    <section className={className}>
      <HStack>
        <Input
          placeholder="Share a message."
          variant="flushed"
          colorScheme="blue"
          w="lg"
          size="sm"
          // width="auto"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <Text fontSize="xs" as="i">
          {`${inputMessage.length} / ${HEADLINE_LENGTH_LIMIT}`}
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

MessageInput.defaultProps = {
  className: '',
};

export default MessageInput;
