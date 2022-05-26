import { useState } from "react";

import Head from "next/head";
import { Details } from "../components/profile";

const GetStarted = () => {
  const [tab, setTab] = useState("details");

  const changeTab = (e) => {
    setTab(e.target.getAttribute("aria-label"));
  };

  return (
    <main className="min-h-screen flex flex-col gap-6 items-center justify-center">
      <Head>
        <title>Get Started - Chaters</title>
      </Head>

      <div className="flex justify-between w-[85%]">
        <button
          aria-label="details"
          onClick={changeTab}
          className={`flex gap-3 items-center py-1 ${tab === "details" ? "px-4 bg-gray-300 dark:bg-neutral-800 dark:bg-none rounded-full" : "px-1"}`}
        >
          <div
            className={`hidden md:grid place-items-center w-7 h-7 text-sm ${
              tab === "details"
                ? "text-white dark:text-black bg-black dark:bg-white"
                : ""
            } border-2 border-solid border-black dark:border-white rounded-full pointer-events-none`}
          >
            1
          </div>
          Details
        </button>
        <button
          aria-label="profile-pic"
          onClick={changeTab}
          className={`flex gap-3 items-center py-1 ${tab === "profile-pic" ? "px-4 bg-gray-300 dark:bg-neutral-800 dark:bg-none rounded-full" : "px-1"}`}
        >
          <div
            className={`hidden md:grid place-items-center w-7 h-7 text-sm ${
              tab === "profile-pic"
                ? "text-white dark:text-black bg-black dark:bg-white"
                : ""
            } border-2 border-solid border-black dark:border-white rounded-full pointer-events-none`}
          >
            2
          </div>
          Profile Pic
        </button>
        <button
          aria-label="chats"
          onClick={changeTab}
          className={`flex gap-3 items-center py-1 ${tab === "add-chats" ? "px-4 bg-gray-300 dark:bg-neutral-800 dark:bg-none rounded-full" : "px-1"}`}
        >
          <div
            className={`hidden md:grid place-items-center w-7 h-7 text-sm ${
              tab === "add-chats"
                ? "text-white dark:text-black bg-black dark:bg-white"
                : ""
            } border-2 border-solid border-black dark:border-white rounded-full pointer-events-none`}
          >
            3
          </div>
          Chats
        </button>
      </div>

      {tab === "details" && <Details />}
    </main>
  );
};

export default GetStarted;
