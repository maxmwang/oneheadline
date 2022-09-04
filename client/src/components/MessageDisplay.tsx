import React from 'react';
import {
  Box,
} from '@chakra-ui/react';

interface MessageDisplayProps {
  message: string;
  className?: string;
}

function MessageDisplay({ message, className }: MessageDisplayProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      className={className}
    >
      {message}
    </Box>
  );
}

MessageDisplay.defaultProps = {
  className: '',
};

export default MessageDisplay;
