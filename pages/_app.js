import { useEffect } from "react";
import "../styles/global.scss";
import Head from "next/head";
import "animate.css";

function MyApp({ Component, pageProps }) {
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wow.js") : null;

  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <>
      <Head>
        <title>Taleem Mankuer Web developer</title>
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossorigin=""
        /> */}
        <meta
          name="description"
          content='Hi, my name is Taleem Mankuer and i am an aspiring
            developer and student
            with a good understanding in web development. I enjoy finding creative
            solutions to problems and spend my time experimenting with
            technologies such as
            react and inhale a wide variety of potentially useful information
            through different platforms.'
        />
        <link rel="icon" href="/tm.png" />
        <link rel="apple-touch-icon" href="/tm.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
