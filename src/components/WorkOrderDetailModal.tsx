import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface Props {
  isOpen: any;
  onClose: any;
  order: any;
}

function WorkOrderDetailModal({ isOpen, onClose, order }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hello World</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <pre>{JSON.stringify(order, null, 2)}</pre>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default WorkOrderDetailModal;
