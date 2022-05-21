import { useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="relative flex items-center justify-between py-4 px-8 md:py-6 md:px-12 lg:px-26 xl:px-32">
      <Link href="/">
        <a className="text-2xl font-semibold">Chaters</a>
      </Link>

      <nav>
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="md:hidden flex flex-col justify-between w-6 h-4 focus:outline focus:outline-1 outline-offset-8 outline-black rounded-[1px]"
        >
          <span className="block w-full h-0.5 bg-black"></span>
          <span className="block w-full h-0.5 bg-black"></span>
          <span className="block w-full h-0.5 bg-black"></span>
        </button>

        <ul
          className={`absolute md:static w-[80%] md:w-auto max-w-[300px] md:max-w-max flex flex-col md:flex-row items-center gap-1.5 md:gap-6 py-6 md:py-0 px-5 md:px-0 bg-white md:bg-transparent mx-8 rounded-xl shadow-2xl md:shadow-none shadow-gray-300 origin-right md:scale-100 ${
            menuVisible ? "scale-100 top-20 right-0" : "scale-0 -top-16 right-4"
          } transition-all duration-300`}
        >
          <li className="font-medium py-1 px-2">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="font-medium py-1 px-2">
            <Link href="#features">
              <a>Features</a>
            </Link>
          </li>
          <li className="font-medium py-1 px-2">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li className="font-medium text-white py-2 px-5 bg-primary rounded-full">
            <Link href="/sign-up">
              <a>Sign Up</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
