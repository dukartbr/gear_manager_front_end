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
  const [isOpen, setIsOpen] = React.useState(true);
  // const isAuthenticated = useAuthenticatedStore(
  //     (state) => state.isAuthenticated
  // );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Grid h='100vh' templateColumns='repeat(80, 1fr)'>
          <GridItem rowSpan={1} colSpan={80}>
            <Header isAuthenticated={true} />
          </GridItem>
          <GridItem colSpan={isOpen ? 12 : 1}>
            <Sidebar isPinned={false} />
          </GridItem>
          <GridItem colSpan={68}>
            <Box
              // bgGradient='linear(to-t, #4facfe, #00f2fe)'
              // bgGradient='linear(to-t, #37ecba,#72afd3)'
              bgGradient='linear(to-t, #96deda,#50c9c3)'
              px={4}
              py={3}
              height='100vh'
              overflow='scroll'
            >
              <Routes>
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
