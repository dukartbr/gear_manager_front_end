import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarLayout from "../components/SidebarLayout";

function App({ children }: { children?: any }) {
  return (
    <ChakraProvider>
      <SidebarLayout children={children} />
    </ChakraProvider>
  );
}

export default App;

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
