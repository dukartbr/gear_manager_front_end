import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import SidebarLayout from "./components/SidebarLayout";

const theme = extendTheme({
  colors: {
    header: "#009CC6",
    sidebar: "#FFA939",
    white: "#F9F3EE",
    body: "#70CDE5",
    tab: "#FFA939",
  },
});

function App({ children }: { children?: any }) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarLayout children={children} />
    </ChakraProvider>
  );
}

export default App;

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
