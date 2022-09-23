import React from 'react';
import {
  Box,
} from '@chakra-ui/react';

import { useAppSelector } from '../app/hooks';

function HeadlineDisplay() {
  const headline = useAppSelector((state) => state.headline.headline);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      className="display"
    >
      {headline}
    </Box>
  );
}

export default HeadlineDisplay;
