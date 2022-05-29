import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { validateSignUpForm } from "../utils";

import { FormInput, PasswordInput } from "../components/inputs";
import Footer from "../components/Footer";
import AccountButtons from "../components/AccountButtons";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const validate = validateSignUpForm(
      username,
      setErrorUsername,
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
    <main className="flex gap-8 flex-col justify-center md:justify-between items-center min-h-screen md:pt-20">
      <Head>
        <title>Sign Up - Chaters</title>
      </Head>

      <div className="w-[80%] sm:w-[450px] md:pt-10 md:pb-8 md:px-8 md:bg-white md:dark:bg-zinc-850 rounded-2xl md:shadow-2xl md:shadow-gray-200 md:dark:shadow-none">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-3">Sign Up</h1>
          <p className="font-normal px-3">
            Create account and connect with your friends & family members
          </p>
        </div>

        <AccountButtons form="sign-up" />

        <div className="flex items-center justify-center gap-2 my-6 selection:bg-transparent">
          <span className="block w-4 h-0.5 bg-gray-800 dark:bg-zinc-100 rounded-lg"></span>
          <span className="text-sm font-semibold tebg-gray-800 dark:tebg-zinc-100">
            Or Sign In with
          </span>
          <span className="block w-4 h-0.5 bg-gray-800 dark:bg-zinc-100 rounded-lg"></span>
        </div>

        <form onSubmit={submitForm}>
          <div className="flex flex-col gap-4">
            <FormInput
              type="username"
              value={username}
              setValue={setUserName}
              placeholder="Username"
              form="sign-up"
              error={errorUsername}
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

          <button className="btn-primary w-full py-3 rounded-lg mt-4">
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

      <Footer />
    </main>
  );
};

export default SignUp;
