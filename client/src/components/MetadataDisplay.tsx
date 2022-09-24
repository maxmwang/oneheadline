import React from 'react';

import { Text, HStack } from '@chakra-ui/react';
import { useAppSelector } from '../app/hooks';

const DateTimeOptions: Intl.DateTimeFormatOptions = {
  dateStyle: 'medium',
  timeStyle: 'short',
};

function MetadataDisplay() {
  const code = useAppSelector((state) => state.channel.code);
  const createdAt = useAppSelector((state) => state.channel.createdAt);
  const updatedAt = useAppSelector((state) => state.channel.updatedAt);
  const taps = useAppSelector((state) => state.channel.taps);

  const createdDateObj = new Date(createdAt);
  const updatedDateObj = new Date(updatedAt);

  return (
    <HStack className="metadata" spacing="24px">
      <div>
        <Text className="metadata-label">code: </Text>
        <Text className="metadata-content">
          {code}
        </Text>
      </div>
      <div>
        <Text className="metadata-label">created: </Text>
        <Text className="metadata-content">
          {`${createdDateObj.toLocaleString('en-US', DateTimeOptions)}`}
        </Text>
      </div>
      <div>
        <Text className="metadata-label">updated: </Text>
        <Text className="metadata-content">
          {`${updatedDateObj.toLocaleString('en-US', DateTimeOptions)}`}
        </Text>
      </div>
      <div>
        <Text className="metadata-label">taps: </Text>
        <Text className="metadata-content">
          {taps}
        </Text>
      </div>
    </HStack>
  );
}

export default MetadataDisplay;
