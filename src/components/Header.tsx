import {
  Avatar,
  AvatarBadge,
  Box,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spacer,
} from "@chakra-ui/react";
import { pallete1 } from "../utils/themes";

export default function Header({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  return (
    <Box bg='header' py={2}>
      <Container maxW='container.xl'>
        <Flex>
          <Heading color='white'>CRUD API</Heading>
          <Spacer />
          <Menu>
            <MenuButton>
              <Avatar>
                <AvatarBadge
                  boxSize='1.25em'
                  bg={isAuthenticated ? "green.500" : "red.500"}
                />
              </Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuDivider />
              <MenuItem>
                {isAuthenticated ? (
                  "Logout"
                ) : (
                  <a href='/login'>
                    <Box>Login</Box>
                  </a>
                )}
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
}
