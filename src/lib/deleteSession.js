async function deleteSession() {
  const res = await fetch("/api/auth/signout/");

  return res;
}

export default deleteSession;
