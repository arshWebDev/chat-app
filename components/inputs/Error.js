const Error = ({ error }) => {
  return (
    <div
      className={`hidden md:block absolute z-[10000] -bottom-5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-80 w-max max-w-[200px] py-1 px-3 bg-white dark:bg-zinc-850 rounded shadow-xl dark:shadow-zinc-950 pointer-events-none transition-all duration-300 ${
        error ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-xs text-red-500 font-bold dark:font-semibold">{error}</p>
    </div>
  );
};

export default Error;
