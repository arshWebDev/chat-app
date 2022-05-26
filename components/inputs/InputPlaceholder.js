const InputPlaceholder = ({ value, placeholder }) => {
  return (
    <span
      className={`input-placeholder absolute top-1/2 -translate-y-1/2 left-12 text-sm font-medium text-gray-400 dark:text-zinc-500 pointer-events-none transition-all ${
        value !== "" && "left-16 opacity-0"
      }`}
    >
      {placeholder}
    </span>
  );
};

export default InputPlaceholder;
