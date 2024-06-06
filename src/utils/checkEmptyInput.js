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

function checkLogInInputs({ email, password }) {
  const checkEmail = email.length > 0 ? false : true;
  const checkPassword = password.length > 0 ? false : true;

  if (checkEmail && checkPassword) {
    return true;
  } else {
    return false;
  }
}

function checkNewNoteInputs({ title, content }) {
  const checkTitle = title.length > 0 ? false : true;
  const checkContent = content.length > 0 ? false : true;

  if (checkTitle && checkContent) {
    return true;
  } else {
    return false;
  }
}

export { checkSignUpInputs, checkLogInInputs, checkNewNoteInputs };
