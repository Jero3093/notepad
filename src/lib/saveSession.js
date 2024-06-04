async function saveSession({ session }) {
  const res = await fetch("/api/auth/cookies/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_token: session?.access_token,
      refresh_token: session?.refresh_token,
      email: session?.user?.email,
    }),
  });

  return res;
}

export default saveSession;
