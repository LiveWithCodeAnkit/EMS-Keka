import "./App.css";
import "react-image-upload/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import { AppProps } from "next/app";
import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
