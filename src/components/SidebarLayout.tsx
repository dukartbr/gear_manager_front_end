import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Layout Components
import Header from "./Header";
import Sidebar from "./Sidebar";

// Pages
import ProductsPage from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CreateProduct from "../pages/CreateProduct";
import Reports from "../pages/Reports";
import WorkOrders from "../pages/WorkOrders";
import { pallete1 } from "../utils/themes";

// const useStore = create((set) => ({
//     token: "",
//     isAuthenticated: false,
//     setAuthenticatedUser: (token) =>
//         set((state) => ({
//             token,
//             isAuthenticated: !state.isAuthenticated,
//         })),
// }));

export const useAuthenticatedStore = {};

export default function SidebarLayout({ children }: { children: any }) {
  // const isAuthenticated = useAuthenticatedStore(
  //     (state) => state.isAuthenticated
  // );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Grid templateColumns='repeat(8, 1fr)'>
          <GridItem rowSpan={1} colSpan={8}>
            <Header isAuthenticated={true} />
          </GridItem>
          <GridItem colSpan={1}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={7}>
            <Box
              // bgGradient='linear(to-t, #96deda,#50c9c3)'
              bg='body'
              px={4}
              py={3}
              overflow='scroll'
            >
              <Routes>
                <Route path='/workorders' element={<WorkOrders />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/create-product' element={<CreateProduct />} />
                <Route path='/reports' element={<Reports />} />
              </Routes>
            </Box>
          </GridItem>
        </Grid>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
