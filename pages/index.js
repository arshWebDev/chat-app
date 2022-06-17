import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) return;
      router.push({ pathname: "/sign-up" });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <main className="h-screen">
      <Head>
        <title>Chaters - App for passionate chaters</title>
        <meta name="description" content="App for passionate chaters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </main>
  );
};

export default Home;
