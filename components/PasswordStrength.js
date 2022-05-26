import { useState, useEffect } from "react";

const PasswordStrength = ({ value }) => {
  const [styles, setStyles] = useState("bg-transparent w-0");
  const [passwordWords, setPasswordWords] = useState("No Password");

  useEffect(() => {
    const lowerCaseLetters = new RegExp("(?=.*[a-z])");
    const upperCaseLetters = new RegExp("(?=.*[A-Z])");
    const numbers = new RegExp("(?=.{8,})");
    const specialCharacters = new RegExp("([^A-Za-z0-9])");

    if (value.length > 0 && value.length <= 6) {
      setStyles("bg-red-500 w-1/4");
      setPasswordWords("Too Weak");
    } else if (
      (lowerCaseLetters.test(value) && upperCaseLetters.test(value) && !numbers.test(value) && !specialCharacters.test(value)) 
      ||
      (value.length > 6 && value.length <= 8)
    ) {
      setStyles("bg-yellow-400 w-1/2");
      setPasswordWords("Good");
    
    } else if (
      (lowerCaseLetters.test(value) && upperCaseLetters.test(value) && numbers.test(value) && !specialCharacters.test(value))
      ||
      (value.length > 8 && value.length <= 12)
    ) {
      setStyles("bg-blue-500 w-3/4");
      setPasswordWords("Strong");
    
    } else if (
      (lowerCaseLetters.test(value) && upperCaseLetters.test(value) && numbers.test(value) && specialCharacters.test(value))
      || value.length > 12
    ) {
      setStyles("bg-green-500 w-full");
      setPasswordWords("Strongest");
    
    } else {
      setStyles("bg-transparent w-0");
      setPasswordWords("No Password");
    }
  }, [value]);

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="relative w-full h-1 bg-gray-300 dark:bg-zinc-700 rounded-2xl">
        <div
          className={`absolute z-[5] top-0 left-0 h-1 ${styles} rounded-2xl transition-all duration-300`}
        ></div>
      </div>
      <div className="min-w-max font-semibold text-sm text-gray-400 dark:text-zinc-600">
        {passwordWords}
      </div>
    </div>
  );
};

export default PasswordStrength;
