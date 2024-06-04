function checkSignUpInputs({ username, email, password }) {
  const checkUsername = username.length > 0 ? false : true;
  const checkEmail = email.length > 0 ? false : true;
  const checkPassword = password.length > 0 ? false : true;

  if (checkEmail && checkPassword && checkUsername) {
    return true;
  } else {
    return false;
  }
}

export { checkSignUpInputs };
