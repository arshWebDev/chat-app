import { useState } from "react";

import { checkPasswordStrength, getPasswordStrengthWords } from "../../utils";

import Error from "./Error";
import InputPlaceholder from "./InputPlaceholder";

const PasswordInput = ({ type, value, setValue, placeholder, form, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div
      className={`relative flex items-center bg-gray-100 rounded-lg pr-0${
        error && "md:outline-none outline outline-2 outline-red-500"
      } transition-all duration-300`}
    >
      <div className="relative flex flex-row-reverse items-center pl-2 gap-2 w-full">
        <input
          type={passwordVisible ? "text" : "password"}
          value={value}
          id={type + form}
          onChange={(e) => setValue(e.target.value)}
          className="input py-3 pr-2 bg-transparent w-full focus:outline-none"
        />
        <label
          htmlFor={type + form}
          className="input-icon grid place-items-center w-10 h-8 rounded transition-all"
        >
          <span className="icon w-4 h-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.17916 22.7499C6.07916 22.7499 5.96916 22.7399 5.87916 22.7299L3.70916 22.4299C2.66916 22.2899 1.72916 21.3599 1.56916 20.2999L1.26916 18.1099C1.16916 17.4099 1.46916 16.4999 1.96916 15.9899L6.35916 11.5999C5.64916 8.75992 6.46916 5.75992 8.55916 3.68992C11.7992 0.459923 17.0692 0.449923 20.3192 3.68992C21.8892 5.25992 22.7492 7.34992 22.7492 9.56992C22.7492 11.7899 21.8892 13.8799 20.3192 15.4499C18.2192 17.5299 15.2292 18.3499 12.4092 17.6299L8.00916 22.0199C7.58916 22.4599 6.83916 22.7499 6.17916 22.7499ZM14.4292 2.75992C12.6792 2.75992 10.9392 3.41992 9.60916 4.74992C7.80916 6.53992 7.15916 9.15992 7.90916 11.5999C7.98916 11.8699 7.91916 12.1499 7.71916 12.3499L3.01916 17.0499C2.84916 17.2199 2.70916 17.6599 2.73916 17.8899L3.03916 20.0799C3.09916 20.4599 3.50916 20.8899 3.88916 20.9399L6.06916 21.2399C6.30916 21.2799 6.74916 21.1399 6.91916 20.9699L11.6392 16.2599C11.8392 16.0599 12.1292 15.9999 12.3892 16.0799C14.7992 16.8399 17.4292 16.1899 19.2292 14.3899C20.5092 13.1099 21.2192 11.3899 21.2192 9.56992C21.2192 7.73992 20.5092 6.02992 19.2292 4.74992C17.9292 3.42992 16.1792 2.75992 14.4292 2.75992Z" />
              <path d="M9.19008 20.5399C9.00008 20.5399 8.81008 20.4699 8.66008 20.3199L6.36008 18.0199C6.07008 17.7299 6.07008 17.2499 6.36008 16.9599C6.65008 16.6699 7.13008 16.6699 7.42008 16.9599L9.72008 19.2599C10.0101 19.5499 10.0101 20.0299 9.72008 20.3199C9.57008 20.4699 9.38008 20.5399 9.19008 20.5399Z" />
              <path d="M14.5 11.75C13.26 11.75 12.25 10.74 12.25 9.5C12.25 8.26 13.26 7.25 14.5 7.25C15.74 7.25 16.75 8.26 16.75 9.5C16.75 10.74 15.74 11.75 14.5 11.75ZM14.5 8.75C14.09 8.75 13.75 9.09 13.75 9.5C13.75 9.91 14.09 10.25 14.5 10.25C14.91 10.25 15.25 9.91 15.25 9.5C15.25 9.09 14.91 8.75 14.5 8.75Z" />
            </svg>
          </span>
        </label>

        <InputPlaceholder value={value} placeholder={placeholder} />
      </div>

      <button
        type="button"
        onClick={() => setPasswordVisible(!passwordVisible)}
        className="grid place-items-center w-12 h-12 focus:outline-none"
      >
        <span
          className={`eye-slash relative icon ${
            passwordVisible && "eye-slash-visible"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9999 16.3299C9.60992 16.3299 7.66992 14.3899 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C14.3899 7.66992 16.3299 9.60992 16.3299 11.9999C16.3299 14.3899 14.3899 16.3299 11.9999 16.3299ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 13.5599 10.4399 14.8299 11.9999 14.8299C13.5599 14.8299 14.8299 13.5599 14.8299 11.9999C14.8299 10.4399 13.5599 9.16992 11.9999 9.16992Z"
              fill="#292D32"
            />
            <path
              d="M12.0001 21.02C8.24008 21.02 4.69008 18.82 2.25008 15C1.19008 13.35 1.19008 10.66 2.25008 8.99998C4.70008 5.17998 8.25008 2.97998 12.0001 2.97998C15.7501 2.97998 19.3001 5.17998 21.7401 8.99998C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02ZM12.0001 4.47998C8.77008 4.47998 5.68008 6.41998 3.52008 9.80998C2.77008 10.98 2.77008 13.02 3.52008 14.19C5.68008 17.58 8.77008 19.52 12.0001 19.52C15.2301 19.52 18.3201 17.58 20.4801 14.19C21.2301 13.02 21.2301 10.98 20.4801 9.80998C18.3201 6.41998 15.2301 4.47998 12.0001 4.47998Z"
              fill="#292D32"
            />
          </svg>
        </span>
      </button>

      <Error error={error} />

      <div className="absolute -bottom-6 left-0 flex items-center gap-3 w-full">
        <div className="relative w-full h-1 bg-gray-300 rounded-2xl">
          <div
            className={`absolute z-[5] top-0 left-0 h-1 
            ${
              checkPasswordStrength(value) === "transparent"
                ? "bg-transparent w-0"
                : ""
            }
            ${checkPasswordStrength(value) === "1/4" ? "bg-red-500 w-1/4" : ""}
            ${
              checkPasswordStrength(value) === "1/2"
                ? "bg-yellow-400 w-1/2"
                : ""
            }
            ${checkPasswordStrength(value) === "3/4" ? "bg-blue-400 w-3/4" : ""}
            ${
              checkPasswordStrength(value) === "full"
                ? "bg-green-500 w-full"
                : ""
            }
             rounded-2xl transition-all duration-300`}
          ></div>
        </div>
        <div className="min-w-max font-semibold text-sm text-gray-400">
          {getPasswordStrengthWords(value)}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
