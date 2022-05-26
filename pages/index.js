import Head from "next/head";

import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

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
