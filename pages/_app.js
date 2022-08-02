import Head from "next/head";
import { Provider } from "react-redux";
import mainStore from "../store/mainStore";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={mainStore}>
      <Head>
        <title>Fresh Ideas | Free Illustrations</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
