import { Link as RRDLink } from "react-router-dom";
import { BsPersonPlusFill, BsBarChartFill, BsTools } from "react-icons/bs";
import { AddIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const sidebarItemGroups = [
  {
    title: "Service Orders",
    items: [
      {
        title: "Work Orders",
        route: "/workorders",
        icon: <BsTools />,
      },
    ],
  },
  {
    title: "Gear Listings",
    items: [
      {
        title: "Current Listings",
        route: "/products",
        icon: <PlusSquareIcon />,
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
        title: "Register User",
        route: "/register",
        icon: <BsPersonPlusFill />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <VStack bg='blue.300' h='94vh' py={4} spacing={4} align='stretch'>
      <Box h='95%'>
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
