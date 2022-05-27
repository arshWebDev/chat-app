const InputPlaceholder = ({ value, placeholder, noIcon }) => {
  return (
    <span
      className={`input-placeholder absolute top-1/2 -translate-y-1/2 ${
        !noIcon ? "left-12" : "left-4"
      } text-sm font-medium text-gray-400 dark:text-zinc-500 pointer-events-none transition-all ${
        value !== "" && "left-16 opacity-0"
      }`}
    >
      {placeholder}
    </span>
  );
};

export default InputPlaceholder;
