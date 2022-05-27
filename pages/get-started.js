import { useState } from "react";

import Head from "next/head";

import Footer from "../components/Footer";
import { Details, ProfilePic } from "../components/get-started";

const GetStarted = () => {
  const [tab, setTab] = useState("details");

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const [pic, setPic] = useState(null);

  return (
    <main className="min-h-screen flex flex-col gap-8 items-center justify-between pt-16 md:pt-20">
      <Head>
        <title>Get Started - Chaters</title>
      </Head>

      <section className="w-full h-full flex flex-col gap-10 items-center justify-center">
        <div className="flex w-[85%] md:w-[450px] justify-evenly rounded-xl bg-white dark:bg-zinc-850 shadow-2xl dark:shadow-none shadow-gray-200 overflow-hidden">
          <button
            onClick={(e) => setTab("details")}
            className={`w-max pt-4 pb-3.5 px-3 ${
              tab === "details"
                ? "font-semibold border-b-2 border-solid border-primary"
                : "font-medium text-gray-500 dark:text-zinc-600 bg-transparent"
            } focus:outline-none focus:rounded-none focus:border-b-2 focus:border-solid focus:border-primary`}
          >
            Details
          </button>
          <button
            onClick={(e) => setTab("profile-pic")}
            className={`w-max pt-4 pb-3.5 px-3 ${
              tab === "profile-pic"
                ? "font-semibold border-b-2 border-solid border-primary"
                : "font-medium text-gray-500 dark:text-zinc-600 bg-transparent"
            } focus:outline-none focus:rounded-none focus:border-b-2 focus:border-solid focus:border-primary`}
          >
            Profile Pic
          </button>
          <button
            onClick={(e) => setTab("chats")}
            className={`w-max pt-4 pb-3.5 px-3 ${
              tab === "chats"
                ? "font-semibold border-b-2 border-solid border-primary"
                : "font-medium text-gray-500 dark:text-zinc-600 bg-transparent"
            } focus:outline-none focus:rounded-none focus:border-b-2 focus:border-solid focus:border-primary`}
          >
            Chats
          </button>
        </div>

        {tab === "details" && (
          <Details
            name={name}
            setName={setName}
            about={about}
            setAbout={setAbout}
            setTab={setTab}
          />
        )}

        {tab === "profile-pic" && (
          <ProfilePic pic={pic} setPic={setPic} setTab={setTab} />
        )}
      </section>

      <Footer />
    </main>
  );
};

export default GetStarted;
