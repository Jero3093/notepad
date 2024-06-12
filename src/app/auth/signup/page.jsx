import { redirect } from "next/dist/server/api-utils";
import useSession from "@/hooks/useSession";
import { FaGithub, FaTwitch } from "react-icons/fa";
import SignUpForm from "@/components/forms/SignUpForm";

export default async function SignUp() {
  const session = await useSession();

  if (session) redirect("/");

  return (
    <main className="min-h-screen flex flex-col justify-center gap-12 text-pretty p-4">
      <Toaster position="top-center" richColors />
      <h1 className="text-sky-500 dark:text-sky-400 text-5xl font-bold drop-shadow-sm self-center">
        Notepad
      </h1>
      <section className="w-full flex flex-col justify-center gap-12 self-center max-w-lg">
        <aside className="w-full">
          <h2 className="text-4xl font-semibold mb-10 text-sky-600 dark:text-sky-400">
            Crear Cuenta
          </h2>

          <SignUpForm />
        </aside>

        <aside className="w-full flex flex-col items-center gap-4 text-black">
          <button className="bg-sky-300 w-full h-14 rounded-md shadow-sm flex flex-row gap-4 items-center justify-center text-xl">
            <FaGithub />
            Crear Cuenta con Github
          </button>
          <button className="bg-sky-300 w-full h-14 rounded-md shadow-sm flex flex-row gap-4 items-center justify-center text-xl">
            <FaTwitch />
            Crear Cuenta con Twitch
          </button>
        </aside>
      </section>
    </main>
  );
}
