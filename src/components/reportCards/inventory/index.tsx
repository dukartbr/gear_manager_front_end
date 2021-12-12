import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useProducts } from "../../../queries";
import { categories } from "../../../pages/Products";

Chart.register(ArcElement, Tooltip, Legend);

function createUsableData(arrToAdd: number[]) {
  return {
    labels: categories.map((cat) => cat.toUpperCase()),
    datasets: [
      {
        label: "# of Products",
        data: arrToAdd,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
}

export function ProductsByCategory() {
  const productsQuery = useProducts();
  const products = productsQuery?.data?.data;

  const inventoryCategories = categories.map(
    (cat) => products?.map((p) => p.category)?.filter((i) => i === cat).length
  );

  console.log("inventoryCategories :>> ", inventoryCategories);

  return (
    <Box bg='white' px={4} py={3} borderRadius={8}>
      <Heading size='md'>Products by Inventory</Heading>
      <Box bg='white' borderRadius={12} width='100%' p={5} mb={4}>
        <Grid templateColumns='repeat(4, 1fr)'>
          <GridItem colSpan={1}>
            <Doughnut data={createUsableData(inventoryCategories)} />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>This is data text</Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
