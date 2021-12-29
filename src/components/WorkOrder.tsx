import {
  Badge,
  Box,
  Button,
  Heading,
  Flex,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Text,
} from "@chakra-ui/react";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsEnvelope,
} from "react-icons/bs";

export function formatPhoneNumber(phoneNumberString) {
  const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(/^(1)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return phoneNumberString;
}

// type statusType =
//   | "backlog"
//   | "in_progress"
//   | "cant_fix"
//   | "awaiting_payment"
//   | "paid";

interface Order {
  id: number;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  description: string;
  // status: statusType;
  status: string;
  price: string;
}

interface WorkOrderProps {
  order: Order;
  toggleView: any;
}

function WorkOrder({ order, toggleView }: WorkOrderProps) {
  return (
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
            <Spacer />
            <Box>
              <Flex>
                <BsFillTelephoneFill size='16px' />
                <Text fontSize='md' ml={2}>
                  {formatPhoneNumber(order.contact_phone)}
                </Text>
              </Flex>
              <Flex>
                <BsEnvelope size='16px' />
                <Text fontSize='md' ml={2}>
                  {order.contact_email}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Heading>
      </Box>
      <Box px={3} py={2}>
        {/* <pre>{JSON.stringify(order, null, 2)}</pre> */}
        <Badge colorScheme='purple' mb={2}>
          {order.status}
        </Badge>
        <Stat>
          <StatLabel>Invoice Total</StatLabel>
          <StatNumber>${order.price}</StatNumber>
        </Stat>
        <Box py={2}>
          <Text>{order.description}</Text>
        </Box>
        <Button onClick={toggleView}>Update</Button>
      </Box>
    </Box>
  );
}

export default WorkOrder;
