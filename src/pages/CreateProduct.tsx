import React from "react";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { categories } from "../pages/Products";

function CreateProduct() {
  const toast = useToast();

  // const { token } = useAuthenticatedStore((state) => state);
  const token = "39|oy5CEraR8kfgWP1iQ2v24kCT5OqzABkoWz4DeRjB";

  console.log(`token`, token);

  const createProduct = async ({
    name,
    slug,
    description,
    price,
    category,
    inventory,
    token,
  }: any) => {
    const req = await axios.post(
      "http://localhost:8000/api/products",
      {
        name,
        slug,
        description,
        price,
        category,
        inventory,
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(`req`, req);

    if (req.status === 201) {
      toast({
        status: "success",
        title: "Success",
        description: "Product successfully created",
      });
    } else {
      console.log("req error :>> ", req);
      toast({
        status: "error",
        description: "Unknown error",
      });
    }
  };
  return (
    <Box bg='gray.100' borderRadius={8} py={4} px={3} boxShadow='2xl'>
      <Heading textAlign='center'>Create a Product</Heading>
      <Formik
        initialValues={{
          name: "",
          slug: "",
          description: "",
          price: 0,
          category: "",
          inventory: 0,
        }}
        onSubmit={({ name, slug, description, price, category, inventory }) => {
          console.log("values :>>", {
            name,
            slug,
            description,
            price,
            category,
            inventory,
          });
          createProduct({
            name,
            slug,
            description,
            price,
            category,
            inventory,
          });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <FormControl py={2} px={3} my={2}>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </FormControl>
            <FormControl py={2} px={3} my={2}>
              <FormLabel htmlFor='description'>Description</FormLabel>
              <Input
                name='description'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
            </FormControl>
            <FormControl py={2} px={3} my={2}>
              <FormLabel htmlFor='slug'>Slug</FormLabel>
              <Input
                name='slug'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.slug}
              />
            </FormControl>
            <FormControl py={2} px={3} my={2}>
              <FormLabel htmlFor='category'>Category</FormLabel>
              <Select
                placeholder='Select option'
                name='category'
                onChange={handleChange}
              >
                {categories
                  .filter((cat) => cat !== "all")
                  .map((cat) => (
                    <option value={cat}>{cat}</option>
                  ))}
              </Select>
            </FormControl>
            <FormControl py={2} px={3} my={2}>
              <FormLabel htmlFor='price'>Price</FormLabel>
              <Input
                name='price'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </FormControl>
            <FormControl py={2} px={3} my={2}>
              <FormLabel htmlFor='inventory'>Inventory</FormLabel>
              <NumberInput>
                <NumberInputField name='inventory' onChange={handleChange} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
  );
}

export default CreateProduct;
