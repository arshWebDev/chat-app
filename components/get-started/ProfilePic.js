import React from "react";
import PicUpload from "../PicUpload";

const ProfilePic = ({ pic, setPic, setTab }) => {
  return (
    <div className="w-[85%] md:w-[450px] py-6 md:pt-8 md:pb-6 px-5 md:px-8 bg-white dark:bg-zinc-850 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-none">
      <PicUpload pic={pic} setPic={setPic} />
      <h2 className="text-center font-medium text-lg mt-7">Profile Picture</h2>

      <div className="flex justify-between items-center mt-10">
        <button
          onClick={() => setTab("details")}
          className="flex items-center gap-1 py-2 px-4 bg-primary rounded-md"
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
          className="flex items-center gap-1 py-2 px-4 bg-primary rounded-md"
        >
          <span className="pt-0.5 font-semibold">Next</span>
          <span className="icon-stroke w-5 h-5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePic;
