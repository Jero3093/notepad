import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import useSession from "@/hooks/useSession";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import NewNoteForm from "@/components/forms/NewNoteForm";
import useUser from "@/hooks/useUser";
import useNotes from "@/hooks/useNotes";

export default async function EditNote({ params }) {
  const session = await useSession();

  const noteId = params?.noteId;

  if (!session || noteId.length === 0)
    redirect(noteId.length === 0 ? "/" : "/auth/signin");

  const user = await useUser({ session });

  const notes = await useNotes({ userId: user[0]?.id });

  const note = notes.length > 0 && notes.find((n) => n?.id === noteId);

  return (
    <main className="flex flex-col h-screen">
      <Toaster position="top-center" richColors />
      <Header />
      <section className="h-full flex flex-col lg:flex-row">
        <Nav notes={notes} />

        <aside className="p-4 flex flex-col items-start gap-6 text-pretty w-full h-full">
          <h1 className="text-sky-500 dark:text-sky-300 text-3xl font-semibold">
            Editar Nota
          </h1>
          <p className="text-zinc-400 text-lg">
            Haz los cambios que quieras sin dejar los campos vacíos.
          </p>
          <NewNoteForm
            userId={user[0]?.id}
            noteId={noteId}
            noteTitle={note?.title}
            noteContent={note?.content}
          />
        </aside>
      </section>
    </main>
  );
}
