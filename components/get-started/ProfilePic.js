import React from "react";
import PicUpload from "../PicUpload";

const ProfilePic = ({ pic, setPic, completeProfile }) => {
  return (
    <div className="w-[85%] md:w-[450px] py-6 md:pt-8 md:pb-6 px-5 md:px-8 bg-white dark:bg-zinc-850 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-none">
      <PicUpload pic={pic} setPic={setPic} />
      <h2 className="text-center font-medium text-lg mt-7">Profile Picture</h2>

      <div className="flex items-center mt-10">

        <button
          onClick={() => completeProfile()}
          className="btn-primary py-2 px-4 rounded-md ml-auto"
        >
          <span className="font-semibold text-white pt-0.5">Complete Profile</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePic;
