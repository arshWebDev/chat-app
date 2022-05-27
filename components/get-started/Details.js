import { useState } from "react";

import { FormInput } from "../inputs";

const Details = ({ name, setName, about, setAbout, setTab }) => {
  const [errorName, setErrorName] = useState(false);

  const submitDetails = (e) => {
    e.preventDefault();

    if (name.replaceAll(" ", "").length === 0) {
      setErrorName("Please enter a name");
      return
    }

    setErrorName(false);
    setTab("profile-pic")
  };

  return (
    <div className="w-[85%] md:w-[450px] py-2 md:pt-8 md:pb-6 px-5 md:px-8 bg-white dark:bg-zinc-850 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-none">
      <form onSubmit={submitDetails}>
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="namedetails"
              className="block font-medium text-sm mb-3 px-1"
            >
              Name
            </label>
            <FormInput
              type="name"
              value={name}
              setValue={setName}
              placeholder="Full Name"
              form="details"
              error={errorName}
              noIcon={true}
            />
          </div>

          <div className="relative">
            <label
              htmlFor="about"
              className="block font-medium text-sm mb-3 px-1"
            >
              About
            </label>
            <textarea
              name="about"
              id="about"
              placeholder="About"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full h-40 py-3 px-4 bg-gray-100 dark:bg-zinc-800 rounded-lg placeholder-gray-300 dark:placeholder-zinc-500 resize-none focus:outline-none"
            ></textarea>
          </div>
        </div>
 
        <div className="flex justify-end mt-6">
          <button className="flex items-center gap-0 py-2 px-4 bg-primary rounded-md">
            <span>Next</span>
            <span className="icon-stroke w-4 h-4">
              <svg
                width="16"
                height="16"
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
      </form>
    </div>
  );
};

export default Details;
