import React from 'react';

import { Text, HStack } from '@chakra-ui/react';

type MetadataDisplayProps = {
  createdAt: string;
  updatedAt: string;
  taps: number;
  className?: string;
};

function MetadataDisplay({
  createdAt, updatedAt, taps, className,
}: MetadataDisplayProps) {
  const createdDateObj = new Date(createdAt);
  const updatedDateObj = new Date(updatedAt);

  return (
    <section className={className}>
      <HStack spacing="24px">
        <Text as="sub">created: </Text>
        <Text>
          {`${createdDateObj.toLocaleDateString()} ${createdDateObj.toLocaleTimeString()}`}
        </Text>
        <Text as="sub">updated: </Text>
        <Text>
          {`${updatedDateObj.toLocaleDateString()} ${updatedDateObj.toLocaleTimeString()}`}
        </Text>
        <Text as="sub">taps: </Text>
        <Text>
          {taps}
        </Text>
      </HStack>
    </section>
  );
}

MetadataDisplay.defaultProps = {
  className: '',
};

export default MetadataDisplay;
