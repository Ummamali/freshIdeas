import Head from "next/head";
import Layout from "../Components/Utils/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Fresh Ideas | Free Illustrations</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
