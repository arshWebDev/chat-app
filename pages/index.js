import { useEffect } from "react";

import Head from "next/head";

import { useRouter } from "next/router";
import { useDarkTheme } from "../context";

const Home = () => {
  const router = useRouter();
  const { darkTheme } = useDarkTheme();

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <main className="bg-slate-50 h-screen">
      <Head>
        <title>Chaters - App for passionate chaters</title>
        <meta name="description" content="App for passionate chaters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </main>
  );
};

export default Home;
