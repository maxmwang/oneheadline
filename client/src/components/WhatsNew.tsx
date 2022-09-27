import React from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  VStack,
  CloseButton,
  Spacer,
} from '@chakra-ui/react';

interface WhatsNewComponentProps {
  onClick: () => void;
}
function WhatsNew({ onClick }: WhatsNewComponentProps) {
  return (
    <Box className="how-it-works">
      <VStack align="left">
        <Flex>
          <Heading size="lg">{'What\'s New in v2'}</Heading>
          <Spacer />
          <CloseButton onClick={onClick} />
        </Flex>
        <Text as="b" fontSize="sm">
          Public and Private Channels
        </Text>
        <Text fontSize="sm">
          Join and create public and private channels. Private channels
          are password protected.
        </Text>
      </VStack>
    </Box>
  );
}

export default WhatsNew;
