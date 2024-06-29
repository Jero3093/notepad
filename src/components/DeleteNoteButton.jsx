"use client";

import { useRouter } from "next/navigation";
import supabaseClient from "@/utils/supabase/client";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "sonner";

function DeleteNoteButton({ noteId }) {
  const router = useRouter();

  const showAlert = () => {
    toast("Seguro quieres borrar la nota?", {
      action: {
        label: "Borrar",
        onClick: () => handleDeleteNote(),
      },
      duration: 3000,
    });
  };

  const handleDeleteNote = async () => {
    try {
      const { error } = await supabaseClient
        .from("notes")
        .delete()
        .eq("id", noteId);

      if (error)
        return toast.error(
          "Un error ocurrio al intentar borrar la nota, intente luego"
        );

      toast.success("La nota fue borrada exitosamente");

      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      className="p-2 rounded-md border-2 border-red-500 text-red-500 bg-transparent md:px-5"
      title="Borrar Nota"
      onClick={() => showAlert()}
    >
      <RiDeleteBinLine className="w-6 h-6" />
    </button>
  );
}

export default DeleteNoteButton;
