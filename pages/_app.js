import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fresh Ideas | Free Illustrations</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
