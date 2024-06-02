import { FaGithub, FaTwitch } from "react-icons/fa";
import LogInForm from "@/components/forms/LogInForm";

export default function LogIn() {
  return (
    <main className="min-h-screen flex flex-col justify-center gap-12 text-pretty p-4">
      <h1 className="text-[#46b3e6] text-5xl font-bold drop-shadow-sm self-center">
        Notepad
      </h1>
      <section className="w-full flex flex-col justify-center gap-12 self-center max-w-lg">
        <aside className="w-full">
          <h2 className="text-4xl font-semibold mb-10 text-[#183e50] dark:text-[#579ab5]">
            Iniciar Sesión
          </h2>

          <LogInForm />
        </aside>

        <aside className="w-full flex flex-col items-center gap-4 text-black">
          <button className="bg-amber-300 w-full h-14 rounded-md shadow-sm flex flex-row gap-4 items-center justify-center text-xl">
            <FaGithub />
            Iniciar Sesión con Github
          </button>
          <button className="bg-amber-300 w-full h-14 rounded-md shadow-sm flex flex-row gap-4 items-center justify-center text-xl">
            <FaTwitch />
            Iniciar Sesión con Twitch
          </button>
        </aside>
      </section>
    </main>
  );
}
