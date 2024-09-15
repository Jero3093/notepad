import supabaseClient from "@/utils/supabase/client";
import sessionSchema from "./sessionSchema";
import saveSession from "./saveSession";

export default async function refreshSession({ refreshToken }) {
  try {
    const { data: newSession, error } =
      await supabaseClient.auth.refreshSession({
        refresh_token: refreshToken,
      });

    if (error) return { error: error.message };

    await saveSession({ session: newSession?.session, restoreSession: true });

    const schema = sessionSchema({ session: newSession.session, oAuth: false });

    return schema;
  } catch (error) {
    return { error: error };
  }
}
