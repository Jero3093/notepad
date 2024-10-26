import { redirect } from "next/navigation";
import Link from "next/link";
import useSession from "@/hooks/useSession";
import useUser from "@/hooks/useUser";
import useNotes from "@/hooks/useNotes";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import NewNoteButton from "@/components/NewNoteButton";
import ImportNoteBtn from "@/components/ImportNoteBtn";

export default async function Home() {
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

        <aside className="p-4 grid place-items-center text-pretty w-full h-full">
          <section className="flex flex-col items-center gap-6">
            <h1 className="text-3xl font-bold md:text-5xl">
              Bienvenido a Notepad
            </h1>
            <p className="text-center leading-relaxed text-lg text-zinc-400">
              Agrega nuevas notas haciendo click en el boton inferior.
              <br />
              Tus notas estaran guardadas con seguridad y podras acceder a ellas
              desde cualquier dispositivo.
            </p>
            <Link
              href={"/notes/create"}
              title="Agregar Nueva Nota"
              className="p-2 px-7 bg-sky-500 text-black rounded-md text-lg font-medium"
            >
              Agregar Nota
            </Link>
            <ImportNoteBtn userId={user[0]?.id} />
          </section>
        </aside>
      </section>
      <NewNoteButton userId={user[0]?.id} />
    </main>
  );
}
