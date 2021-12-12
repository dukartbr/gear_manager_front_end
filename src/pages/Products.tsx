import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useProducts } from "../queries";
import Product from "../components/Product";
import ProductDetailModal from "../components/ProductDetailModal";

export const categories = ["amps", "effects", "guitars"];

function ProductsPage() {
  const [currentProduct, setCurrentProduct] = useState();
  const productsQuery = useProducts();
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log("currentProduct :>> ", currentProduct);

  return (
    <Tabs>
      <TabList>
        <Tab
          color='white'
          // backgroundColor='white'
          borderTopLeftRadius={8}
          borderTopRightRadius={8}
        >
          ALL
        </Tab>
        {categories.map((c, i) => (
          <Tab color='white' key={i}>
            {c.toUpperCase()}
          </Tab>
        ))}
      </TabList>

      <Box height='100vh'>
        {productsQuery.isLoading && (
          <Center mt='6rem'>
            <Spinner color='white' size='xl' />
          </Center>
        )}
        {productsQuery.isSuccess && (
          <TabPanels>
            <TabPanel>
              <Grid templateColumns='repeat(4, 1fr)' gap={4} py={3} px={3}>
                {productsQuery.data?.data?.map((product) => (
                  <GridItem key={product.id} colSpan={1}>
                    <Product
                      {...product}
                      toggleView={() => {
                        setCurrentProduct(product);
                        onOpen();
                      }}
                    />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
            {categories.map((cat, i) => (
              <TabPanel key={i}>
                <Grid templateColumns='repeat(4, 1fr)' gap={4} py={3} px={3}>
                  {productsQuery.data?.data
                    ?.filter((product) => product.category === cat)
                    .map((product) => (
                      <GridItem key={product.id} colSpan={1}>
                        <Product
                          {...product}
                          toggleView={() => console.log("hitting here")}
                        />
                      </GridItem>
                    ))}
                </Grid>
              </TabPanel>
            ))}
          </TabPanels>
        )}
      </Box>

      <ProductDetailModal
        product={currentProduct}
        isOpen={isOpen}
        onClose={() => {
          setCurrentProduct(null);
          onClose();
        }}
        onOpen={onOpen}
      />
    </Tabs>
  );
}

export default ProductsPage;
