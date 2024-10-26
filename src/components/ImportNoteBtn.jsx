"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import supabaseClient from "@/utils/supabase/client";

function ImportNoteBtn({ userId }) {
  const [file, setFile] = useState(null);

  const router = useRouter();

  const uploadImportedNote = async (event) => {
    try {
      const { error } = await supabaseClient.from("notes").insert([
        {
          title: file?.name?.split(".")[0],
          content: event.target.result,
          created_by: userId,
        },
      ]);

      if (error) return toast.error("No se puedo importar la nota.");

      toast.success("Nota importada con exito.");

      setTimeout(() => {
        router.refresh();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    function handleFileSelect() {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => uploadImportedNote(event);
      reader.readAsText(file);
    }

    handleFileSelect();
  }, [file]);

  return (
    <button
      title="Importar nota desde el dispositivo"
      className="p-2 px-7 bg-sky-500 text-black rounded-md text-lg font-medium"
      onClick={() => document.getElementById("file").click()}
    >
      <input
        type="file"
        name="file"
        id="file"
        accept=".txt"
        onChange={(e) => setFile(e.target.files[0])}
        hidden
      />
      Importar Nota
    </button>
  );
}

export default ImportNoteBtn;
