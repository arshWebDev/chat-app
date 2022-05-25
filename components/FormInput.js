import { useState } from "react";

const FormInput = ({ type, value, setValue, placeholder, form, error }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const checkPasswordStrength = () => {
    if (value.length === 0) {
      return "bg-transparent w-0";
    }
    if (value.length < 6) {
      return "bg-red-500 w-1/4";
    }
    if (value.length >= 6 && value.length <= 10) {
      return "bg-yellow-400 w-2/4";
    }
    if (value.length > 10 && value.length <= 16) {
      return "bg-blue-400 w-3/4";
    }
    if (value.length > 16) {
      return "bg-green-400 w-full";
    }
  };

  const getPasswordStrengthWords = () => {
    if (value.length === 0) {
      return "No Password";
    }
    if (value.length < 6) {
      return "Too weak";
    }
    if (value.length >= 6 && value.length <= 10) {
      return "Good";
    }
    if (value.length > 10 && value.length <= 16) {
      return "Strong";
    }
    if (value.length > 16) {
      return "Strongest";
    }
  };

  return (
    <div
      className={`relative flex items-center bg-gray-100 rounded-lg ${
        type === "password" && "pr-0"
      } ${
        error && "outline-2 outline outline-red-600"
      } transition-all duration-300`}
    >
      <div className="relative w-full pl-12">
        <input
          type={
            passwordVisible ? "text" : type === "password" ? "password" : "text"
          }
          value={value}
          id={type + form}
          onChange={(e) => setValue(e.target.value)}
          className={`input py-3 ${
            type === "password" ? "pr-2" : "pr-4"
          } bg-transparent w-full focus:outline-none`}
        />
        <label
          htmlFor={type + form}
          className="input-icon absolute top-1/2 -translate-y-1/2 left-2 grid place-items-center w-8 h-8 rounded transition-all"
        >
          {type === "name" && (
            <span className="icon w-4 h-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                  fill="#292D32"
                />
                <path
                  d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                  fill="#292D32"
                />
              </svg>
            </span>
          )}
          {type === "email" && (
            <span className="icon w-4 h-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,0A12.013,12.013,0,0,0,0,12c-.126,9.573,11.159,15.429,18.9,9.817a1,1,0,1,0-1.152-1.634C11.3,24.856,1.9,19.978,2,12,2.549-1.266,21.453-1.263,22,12v2a2,2,0,0,1-4,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.52,3.933A4,4,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,0,1,0-8A4,4,0,0,1,12,16Z" />
              </svg>
            </span>
          )}
          {type === "password" && (
            <span className="icon w-4 h-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.17916 22.7499C6.07916 22.7499 5.96916 22.7399 5.87916 22.7299L3.70916 22.4299C2.66916 22.2899 1.72916 21.3599 1.56916 20.2999L1.26916 18.1099C1.16916 17.4099 1.46916 16.4999 1.96916 15.9899L6.35916 11.5999C5.64916 8.75992 6.46916 5.75992 8.55916 3.68992C11.7992 0.459923 17.0692 0.449923 20.3192 3.68992C21.8892 5.25992 22.7492 7.34992 22.7492 9.56992C22.7492 11.7899 21.8892 13.8799 20.3192 15.4499C18.2192 17.5299 15.2292 18.3499 12.4092 17.6299L8.00916 22.0199C7.58916 22.4599 6.83916 22.7499 6.17916 22.7499ZM14.4292 2.75992C12.6792 2.75992 10.9392 3.41992 9.60916 4.74992C7.80916 6.53992 7.15916 9.15992 7.90916 11.5999C7.98916 11.8699 7.91916 12.1499 7.71916 12.3499L3.01916 17.0499C2.84916 17.2199 2.70916 17.6599 2.73916 17.8899L3.03916 20.0799C3.09916 20.4599 3.50916 20.8899 3.88916 20.9399L6.06916 21.2399C6.30916 21.2799 6.74916 21.1399 6.91916 20.9699L11.6392 16.2599C11.8392 16.0599 12.1292 15.9999 12.3892 16.0799C14.7992 16.8399 17.4292 16.1899 19.2292 14.3899C20.5092 13.1099 21.2192 11.3899 21.2192 9.56992C21.2192 7.73992 20.5092 6.02992 19.2292 4.74992C17.9292 3.42992 16.1792 2.75992 14.4292 2.75992Z" />
                <path d="M9.19008 20.5399C9.00008 20.5399 8.81008 20.4699 8.66008 20.3199L6.36008 18.0199C6.07008 17.7299 6.07008 17.2499 6.36008 16.9599C6.65008 16.6699 7.13008 16.6699 7.42008 16.9599L9.72008 19.2599C10.0101 19.5499 10.0101 20.0299 9.72008 20.3199C9.57008 20.4699 9.38008 20.5399 9.19008 20.5399Z" />
                <path d="M14.5 11.75C13.26 11.75 12.25 10.74 12.25 9.5C12.25 8.26 13.26 7.25 14.5 7.25C15.74 7.25 16.75 8.26 16.75 9.5C16.75 10.74 15.74 11.75 14.5 11.75ZM14.5 8.75C14.09 8.75 13.75 9.09 13.75 9.5C13.75 9.91 14.09 10.25 14.5 10.25C14.91 10.25 15.25 9.91 15.25 9.5C15.25 9.09 14.91 8.75 14.5 8.75Z" />
              </svg>
            </span>
          )}
        </label>
        <span
          className={`input-placeholder absolute top-1/2 -translate-y-1/2 left-12 text-sm text-gray-400 pointer-events-none transition-all ${
            value !== "" && "left-16 opacity-0"
          }`}
        >
          {placeholder}
        </span>
      </div>
      {type === "password" && (
        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="grid place-items-center w-12 h-12"
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
              fill="none"
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
      )}

      <div
        className={`absolute z-10 -bottom-5 left-1 py-1 px-3 bg-white rounded shadow-xl pointer-events-none transition-all duration-300 ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-xs text-red-600 font-semibold">{error}</p>
      </div>

      {type === "password" && (
        <div className="absolute -bottom-6 left-0 flex items-center gap-3 w-full">
          <div className="relative w-full h-1 bg-gray-300 rounded-2xl">
            <div
              className={`absolute z-20 top-0 left-0 h-1 ${checkPasswordStrength()} rounded-2xl transition-all duration-300`}
            ></div>
          </div>
          <div className="min-w-max font-semibold text-sm text-gray-400">
            {getPasswordStrengthWords()}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormInput;
