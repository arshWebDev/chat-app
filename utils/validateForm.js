const validateSignUpForm = (
  name,
  setErrorName,
  email,
  setErrorEmail,
  password,
  setErrorPassword
) => {
  if (name.replaceAll(" ", "") === "") {
    setErrorName("Please enter a username");
  } else if (name.replaceAll(" ", "") !== "") {
    setErrorName(false);
  }

  const emailRegEx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailRegEx)) {
    setErrorEmail("Please enter a valid email");
  } else if (email.match(emailRegEx)) {
    setErrorEmail(false);
  }

  if (password.length === 0) {
    setErrorPassword("Password length should be at least 6 characters ");
  }
  if (password.length >= 6) {
    setErrorPassword(false);
  }
};

export { validateSignUpForm };
