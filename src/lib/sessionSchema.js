export default function sessionSchema({ session, oAuth }) {
  const oAuthSession = {
    access_token: session.access_token,
    refresh_token: session.refresh_token,
    email: session.user.email,
    id: session.user.id,
    username: session.user.user_metadata?.user_name,
    created_at: session?.created_at,
  };

  const regularSession = {
    access_token: session.access_token,
    refresh_token: session.refresh_token,
    email: session.user.email,
  };

  return oAuth ? oAuthSession : regularSession;
}
