import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A free website to download intuitive and creative illustrations and digital artworks. Available all time!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <div id="models"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
