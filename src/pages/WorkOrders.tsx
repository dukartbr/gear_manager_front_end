import React from "react";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useWorkOrders } from "../queries";

interface Props {}

function WorkOrders(props: Props) {
  const workOrdersQuery = useWorkOrders();

  return (
    <Box height='100vh'>
      <InputGroup color='white'>
        <InputLeftElement children={<BsSearch />} />
        <Input variant='flushed' color='white' />
      </InputGroup>
      {workOrdersQuery.isLoading && (
        <Center mt='6rem'>
          <Spinner color='white' size='xl' />
        </Center>
      )}
      {workOrdersQuery.isSuccess &&
        workOrdersQuery.data.data.map((order) => (
          <Box backgroundColor='white' my={6} borderRadius={8}>
            <Box
              bg='gray.700'
              borderTopRightRadius={8}
              borderTopLeftRadius={8}
              pt={2}
              px={3}
            >
              <Heading color='white'>
                <Flex>
                  <BsFillPersonFill />
                  {order.contact_name}
                </Flex>
              </Heading>
            </Box>
            <pre>{JSON.stringify(order, null, 2)}</pre>
          </Box>
        ))}
    </Box>
  );
}

export default WorkOrders;
