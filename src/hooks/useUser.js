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
      const { data, error } = await supabaseClient
        .from("users")
        .select("")
        .eq("email", email);

      if (data) {
        return data;
      } else {
        console.log(error.message);
        return null;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

export default useUser;
