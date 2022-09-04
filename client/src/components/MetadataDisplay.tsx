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
        <div>
          <Text as="sub">created:</Text>
          <Text>
            {`${createdDateObj.toLocaleString('en-US', DateTimeOptions)}`}
          </Text>
        </div>
        <div>
          <Text as="sub">updated: </Text>
          <Text>
            {`${updatedDateObj.toLocaleString('en-US', DateTimeOptions)}`}
          </Text>
        </div>
        <div>
          <Text as="sub">taps: </Text>
          <Text>
            {taps}
          </Text>
        </div>
      </HStack>
    </section>
  );
}

MetadataDisplay.defaultProps = {
  className: '',
};

export default MetadataDisplay;
