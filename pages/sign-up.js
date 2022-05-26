import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { validateSignUpForm } from "../utils";

import { FormInput, PasswordInput } from "../components/inputs";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const validate = validateSignUpForm(
      name,
      setErrorName,
      email,
      setErrorEmail,
      password,
      setErrorPassword
    );

    if (!validate) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push({
        pathname: "/get-started",
      });
    }, 2000);
  };

  return (
    <main className="grid place-items-center min-h-screen md:py-20">
      <Head>
        <title>Sign Up - Chaters</title>
      </Head>

      <div className="w-[80%] md:w-[440px] md:py-10 md:px-10 md:bg-white md:dark:bg-zinc-850 rounded-2xl md:shadow-2xl md:shadow-gray-200 md:dark:shadow-none">
        <h1 className="text-3xl text-center font-semibold mb-10">Sign Up</h1>

        <button className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-solid border-black dark:border-white rounded-lg">
          <span className="icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5892 10.1783H12.1992V13.8883H17.7092C17.5992 14.8083 16.9992 16.1983 15.6692 17.1283C14.8292 17.7183 13.6892 18.1283 12.1992 18.1283C9.55922 18.1283 7.30922 16.3883 6.50922 13.9683C6.29922 13.3483 6.17922 12.6783 6.17922 11.9883C6.17922 11.2983 6.29922 10.6283 6.49922 10.0083C6.55922 9.8283 6.62922 9.63829 6.70922 9.46829C7.65922 7.33829 9.75922 5.85828 12.1992 5.85828C14.0792 5.85828 15.3392 6.6683 16.0692 7.3483L18.8892 4.58829C17.1592 2.97829 14.8992 1.98828 12.1992 1.98828C8.28922 1.98828 4.90922 4.22829 3.26922 7.49829C2.58922 8.85829 2.19922 10.3783 2.19922 11.9883C2.19922 13.5983 2.58922 15.1183 3.26922 16.4783L3.27922 16.4683V16.4783C4.91922 19.7483 8.28922 21.9883 12.1992 21.9883C14.8992 21.9883 17.1692 21.0983 18.8192 19.5683C20.7092 17.8283 21.7992 15.2583 21.7992 12.2083C21.7992 11.3983 21.7292 10.7983 21.5892 10.1783Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-semibold">Sign in with Google</span>
        </button>

        <span className="block text-lg text-center font-medium text-gray-400 dark:text-neutral-600 my-5">
          OR
        </span>

        <form onSubmit={submitForm}>
          <div className="flex flex-col gap-4">
            <FormInput
              type="name"
              value={name}
              setValue={setName}
              placeholder="Username"
              form="sign-up"
              error={errorName}
            />
            <FormInput
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="Email address"
              form="sign-up"
              error={errorEmail}
            />
            <PasswordInput
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="Password"
              form="sign-up"
              error={errorPassword}
            />
          </div>

          <button className="grid place-items-center w-full py-3 bg-primary rounded-lg mt-6">
            {loading ? (
              <div className="w-5 h-5 border-t-2 border-l-2 border-white border-solid animate-spin rounded-full"></div>
            ) : (
              <span className="text-white font-semibold">Create Account</span>
            )}
          </button>
        </form>

        <p className="text-sm text-center font-medium mt-4">
          Already have an account?{" "}
          <Link href="/login">
            <a className="font-semibold text-primary">Login</a>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
