import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import useSession from "@/hooks/useSession";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import NewNoteForm from "@/components/forms/NewNoteForm";
import useUser from "@/hooks/useUser";
import useNotes from "@/hooks/useNotes";

export default async function CreateNote() {
  const session = await useSession();

  if (!session) redirect("/auth/signin");

  const user = await useUser({ session });

  const notes = await useNotes({ userId: user[0]?.id });

  return (
    <main className="flex flex-col h-screen">
      <Toaster position="top-center" richColors />
      <Header />
      <section className="h-full flex flex-col lg:flex-row">
        <Nav notes={notes} />

        <aside className="p-4 flex flex-col items-start gap-6 text-pretty w-full h-full">
          <h1 className="text-sky-500 dark:text-sky-300 text-3xl font-semibold">
            Nueva Nota
          </h1>
          <p className="text-zinc-500 text-lg">
            Completa todos los campos para crear una nota.
          </p>
          <NewNoteForm userId={user[0]?.id} />
        </aside>
      </section>
    </main>
  );
}
