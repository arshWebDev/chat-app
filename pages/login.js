import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { FormInput, PasswordInput } from "../components/inputs";
import Footer from "../components/Footer";
import AccountButtons from "../components/AccountButtons";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const validate = validateSignUpForm(
  //     username,
  //     setErrorUsername,
  //     email,
  //     setErrorEmail,
  //     password,
  //     setErrorPassword
  //   );

  //   if (!validate) return;
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //     router.push({
  //       pathname: "/get-started",
  //     });
  //   }, 2000);
  // };

  return (
    <main className="flex gap-8 flex-col justify-center md:justify-between items-center min-h-screen md:pt-20">
      <Head>
        <title>Login - Chaters</title>
      </Head>

      <div className="w-[80%] sm:w-[450px] md:pt-10 md:pb-8 md:px-8 md:bg-white md:dark:bg-zinc-850 rounded-2xl md:shadow-2xl md:shadow-gray-200 md:dark:shadow-none">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-3">Welcome Back</h1>
          <p className="font-normal">
            Reconnect with your friends and family members
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-4">
            <FormInput
              type="email"
              value={email}
              setValue={setEmail}
              placeholder="Email address"
              form="login"
              error={errorEmail}
            />

            <div className="flex flex-col items-end gap-2">
              <PasswordInput
                type="password"
                value={password}
                setValue={setPassword}
                placeholder="Password"
                form="login"
                error={errorPassword}
              />

              <Link href="/forgot-password">
                <a className="text-primary font-semibold text-sm">
                  Forgot Password?
                </a>
              </Link>
            </div>
          </div>

          <button className="btn-primary w-full py-3 rounded-lg mt-6">
            {loading ? (
              <div className="w-5 h-5 border-t-2 border-l-2 border-white border-solid animate-spin rounded-full"></div>
            ) : (
              <span className="text-white font-semibold">Login</span>
            )}
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 my-7 selection:bg-transparent">
          <span className="block w-4 h-0.5 bg-gray-800 dark:bg-zinc-100 rounded-lg"></span>
          <span className="text-sm font-semibold tebg-gray-800 dark:tebg-zinc-100">
            Or Login with
          </span>
          <span className="block w-4 h-0.5 bg-gray-800 dark:bg-zinc-100 rounded-lg"></span>
        </div>

        <AccountButtons form="login" />

        <p className="text-sm text-center font-medium mt-5">
          New to chaters?{" "}
          <Link href="/sign-up">
            <a className="font-semibold text-primary">Sign Up</a>
          </Link>
        </p>
      </div>

      <Footer />
    </main>
  );
};

export default Login;
