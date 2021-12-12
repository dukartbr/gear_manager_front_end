import React from "react";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  //   FormErrorMessage,
  //   FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
// import create from "zustand";
// import { combine } from "zustand/middleware";

function Register() {
  const toast = useToast();
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePasswordView = () => setShowPassword(!showPassword);

  // const useStore = create((set) => ({
  //     isAuthenticated: false,
  //     toggleIsAuthenticated: () => set(state => ({

  //     }))
  //         // set((state) => ({
  //         //     isAuthenticated: !state.isAuthenticated,
  //         // })),
  // }));

  //   const useStore = create(combine({ isAuthenticated: false }, (set) => ({})));

  //   const isAuthenticated = useStore((state) => state.isAuthenticated);
  //   const toggleIsAuthenticated = useStore();
  // (state) => state.toggleIsAuthenticated

  const registerUser = async ({
    name,
    email,
    password,
    password_confirmation,
  }: any) => {
    const req = await axios.post(
      "http://localhost:8000/api/register",
      {
        name,
        email,
        password,
        password_confirmation,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (req.status === 201) {
      toast({
        title: "User Created",
        description: "Account created",
        status: "success",
        isClosable: true,
      });
      // toggleIsAuthenticated();
    } else {
      toast({
        title: "Error",
        description: "There was an error",
        status: "error",
        isClosable: true,
      });
    }
    return;
  };

  return (
    <Box pt={2} px={3}>
      <Box bg='gray.100' borderRadius={8} py={4} px={3}>
        <Heading textAlign='center'>Register</Heading>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          onSubmit={(values) => {
            registerUser({
              name: values.name,
              email: values.email,
              password: values.password,
              password_confirmation: values.password_confirmation,
            });
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormControl py={2} px={3} my={2}>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input
                  type='name'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </FormControl>
              <FormControl py={2} px={3} my={2}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </FormControl>
              <FormControl py={2} px={3} my={2}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handlePasswordView}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl py={2} px={3} my={2}>
                <FormLabel htmlFor='password_confirmation'>
                  Confirm Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name='password_confirmation'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password_confirmation}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handlePasswordView}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                mx={3}
                my={2}
                colorScheme='blue'
                type='submit'
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Register;
