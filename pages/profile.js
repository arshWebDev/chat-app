import React from "react";

import { useRouter } from "next/router";

const Profile = () => {
  const { tab } = useRouter().query;

  return <main className="flex flex-col items-center justify-center">Profile</main>;
};

export default Profile;
