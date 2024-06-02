import NotesCard from "./NotesCard";

function Nav() {
  return (
    <nav
      className="hidden flex-col gap-3 py-2 px-4 border-b border-zinc-300 dark:border-zinc-800 w-full max-h-96 lg:max-h-full lg:h-full lg:max-w-80 lg:min-w-80 lg:border-b-0 lg:border-r-2 lg:flex overflow-y-auto"
      id="nav"
    >
      <h2 className="text-2xl text-amber-300 font-medium">Notas Guardadas</h2>
      <ul className="flex flex-col gap-3">
        <li>
          <NotesCard />
        </li>
        <li>
          <NotesCard />
        </li>
        <li>
          <NotesCard />
        </li>
        <li>
          <NotesCard />
        </li>
        <li>
          <NotesCard />
        </li>
        <li>
          <NotesCard />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
