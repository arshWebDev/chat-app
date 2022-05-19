import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between py-4 px-8">
      <Link href="/">
        <a className="text-2xl font-semibold">Chaters</a>
      </Link>

      <button className="flex flex-col justify-between w-6 h-4 focus:outline focus:outline-1 outline-offset-8 outline-black rounded-[1px]">
        <span className="block w-full h-0.5 bg-black"></span>
        <span className="block w-full h-0.5 bg-black"></span>
        <span className="block w-full h-0.5 bg-black"></span>
      </button>

      <ul className="absolute top-16 left-0 right-0 flex flex-col items-center gap-1.5 py-4 px-5 bg-white mx-8 rounded-xl shadow-2xl shadow-gray-300">
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
