import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
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

        <aside className="p-4 grid place-items-center text-pretty w-full h-full">
          <header className="flex flex-row gap-5">
            <div className="w-24 h-24 rounded-full grid place-items-center text-2xl font-semibold bg-sky-600">
              {user[0].username.split("")[0]}
            </div>
            <aside className="flex flex-col gap-2">
              <h2 className="font-semibold text-2xl">{user[0]?.username}</h2>
              <h3 className="text-zinc-500">{user[0]?.email}</h3>
              <span className="text-zinc-500">
                Se unió el{" "}
                <time dateTime={user[0]?.created_at.substring(0, 10)}>
                  {user[0]?.created_at.substring(0, 10)}
                </time>
              </span>
            </aside>
          </header>
          <ul className="flex flex-col gap-5 items-center">
            <li>
              <UserSettingsButton />
            </li>
            <li>
              <LogOutButton session={session} />
            </li>
          </ul>
        </aside>
      </section>
      <NewNoteButton />
    </main>
  );
}
