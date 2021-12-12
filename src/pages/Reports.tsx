import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { ProductsByCategory } from "../components/reportCards/inventory";

interface Props {}

function Reports(props: Props) {
  const {} = props;

  return (
    <Tabs>
      <TabList color='white'>
        <Tab textTransform='uppercase'>Inventory</Tab>
        <Tab textTransform='uppercase'>Sales</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Heading>Inventory</Heading>
          <Box pt={6}>
            <ProductsByCategory />
          </Box>
        </TabPanel>
        <TabPanel>
          <Heading>Sales</Heading>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Reports;
