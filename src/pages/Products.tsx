import { useState } from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Spinner,
  TabPanels,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import { useProducts } from "../queries";
import Product from "../components/Product";
import ProductDetailModal from "../components/ProductDetailModal";
import ProductCategoryTabsContainer from "../components/ProductCategoryTabsContainer";

export const categories = ["amps", "effects", "guitars"];

function ProductsPage() {
  const [currentProduct, setCurrentProduct] = useState();
  const productsQuery = useProducts();

  const {
    isOpen: isViewProductOpen,
    onOpen: onViewProductOpen,
    onClose: onViewProductClose,
  } = useDisclosure();

  return (
    <ProductCategoryTabsContainer>
      <Box height='100vh'>
        {productsQuery.isLoading && (
          <Center mt='6rem'>
            <Spinner color='white' size='xl' />
          </Center>
        )}
        {productsQuery.isSuccess && (
          <TabPanels>
            <TabPanel px={0}>
              <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                {productsQuery.data?.data?.map((product) => (
                  <GridItem key={product.id} colSpan={1}>
                    <Product
                      {...product}
                      toggleView={() => {
                        setCurrentProduct(product);
                        onViewProductOpen();
                      }}
                    />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
            {categories.map((cat, i) => (
              <TabPanel key={i}>
                <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                  {productsQuery.data?.data
                    ?.filter((product) => product.category === cat)
                    .map((product) => (
                      <GridItem key={product.id} colSpan={1}>
                        <Product
                          {...product}
                          toggleView={() => {
                            setCurrentProduct(product);
                            onViewProductOpen();
                          }}
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
        isOpen={isViewProductOpen}
        onClose={() => {
          setCurrentProduct(null);
          onViewProductClose();
        }}
      />
    </ProductCategoryTabsContainer>
  );
}

export default ProductsPage;
