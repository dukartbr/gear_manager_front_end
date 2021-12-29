import React from "react";
import {
  Button,
  Box,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ProductProps } from "./Product";

interface Props {
  isOpen: boolean;
  onClose: any;
  onOpen: any;
}

function AddCategory({ isOpen, onClose, onOpen }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Category</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder='Category Name' />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddCategory;
