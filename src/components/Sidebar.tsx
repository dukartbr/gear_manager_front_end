import { Link as RRDLink } from "react-router-dom";
import {
  BsPersonPlusFill,
  BsBarChartFill,
  BsTools,
  BsBagFill,
  BsFillKeyboardFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { pallete1 } from "../utils/themes";

const sidebarItemGroups = [
  {
    title: "Service Orders",
    items: [
      {
        title: "Work Orders",
        route: "/workorders",
        icon: <BsTools />,
      },
      {
        title: "Create Work Order",
        route: "/create-workorder",
        icon: <AddIcon />,
      },
      {
        title: "Create Customer",
        route: "/create-customer",
        icon: <BsFillPersonPlusFill />,
      },
    ],
  },
  {
    title: "Gear Listings",
    items: [
      {
        title: "Current Listings",
        route: "/products",
        icon: <BsBagFill />,
      },
      {
        title: "Create Listing",
        route: "/create-product",
        icon: <AddIcon />,
      },
    ],
  },
  {
    title: "Admin",
    items: [
      {
        title: "Reports",
        route: "/reports",
        icon: <BsBarChartFill />,
      },
      {
        title: "CMS",
        route: "cms",
        icon: <BsFillKeyboardFill />,
      },
      // {
      //   title: "Register User",
      //   route: "/register",
      //   icon: <BsPersonPlusFill />,
      // },
    ],
  },
];

export default function Sidebar() {
  return (
    <VStack bg='sidebar' h='94vh' py={4} spacing={4} align='stretch'>
      <Box>
        {sidebarItemGroups.map((group, i) => (
          <Box key={i}>
            <Text
              color='white'
              fontWeight='bold'
              px={5}
              textShadow='1px 1px 3px #888'
              textTransform='uppercase'
            >
              {group.title}
            </Text>
            {group.items.map((sidebarItem, i) => (
              <Box px={6} my={5} key={i}>
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
        ))}
      </Box>
    </VStack>
  );
}
