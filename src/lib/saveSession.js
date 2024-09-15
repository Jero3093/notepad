import sessionSchema from "./sessionSchema";

async function saveSession({ session, restoreSession }) {
  const schema = sessionSchema({ session: session, oAuth: false });

  const url = process.env.COOKIES_URL;

  const res = await fetch(restoreSession ? url : "/api/auth/cookies/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(schema),
  });

  return res;
}

export default saveSession;
