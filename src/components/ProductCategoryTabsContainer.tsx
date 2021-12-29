import React from "react";
import {
  Button,
  Spacer,
  Tabs,
  TabList,
  Tab,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useProductCategories } from "../queries";
import AddCategoryModal from "../components/AddCategory";

interface ProductCategoryTabsContainerProps {
  children: any;
}

function ProductCategoryTabsContainer({
  children,
}: ProductCategoryTabsContainerProps) {
  const productCategoriesQuery = useProductCategories();

  const categories = productCategoriesQuery?.data?.data.map((cat) => cat.name);

  const {
    isOpen: isAddCategoryOpen,
    onOpen: onAddCategoryOpen,
    onClose: onAddCategoryClose,
  } = useDisclosure();

  return (
    <Tabs variant='enclosed'>
      <TabList>
        <Tab color='white'>ALL</Tab>
        {categories?.map((c, i) => (
          <Tab color='white' key={i}>
            {c.toUpperCase()}
          </Tab>
        ))}
        <Spacer />
        <Button
          variant='outline'
          color='white'
          mb={2}
          onClick={() => onAddCategoryOpen()}
        >
          <AddIcon mr={2} />
          Add Category
        </Button>
      </TabList>
      {children}
      <AddCategoryModal
        isOpen={isAddCategoryOpen}
        onClose={() => {
          onAddCategoryClose();
        }}
        onOpen={onAddCategoryOpen}
      />
    </Tabs>
  );
}

export default ProductCategoryTabsContainer;
