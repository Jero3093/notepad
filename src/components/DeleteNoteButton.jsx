"use client";

import { useRouter } from "next/navigation";
import supabaseClient from "@/utils/supabase/client";
import { RiDeleteBinLine } from "react-icons/ri";

function DeleteNoteButton({ noteId }) {
  const router = useRouter();

  const handleDeleteNote = async () => {
    try {
      const { error } = await supabaseClient
        .from("notes")
        .delete()
        .eq("id", noteId);

      if (error) return console.log(error.message);

      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      className="p-2 px-5 rounded-md border-2 border-red-500 text-red-500 bg-transparent"
      title="Borrar Nota"
      onClick={() => handleDeleteNote()}
    >
      <RiDeleteBinLine className="w-6 h-6" />
    </button>
  );
}

export default DeleteNoteButton;
