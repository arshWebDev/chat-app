import Error from "./Error";
import InputPlaceholder from "./InputPlaceholder";

const FormInput = ({ type, value, setValue, placeholder, form, error }) => {
  return (
    <div
      className={`relative flex items-center bg-gray-100 dark:bg-zinc-800 rounded-lg ${
        error && "md:outline-none outline outline-2 outline-red-500"
      } transition-all duration-300`}
    >
      <div className="relative flex flex-row-reverse items-center pl-2 gap-2 w-full">
        <input
          type="text"
          value={value}
          id={type + form}
          onChange={(e) => setValue(e.target.value)}
          className={`input py-3 pr-4 bg-transparent w-full focus:outline-none`}
        />
        <label
          htmlFor={type + form}
          className="input-icon grid place-items-center w-10 h-8 rounded transition-all"
        >
          {type === "name" && (
            <span className="icon w-4 h-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
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
        </label>
        <InputPlaceholder value={value} placeholder={placeholder} />
      </div>

      <Error error={error} />
    </div>
  );
};

export default FormInput;
