import { Link as RRDLink } from "react-router-dom";
import { BsPersonPlusFill, BsBarChartFill } from "react-icons/bs";
import {
  AddIcon,
  ArrowRightIcon,
  BellIcon,
  PlusSquareIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  ResponsiveValue,
  VStack,
  useToken,
} from "@chakra-ui/react";

const WIDTH_OPEN = 20;
const WIDTH_CLOSED = 14;

const sidebarItems = [
  {
    title: "Home",
    route: "/",
    icon: <BellIcon />,
  },
  {
    title: "Products List",
    route: "/products",
    icon: <PlusSquareIcon />,
  },
  {
    title: "Create Product",
    route: "/create-product",
    icon: <AddIcon />,
  },
  {
    title: "Register",
    route: "/register",
    icon: <BsPersonPlusFill />,
  },
  {
    title: "Reports",
    route: "/reports",
    icon: <BsBarChartFill />,
  },
];

interface SidebarProps {
  isPinned: boolean;
}

export default function Sidebar({ isPinned }: SidebarProps) {
  const transitionSlow = useToken("transition", "duration.slow");

  function toggleSidebar() {
    console.log("hello world");
  }

  return (
    <>
      <SidebarPusher {...{ transitionSlow, isPinned }} />

      <VStack bg='blue.300' h='94vh' py={4} spacing={4} align='stretch'>
        <Box h='95%'>
          {sidebarItems.map((sidebarItem, i) => (
            <Box px={5} my={5} key={i}>
              <Button
                as={RRDLink}
                to={sidebarItem.route}
                variant='outline'
                size='md'
                leftIcon={sidebarItem.icon}
                color='white'
                _hover={{
                  bg: "blue.700",
                  // color: "white",
                  border: "blue.700",
                  textShadow: "2px 2px blue.700",
                }}
              >
                <Text>{sidebarItem.title}</Text>
              </Button>
            </Box>
          ))}
        </Box>
        <Box h='5%' px={5} onClick={() => toggleSidebar()}>
          <IconButton
            aria-label='expand/collapse'
            icon={<ArrowRightIcon />}
            variant='outline'
            color='white'
          />
        </Box>
      </VStack>
    </>
  );
}

function SidebarPusher({
  transitionSlow,
  isPinned,
}: {
  transitionSlow: ResponsiveValue<string>;
  isPinned: boolean;
}) {
  return (
    <Flex
      transitionDuration={transitionSlow}
      transitionTimingFunction='ease-out'
      width={[
        0,
        null,
        null,
        isPinned ? WIDTH_OPEN : WIDTH_CLOSED,
        isPinned ? WIDTH_OPEN : WIDTH_CLOSED,
      ]}
    />
  );
}
