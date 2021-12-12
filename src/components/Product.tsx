import React from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  Stat,
  StatNumber,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: string;
  category?: string;
  inventory?: string;
  toggleView?: () => void;
}

export default function Product({
  name,
  description,
  price,
  inventory,
  category,
  toggleView,
}: ProductProps) {
  return (
    <Box h='400px'>
      <Box
        bg='gray.700'
        color='white'
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        py={2}
        px={3}
        h='300px'
      >
        <Heading as='h3'>{name}</Heading>
        <Badge colorScheme='purple'>Category: {category}</Badge>
        <Stat>
          <StatNumber>${price}.00</StatNumber>
        </Stat>
        <Box>
          <Text>{description}</Text>
        </Box>
      </Box>
      <Flex
        bg='white'
        color='gray.700'
        borderBottomLeftRadius={8}
        borderBottomRightRadius={8}
        py={2}
        px={3}
      >
        <Button color='blue.500' onClick={toggleView}>
          View
        </Button>
        <Spacer />
        <Box>
          <Badge colorScheme={parseInt(inventory) > 2 ? "green" : "red"}>
            Inventory: {inventory}
          </Badge>
        </Box>
      </Flex>
    </Box>
  );
}
