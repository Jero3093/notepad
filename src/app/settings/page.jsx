import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import { IoMdHelp } from "react-icons/io";
import Link from "next/link";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import SettingsHeader from "@/components/settings/SettingsHeader";
import NewNoteButton from "@/components/NewNoteButton";
import LogOutButton from "@/components/settings/LogOutButton";
import UserSettingsButton from "@/components/settings/UserSettingsButton";
import useSession from "@/hooks/useSession";
import useUser from "@/hooks/useUser";
import useNotes from "@/hooks/useNotes";

export default async function Settings() {
  const session = await useSession();

  if (!session) redirect("/auth/signin");

  const user = await useUser({ session });

  const notes = await useNotes({ userId: user[0]?.id });

  return (
    <main className="flex flex-col h-screen">
      <Toaster richColors position="top-center" />
      <Header />

      <section className="h-full flex flex-col lg:flex-row">
        <Nav notes={notes} />

        <aside className="flex flex-col items-center justify-center gap-10 text-pretty w-full h-full md:p-4 border-t-2 border-zinc-300 dark:border-zinc-800">
          <SettingsHeader user={user} />
          <ul className="flex flex-col gap-5 items-center">
            <li>
              <UserSettingsButton userId={user[0]?.id} />
            </li>
            <li>
              <Link
                href={`/settings/help`}
                className="w-96 h-12 rounded-md flex flex-row justify-between items-center py-6 px-4 bg-transparent border-[3px] text-lg border-sky-500 text-sky-500"
                title="Ayuda"
              >
                Ayuda
                <IoMdHelp className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <LogOutButton />
            </li>
          </ul>
        </aside>
      </section>
      <NewNoteButton />
    </main>
  );
}
