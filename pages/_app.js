import Head from "next/head";
import { Provider } from "react-redux";
import mainStore from "../store/mainStore";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={mainStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
