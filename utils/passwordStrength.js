const checkPasswordStrength = (value) => {
  if (value.length === 0) {
    return "transparent";
    // return "bg-transparent w-0";
  }
  if (value.length < 6) {
    return "1/4";
    // return "bg-red-600 w-1/4";
  }
  if (value.length >= 6 && value.length <= 10) {
    return "1/2";
    // return "bg-yellow-400 w-2/4";
  }
  if (value.length > 10 && value.length <= 16) {
    return "3/4";
    // return "bg-blue-300 w-3/4";
  }
  if (value.length > 16) {
    return "full";
    // return "bg-green-400 w-full";
  }
};

const getPasswordStrengthWords = (value) => {
  if (value.length === 0) {
    return "Password Strength";
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

export { checkPasswordStrength, getPasswordStrengthWords };
