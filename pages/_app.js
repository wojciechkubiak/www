import Head from "next/head";

import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Wojciech Kubiak - Site</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
