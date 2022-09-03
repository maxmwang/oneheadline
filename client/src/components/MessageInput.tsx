import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import { Input, Button } from '@chakra-ui/react';

function MessageInput({ socket }: { socket: Socket }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = () => {
    socket.emit('new', inputMessage);
    setInputMessage('');
  };
  const handleRefresh = () => {
    socket.emit('stream');
  };

  return (
    <section>
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

export default MessageInput;
