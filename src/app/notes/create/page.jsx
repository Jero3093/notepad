import { redirect } from "next/navigation";
import useSession from "@/hooks/useSession";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import NewNoteForm from "@/components/forms/NewNoteForm";
import useUser from "@/hooks/useUser";

export default async function CreateNote() {
  const session = await useSession();

  if (!session) redirect("/auth/signin");

  const user = await useUser({ session });

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <section className="h-full flex flex-col lg:flex-row">
        <Nav />

        <aside className="p-4 flex flex-col items-start gap-6 text-pretty w-full h-full">
          <h1 className="text-amber-300 text-3xl font-semibold">Nueva Nota</h1>
          <p className="text-zinc-400 text-lg">
            Completa todos los campos para crear una nota.
          </p>
          <NewNoteForm userId={user[0]?.id} />
        </aside>
      </section>
    </main>
  );
}