import React, { useState } from 'react';
import { Input, Button } from '@chakra-ui/react';

import { useAppDispatch } from '../app/hooks';
import { getMessageThunk, updateMessageThunk } from '../features/messageSlice';

function MessageInput() {
  const dispatch = useAppDispatch();

  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = () => {
    dispatch(updateMessageThunk(inputMessage));
  };
  // refresh for testing purposes only?
  // how to implement auto refresh?
  const handleRefresh = () => {
    dispatch(getMessageThunk());
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
