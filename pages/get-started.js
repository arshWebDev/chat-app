import { useState } from "react";

import Head from "next/head";

import Footer from '../components/Footer';
import { Details } from "../components/get-started";

const GetStarted = () => {
  const [tab, setTab] = useState("details");

  const changeTab = (e) => {
    setTab(e.target.getAttribute("aria-label"));
  };

  return (
    <main className="min-h-screen flex flex-col gap-6 items-center justify-between pt-28">
      <Head>
        <title>Get Started - Chaters</title>
      </Head>

      <section className="w-full h-full flex flex-col gap-10 items-center justify-center">
        <div className="flex w-[85%] md:w-[450px] justify-evenly rounded-xl bg-gray-200 dark:bg-zinc-850 overflow-hidden">
          <button
            className={`w-max py-3 px-2 ${
              tab === "details"
                ? "border-b-2 border-solid border-primary"
                : "bg-transparent"
            } focus:outline-none focus:rounded-none focus:border-b-2 focus:border-solid focus:border-primary`}
          >
            Details
          </button>
          <button
            className={`w-max py-3 px-2 ${
              tab === "profile-pic"
                ? "border-b-2 border-solid border-primary"
                : "bg-transparent"
            } focus:outline-none focus:rounded-none focus:border-b-2 focus:border-solid focus:border-primary`}
          >
            Profile Pic
          </button>
          <button
            className={`w-max py-3 px-2 ${
              tab === "chats"
                ? "border-b-2 border-solid border-primary"
                : "bg-transparent"
            } focus:outline-none focus:rounded-none focus:border-b-2 focus:border-solid focus:border-primary`}
          >
            Chats
          </button>
        </div>

        {/* {tab === "details" && <Details />} */}
      </section>
      <Footer />
    </main>
  );
};

export default GetStarted;
