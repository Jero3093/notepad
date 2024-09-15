import { cookies } from "next/headers";
import supabaseClient from "@/utils/supabase/client";
import refreshSession from "@/lib/refreshSession";
import sessionSchema from "@/lib/sessionSchema";

async function useSession() {
  try {
    const cookieStore = cookies();

    const session = cookieStore.get("session");

    const parsedSession = session && JSON.parse(session?.value);

    const { data: supabaseSession } = await supabaseClient.auth.getSession();

    if (supabaseSession.session === null && parsedSession) {
      const refreshedSession = refreshSession({
        refreshToken: parsedSession.refresh_token,
      });

      if (refreshedSession?.error) return null;

      return refreshedSession;
    } else if (supabaseSession.session) {
      const supabaseUser = supabaseSession.session.user;

      if (
        supabaseUser.app_metadata.provider === "twitch" ||
        supabaseUser.app_metadata.provider === "github"
      ) {
        const oAuthSchema = sessionSchema({
          session: supabaseSession?.session,
          oAuth: true,
        });

        return oAuthSchema;
      }

      const schema = sessionSchema({ session: supabaseSession?.session });

      return schema;
    }

    return null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export default useSession;
