// import React from "react";
import { FormInput } from "../inputs";

const Details = ({ name, setName, about, setAbout }) => {
  // const [name, setName] = useState("");

  return (
    <div className="w-[85%] md:w-[440px] h-12 py-3 md:py-10 px-5 md:px-10 bg-white dark:bg-zinc-850 rounded-2xl shadow-2xl shadow-gray-200 dark:shadow-none">
      <h1 className="text-2xl font-semibold">Details</h1>

      <div>
        {/* <FormInput
          type="name"
          value={name}
          setValue={setName}
          placeholder="Username"
          form="sign-up"
          error={errorName}
        /> */}
      </div>
    </div>
  );
};

export default Details;
