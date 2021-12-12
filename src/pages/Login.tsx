import React from "react";
import { useMutation } from "react-query";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useAuthenticatedStore } from "../components/SidebarLayout";
import { useUserLogin } from "../queries";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePasswordView = () => setShowPassword(!showPassword);

  // const { isAuthenticated, setAuthenticatedUser, token } =
  //     useAuthenticatedStore((state) => state);

  // const loginUser = useMutation(
  //   async ({ email, password }: { email: string; password: string }) => {
  //     console.log(`vals`, { email, password });
  //     const res =
  //       // {
  //       //     "content-type": "application/json",
  //       // }
  //     );
  //     console.log(`res`, res);
  //     return res;
  //   }
  // );

  const loginUser = useMutation(async ({ email, password }: any) => {
    const res = await axios.post("http://localhost:8000/api/products", {
      email,
      password,
    });
    console.log("res :>> ", res);
    return res;
  });

  return (
    <Box pt={2} px={3}>
      <Box bg='gray.100' borderRadius={8} py={4} px={3}>
        <Heading textAlign='center'>Login</Heading>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async ({
            email,
            password,
          }: {
            email: string;
            password: string;
          }) => {
            console.log("vals", { email, password });
            loginUser.mutate({ email, password });
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
              <Button
                mx={3}
                my={2}
                colorScheme='blue'
                type='submit'
                disabled={isSubmitting}
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Login;
