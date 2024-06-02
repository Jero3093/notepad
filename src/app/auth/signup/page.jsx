import SignUpForm from "@/components/forms/SignUpForm";
import { FaGithub, FaTwitch } from "react-icons/fa";

export default function SignUp() {
  return (
    <main className="min-h-screen flex flex-col justify-center gap-12 text-pretty p-4">
      <h1 className="text-[#46b3e6] text-5xl font-bold drop-shadow-sm self-center">
        Notepad
      </h1>
      <section className="w-full flex flex-col justify-center gap-12 self-center max-w-lg">
        <aside className="w-full">
          <h2 className="text-4xl font-semibold mb-10 text-[#183e50] dark:text-[#579ab5]">
            Crear Cuenta
          </h2>

          <SignUpForm />
        </aside>

        <aside className="w-full flex flex-col items-center gap-4 text-black">
          <button className="bg-amber-300 w-full h-14 rounded-md shadow-sm flex flex-row gap-4 items-center justify-center text-xl">
            <FaGithub />
            Crear Cuenta con Github
          </button>
          <button className="bg-amber-300 w-full h-14 rounded-md shadow-sm flex flex-row gap-4 items-center justify-center text-xl">
            <FaTwitch />
            Crear Cuenta con Twitch
          </button>
        </aside>
      </section>
    </main>
  );
}
