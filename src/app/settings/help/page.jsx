import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import NewNoteButton from "@/components/NewNoteButton";
import useSession from "@/hooks/useSession";
import useUser from "@/hooks/useUser";
import useNotes from "@/hooks/useNotes";
import { HelpInstructions } from "@/constants/Help";

export default async function Help() {
  const session = await useSession();

  if (!session) redirect("/auth/signin");

  const user = await useUser({ session });

  const notes = await useNotes({ userId: user[0]?.id });

  return (
    <main className="flex flex-col h-screen">
      <Header />

      <section className="h-full flex flex-col lg:flex-row">
        <Nav notes={notes} />

        <aside className="flex flex-col gap-10 text-pretty w-full h-full p-4 overflow-auto">
          <header className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium">
              Nombre de la Aplicación: {HelpInstructions?.applicationName}
            </h2>
            <h3 className="text-xl font-medium">
              Versión Actual: {HelpInstructions?.version}
            </h3>
          </header>

          <section className="flex flex-col gap-5 pb-20">
            <h4 className="text-2xl font-semibold">Instrucciones</h4>
            {HelpInstructions?.instructions.map(
              ({ step, title, description }) => {
                return (
                  <div
                    className="flex flex-col gap-4 text-lg font-light leading-relaxed"
                    key={title}
                  >
                    <header className="flex flex-row gap-2 items-center">
                      <span className="font-semibold">{step}</span> -
                      <h5 className="font-medium">{title}</h5>
                    </header>
                    {description}
                  </div>
                );
              }
            )}
          </section>
        </aside>
      </section>
      <NewNoteButton />
    </main>
  );
}
