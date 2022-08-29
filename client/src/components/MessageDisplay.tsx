import React, { useEffect } from 'react';
import {
  Box,
  Stack,
  Heading,
} from '@chakra-ui/react';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { streamMessageThunk } from '../features/messageSlice';
import DateComponent from './DateComponent';
import ChangesComponent from './ChangesComponent';

function MessageDisplay() {
  const dispatch = useAppDispatch();

  const {
    message, updatedAt, createdAt, changes,
  } = useAppSelector((state) => state.messageData);

  useEffect(() => {
    // dispatch(getMessageThunk());
    dispatch(streamMessageThunk());
  }, []);

  return (
    <section>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" alignItems="center">
        <Heading alignItems="center">
          {message}
        </Heading>

        <Stack direction="row">
          <DateComponent dateAsString={createdAt} dateType="createdAt" />
          <DateComponent dateAsString={updatedAt} dateType="updatedAt" />
          <ChangesComponent changes={changes} />
        </Stack>
      </Box>
    </section>
  );
}

export default MessageDisplay;
