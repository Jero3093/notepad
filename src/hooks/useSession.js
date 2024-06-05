import { cookies } from "next/headers";
import supabaseClient from "@/utils/supabase/client";

async function useSession() {
  try {
    const cookieStore = cookies();

    const session = cookieStore.get("session");

    const parsedSession = session && JSON.parse(session?.value);

    const { data: supabaseSession } = await supabaseClient.auth.getSession();

    if (!supabaseSession.session && parsedSession) {
      const { data: newSupabaseSession, error } =
        await supabaseClient.auth.setSession({
          access_token: parsedSession.access_token,
          refresh_token: parsedSession.refresh_token,
        });

      if (newSupabaseSession.session) {
        const formatedNewSupabaseSession = {
          access_token: newSupabaseSession.session.access_token,
          refresh_token: newSupabaseSession.session.refresh_token,
          email: newSupabaseSession.session.user.email,
        };

        return formatedNewSupabaseSession;
      } else {
        console.log(error.message);
      }
    } else if (supabaseSession.session) {
      const formatedSupabaseSession = {
        access_token: supabaseSession.session.access_token,
        refresh_token: supabaseSession.session.refresh_token,
        email: supabaseSession.session.user.email,
      };

      return formatedSupabaseSession;
    }

    return null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export default useSession;
