import { useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-4 px-8">
      <Link href="/">
        <a className="text-2xl font-semibold">Chaters</a>
      </Link>

      <button
        onClick={() => setMenuVisible(!menuVisible)}
        className="flex flex-col justify-between w-6 h-4 focus:outline focus:outline-1 outline-offset-8 outline-black rounded-[1px]"
      >
        <span className="block w-full h-0.5 bg-black"></span>
        <span className="block w-full h-0.5 bg-black"></span>
        <span className="block w-full h-0.5 bg-black"></span>
      </button>

      <ul
        className={`absolute w-[80%] max-w-[300px] flex flex-col items-center gap-1.5 py-6 px-5 bg-white mx-8 rounded-xl shadow-2xl shadow-gray-300 origin-right ${
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
  );
};

export default Navbar;
