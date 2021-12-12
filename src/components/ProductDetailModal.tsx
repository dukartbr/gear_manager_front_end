import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { ProductProps } from "./Product";

// const config = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };

const deleteProduct = async (id) => {
  const res = await axios.delete(`http://localhost:8000/api/products/${id}`);
  console.log("res :>> ", res);
};

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: any;
  onOpen: any;
  product: ProductProps;
}

function ProductDetailModal({
  isOpen,
  onClose,
  onOpen,
  product,
}: ProductDetailModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <pre>{JSON.stringify(product, null, 2)}</pre>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant='ghost'
            colorScheme='red'
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProductDetailModal;
