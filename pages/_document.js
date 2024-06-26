import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <meta
          name="description"
          content="A free website to download intuitive and creative illustrations and digital artworks. Available all time!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="font-body">
        <div id="models"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
