"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../Input";
import { checkNewNoteInputs } from "@/utils/checkEmptyInput";
import supabaseClient from "@/utils/supabase/client";
import Loader from "../Loader";

function NewNoteForm({ userId }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleCreateNote = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const emptyInputs = checkNewNoteInputs({ title, content });

      if (emptyInputs) return;

      const { error } = await supabaseClient.from("notes").insert([
        {
          title: title,
          content: content,
          created_by: userId,
        },
      ]);

      if (error) return console.log(error.message);

      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 w-full h-full"
      onSubmit={(e) => handleCreateNote(e)}
    >
      <label htmlFor="title" className="text-2xl flex flex-col gap-4">
        Titulo:
        <Input
          type="text"
          name="title"
          placeholder="Titulo de la Nota"
          onChange={(t) => setTitle(t.target.value)}
          className="w-full max-w-2xl h-14 rounded-md border-2 border-sky-600 p-2 outline-none lg:max-w-4xl"
        />
      </label>

      <label htmlFor="content" className="text-2xl flex flex-col gap-4">
        Contenido:
        <textarea
          name="content"
          placeholder="Contenido de la Nota"
          onChange={(t) => setContent(t.target.value)}
          className="w-full max-w-2xl min-h-52 rounded-md border-2 border-sky-600 p-2 outline-none lg:max-w-4xl"
        ></textarea>
      </label>

      {isLoading ? (
        <div className="max-w-96 grid place-items-center">
          <Loader />
        </div>
      ) : (
        <input
          type="submit"
          value="Crear Nota"
          title="Crear Nueva Nota"
          className="cursor-pointer max-w-96 p-2 px-7 grid place-items-center rounded-md text-black bg-amber-300 text-xl font-medium"
        />
      )}
    </form>
  );
}

export default NewNoteForm;
