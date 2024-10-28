import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import NewNoteButton from "@/components/NewNoteButton";
import useSession from "@/hooks/useSession";
import useUser from "@/hooks/useUser";
import useNotes from "@/hooks/useNotes";
import BackButton from "@/components/BackButton";
import UserSettingsForm from "@/components/forms/UserSettingsForm";

export default async function UserSettings({ searchParams }) {
  const session = await useSession();

  if (!session) redirect("/auth/signin");

  const { userId } = searchParams;

  const user = await useUser({ session });

  const notes = await useNotes({ userId: user?.id });

  return (
    <main className="flex flex-col h-screen">
      <Toaster richColors position="top-center" />
      <Header />

      <section className="h-full flex flex-col lg:flex-row">
        <Nav notes={notes} />

        <aside className="flex flex-col gap-10 text-pretty w-full h-full p-4 overflow-auto pb-20 border-t-2 border-zinc-300 dark:border-zinc-800">
          <BackButton route={"/settings"} />
          <header className="flex gap-6 flex-col">
            <h2 className="text-sky-500 dark:text-sky-300 text-3xl font-semibold">
              Ajustes de Usuario
            </h2>
            <p className="text-zinc-500 text-lg">
              Modifique lo que crea necesario sin dejar campos vacios.
            </p>
          </header>
          <UserSettingsForm user={user} />
        </aside>
      </section>
      <NewNoteButton />
    </main>
  );
}
