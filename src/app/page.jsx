import Header from "@/components/Header";
import Nav from "@/components/Nav";
import NewNoteButton from "@/components/NewNoteButton";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />

      <section className="h-full flex flex-col lg:flex-row">
        <Nav />

        <aside className="p-4 flex flex-col gap-3 text-pretty">
          <h1 className="text-2xl font-medium">Lorem ipsum dolor sit amet.</h1>
          <span className="text-zinc-600">
            Creada el: <time dateTime="2024/06/02">2024/06/02</time>
          </span>
          <p className="leading-loose mt-10 text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt atque
            alias delectus magnam sed, hic sequi necessitatibus culpa distinctio
            excepturi quia quis beatae odio suscipit, ut eligendi totam
            voluptates maxime?
          </p>
        </aside>
      </section>
      <NewNoteButton />
    </main>
  );
}
