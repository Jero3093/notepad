"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../Input";
import { checkNewNoteInputs } from "@/utils/checkEmptyInput";
import supabaseClient from "@/utils/supabase/client";
import Loader from "../Loader";
import { toast } from "sonner";

function NewNoteForm({ userId, noteId, noteTitle, noteContent }) {
  const [title, setTitle] = useState(noteTitle ? noteTitle : "");
  const [content, setContent] = useState(noteContent ? noteContent : ``);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleCreateNote = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const emptyInputs = checkNewNoteInputs({ title, content });

      if (emptyInputs)
        return toast.warning(
          "Para crear un nota debe de llenar todos los campos"
        );

      const { error } = await supabaseClient.from("notes").insert([
        {
          title: title,
          content: content,
          created_by: userId,
        },
      ]);

      if (error)
        return toast.error(
          "Un error ocurrio al intentar guardar la nota, intente luego"
        );

      toast.success("Nota creada con exito");
      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditNote = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const emptyInputs = checkNewNoteInputs({ title, content });

      if (emptyInputs)
        return toast.warning(
          "No puedes dejar ningun campo vacio al editar la nota"
        );

      const { error } = await supabaseClient
        .from("notes")
        .update({
          title: title,
          content: content,
        })
        .eq("id", noteId);

      if (error)
        return toast.error(
          "Un error ocurrio al intentar editar la nota, intente luego"
        );

      toast.success("Nota editada con exito");

      setTimeout(() => {
        router.replace(`/notes/${noteId}`);
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
      onSubmit={(e) => (noteId ? handleEditNote(e) : handleCreateNote(e))}
    >
      <label htmlFor="title" className="text-2xl flex flex-col gap-4">
        Titulo:
        <Input
          type="text"
          name="title"
          placeholder="Titulo de la Nota"
          value={title}
          onChange={(t) => setTitle(t.target.value)}
          className="w-full max-w-2xl h-14 rounded-md border-2 border-zinc-600 p-2 outline-none lg:max-w-4xl"
        />
      </label>

      <label htmlFor="content" className="text-2xl flex flex-col gap-4">
        Contenido:
        <textarea
          name="content"
          placeholder="Contenido de la Nota"
          value={content}
          onChange={(t) => setContent(t.target.value)}
          className="w-full max-w-2xl min-h-52 rounded-md border-2 border-zinc-600 p-2 outline-none lg:max-w-4xl"
        ></textarea>
      </label>

      {isLoading ? (
        <div className="max-w-96 grid place-items-center">
          <Loader />
        </div>
      ) : (
        <input
          type="submit"
          value={noteId ? "Editar Nota" : "Crear Nota"}
          title={noteId ? "Editar Nota" : "Crear Nueva Nota"}
          className="cursor-pointer max-w-96 p-2 px-7 grid place-items-center rounded-md text-white bg-sky-800 text-xl font-medium"
        />
      )}
    </form>
  );
}

export default NewNoteForm;
