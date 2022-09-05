import React from 'react';

import { Text, HStack } from '@chakra-ui/react';

const DateTimeOptions: Intl.DateTimeFormatOptions = {
  dateStyle: 'medium',
  timeStyle: 'short',
};

type MetadataDisplayProps = {
  createdAt: string;
  updatedAt: string;
  taps: number;
};

function MetadataDisplay({ createdAt, updatedAt, taps }: MetadataDisplayProps) {
  const createdDateObj = new Date(createdAt);
  const updatedDateObj = new Date(updatedAt);

  return (
    <section>
      <HStack className="metadata" spacing="24px">
        <div>
          <Text className="metadata-label">created:</Text>
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
    </section>
  );
}

export default MetadataDisplay;
