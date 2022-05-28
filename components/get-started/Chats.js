import { useState } from "react";

import { FormInput } from "../inputs";

const Chats = ({ setTab }) => {
  const [joinChatId, setJoinChatId] = useState("");
  const [friendId, setFriendId] = useState("");

  return (
    <div className="w-[85%] md:w-[450px] py-6 md:pt-8 md:pb-6 px-5 md:px-8 bg-white dark:bg-zinc-850 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-none">
      <div className="flex flex-col">
        <h3 className="font-medium mb-2">Join a Chat</h3>
        <FormInput
          type="chat-id"
          value={joinChatId}
          setValue={setJoinChatId}
          placeholder="Paste chat id to join"
          form="chats"
          error={""}
          noIcon={true}
        />

        <button className="btn-primary w-full py-2.5 rounded-lg mt-3">
          Join Chat
        </button>
      </div>

      <div className="flex flex-col mt-6">
        <h3 className="font-medium mb-2">Start new personal Chat</h3>
        <FormInput
          type="chat-id"
          value={friendId}
          setValue={setFriendId}
          placeholder="Paste your friend's user id"
          form="chats"
          error={""}
          noIcon={true}
        />

        <button className="btn-primary w-full py-2.5 rounded-lg mt-3">
          Start Chat
        </button>
      </div>

      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => setTab("profile-pic")}
          className="flex items-center gap-1 py-2 px-4 rounded-md"
        >
          <span className="icon-stroke w-5 h-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="pt-0.5 font-semibold">Prev</span>
        </button>

        <button
          onClick={() => setTab("chats")}
          className="btn-primary py-2 px-4 rounded-md"
        >
          <span className="font-semibold text-white pt-0.5">Continue to App</span>
        </button>
      </div>
    </div>
  );
};

export default Chats;
