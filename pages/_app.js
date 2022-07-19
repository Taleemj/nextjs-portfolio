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
        <meta
          name="description"
          content="Hi, my name is Taleem Mankuer and i am an aspiring
            developer and student
            with a good understanding in web development. I enjoy finding creative
            solutions to problems and spend my time experimenting with
            technologies such as
            react and inhale a wide variety of potentially useful information
            through different platforms."
        />
        <link rel="icon" href="/tm.png" />
        <link rel="apple-touch-icon" href="/tm.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
