import React from 'react';
import {
  Box,
} from '@chakra-ui/react';

interface HeadlineDisplayProps {
  headline: string;
  className?: string;
}

function HeadlineDisplay({ headline, className }: HeadlineDisplayProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      className={className}
    >
      {headline}
    </Box>
  );
}

HeadlineDisplay.defaultProps = {
  className: '',
};

export default HeadlineDisplay;
