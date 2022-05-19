import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="bg-slate-50 h-screen">
      <Head>
        <title>Chaters - App for passionate chaters</title>
        <meta name="description" content="App for passionate chaters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </main>
  );
};

export default Home;
