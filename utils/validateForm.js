const validateSignUpForm = (
  name,
  setErrorName,
  email,
  setErrorEmail,
  password,
  setErrorPassword,
) => {
  let errorName = false;
  let errorEmail = false;
  let errorPassword = false;

  if (name.replaceAll(" ", "").length === 0) {
    setErrorName("Please enter a username");
    errorName = true;
  } else if (name.replaceAll(" ", "").length !== 0) {
    setErrorName(false);
    errorName = false;
  }

  const emailRegEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailRegEx)) {
    setErrorEmail("Please enter a valid email");
    errorEmail = true;
  } else if (email.match(emailRegEx)) {
    setErrorEmail(false);
    errorEmail = false;
  }

  if (password.length < 6) {
    setErrorPassword("Password length should be at least 6 characters ");
    errorPassword = true;
  }
  if (password.length >= 6) {
    setErrorPassword(false);
    errorPassword = false;
  }

  if (errorName || errorEmail || errorPassword) return false;
  return true;
};

export { validateSignUpForm };
