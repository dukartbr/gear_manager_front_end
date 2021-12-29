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
  useDisclosure,
} from "@chakra-ui/react";
import WorkOrder from "../components/WorkOrder";
import WorkOrderDetailModal from "../components/WorkOrderDetailModal";
import { useWorkOrders } from "../queries";

interface Props {}

function WorkOrders(props: Props) {
  const [currentWorkOrder, setCurrentWorkOrder] = React.useState();
  const workOrdersQuery = useWorkOrders();

  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <WorkOrder
            order={order}
            toggleView={() => {
              setCurrentWorkOrder(order);
              onOpen();
            }}
          />
        ))}

      <WorkOrderDetailModal
        isOpen={isOpen}
        onClose={onClose}
        order={currentWorkOrder}
      />
    </Box>
  );
}

export default WorkOrders;
