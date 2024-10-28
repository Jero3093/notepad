import supabaseClient from "@/utils/supabase/client";

async function useUser({ session }) {
  try {
    if (session.username) {
      const oAuthUser = [
        {
          id: session.id,
          email: session.email,
          username: session.username,
          created_at: session.created_at,
        },
      ];

      return oAuthUser;
    }

    const email = session?.email;

    if (email) {
      const { data, error } = await supabaseClient.from("users").select("*");

      if (error || !data) return null;

      const user = data.find((u) => u?.email === email);
      return user || null;
    }
  } catch (error) {
    return null;
  }
}

export default useUser;
