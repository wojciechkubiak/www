import Head from "next/head";
import "swiper/css";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <script src="https://unpkg.com/embla-carousel/embla-carousel.umd.js"></script>
        <title>Wojciech Kubiak - Site</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
