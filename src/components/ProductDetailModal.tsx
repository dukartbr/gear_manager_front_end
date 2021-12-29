import {
  Badge,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Spacer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { ProductProps } from "./Product";

const deleteProduct = async (id) => {
  const res = await axios.delete(`http://localhost:8000/api/products/${id}`);
  console.log("res :>> ", res);
};

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: any;
  product: ProductProps;
}

function ProductDetailModal({
  isOpen,
  onClose,
  product,
}: ProductDetailModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay />
      <ModalContent overflow='hidden'>
        <ModalHeader bg='header' color='white'>
          {product?.name}
          <Text fontSize='12px' color='gray.100'>
            Product ID: #{product?.id}
          </Text>
        </ModalHeader>
        <ModalCloseButton color='white' />
        <ModalBody bg='body'>
          <Stat>
            <StatLabel>Current Listed Price</StatLabel>
            <StatNumber>${product?.price}</StatNumber>
          </Stat>
          <Divider />
          <Badge
            colorScheme={parseInt(product?.inventory) > 2 ? "green" : "red"}
          >
            Inventory: {product?.inventory}
          </Badge>
          <br />
          <Badge colorScheme='purple'>Category: {product?.category}</Badge>
          <Text>{product?.description}</Text>
          {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Edit
          </Button>
          <Button
            // variant='ghost'
            colorScheme='red'
            onClick={() => deleteProduct(product?.id)}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProductDetailModal;
