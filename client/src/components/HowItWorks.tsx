import React from 'react';
import {
  Code,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface HowItWorksComponentProps {
  isOpen: boolean;
  onClose: () => void;
}
function HowItWorks({ isOpen, onClose }: HowItWorksComponentProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>How tap:in Works</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="modal-body" padding="0px 24px 24px 24px">
          <Text>
            {`tap:in is a multi-channel headline carrier, supporting both public
            and private channels. Public channels are open to all users, while
            private channels require a password to join.`}
          </Text>
          <br />
          <Text>
            {'The format of creating/joining a channel should be in the form of: '}
          </Text>
          <div className="center">
            <Code>:code:password</Code>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default HowItWorks;
