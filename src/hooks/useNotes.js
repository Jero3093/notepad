import supabaseClient from "@/utils/supabase/client";

async function useNotes({ userId }) {
  try {
    if (!userId) return [];

    const { data, error } = await supabaseClient
      .from("notes")
      .select("")
      .eq("created_by", userId)
      .order("last_modified", {
        ascending: false,
      });

    if (error) {
      console.log(error.message);
      return [];
    }

    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export default useNotes;
