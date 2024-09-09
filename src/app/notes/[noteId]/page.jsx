import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import useSession from "@/hooks/useSession";
import useUser from "@/hooks/useUser";
import useNotes from "@/hooks/useNotes";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import NewNoteButton from "@/components/NewNoteButton";
import NoteView from "@/components/NoteView";

export default async function Note({ params }) {
  const session = await useSession();

  if (!session) redirect("/auth/signin");

  const user = await useUser({ session });

  const notes = await useNotes({ userId: user[0]?.id });

  const noteId = params?.noteId;

  const note = notes.length > 0 && notes.find((n) => n?.id === noteId);

  if (user[0]?.id || note?.id) redirect("/");

  return (
    <main className="flex flex-col h-screen">
      <Toaster position="top-center" richColors />

      <Header />

      <section className="h-full flex flex-col lg:flex-row">
        <Nav notes={notes} />

        {!note ? (
          <article className="self-center m-auto text-center">
            <h3 className="text-4xl mb-5 font-semibold">
              Error <span className="text-red-500">404</span>
            </h3>
            <span className="text-zinc-500">
              La nota que ustedes esta buscando no existe.
            </span>
          </article>
        ) : (
          <NoteView
            id={note?.id}
            title={note?.title}
            content={note?.content}
            created_at={note?.created_at}
          />
        )}
      </section>
      <NewNoteButton />
    </main>
  );
}
