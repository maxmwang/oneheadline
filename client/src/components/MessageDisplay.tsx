import React from 'react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';

interface MessageDisplayProps {
  message: string;
  className?: string;
}

function MessageDisplay({ message, className }: MessageDisplayProps) {
  return (
    <section className={className}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" alignItems="center">
        <Heading alignItems="center" className={`${className}-text`}>
          {message}
        </Heading>
      </Box>
    </section>
  );
}

MessageDisplay.defaultProps = {
  className: '',
};

export default MessageDisplay;
