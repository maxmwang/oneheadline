import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import { Input, Button } from '@chakra-ui/react';

function MessageInput({ socket, className }: { socket: Socket, className?: string }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = () => {
    socket.emit('new', inputMessage);
    setInputMessage('');
  };
  const handleRefresh = () => {
    socket.emit('stream');
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
      <Button onClick={handleRefresh}>
        Refresh
      </Button>
    </section>
  );
}

MessageInput.defaultProps = {
  className: '',
};

export default MessageInput;
