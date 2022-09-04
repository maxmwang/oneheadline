import React, { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';

interface MessageInputProps {
  emitNew: (inputMessage: string) => void;
  className?: string;
}

function MessageInput({ emitNew, className }: MessageInputProps) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = () => {
    emitNew(inputMessage);
    setInputMessage('');
  };

  return (
    <section className={className}>
      <Input
        placeholder="New Message"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button onClick={handleSubmit} colorScheme="blue">
        Submit
      </Button>
    </section>
  );
}

MessageInput.defaultProps = {
  className: '',
};

export default MessageInput;
