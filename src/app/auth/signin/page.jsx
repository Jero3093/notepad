import { redirect } from "next/navigation";
import { Toaster } from "sonner";
import useSession from "@/hooks/useSession";
import LogInForm from "@/components/forms/LogInForm";
import OAuthButtons from "@/components/auth/OAuthButtons";

export default async function LogIn() {
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
            Iniciar Sesión
          </h2>

          <LogInForm />
        </aside>

        <OAuthButtons />
      </section>
    </main>
  );
}
