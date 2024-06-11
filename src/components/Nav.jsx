import { SearchInput } from "./Input";
import NotesCard from "./NotesCard";

function Nav({ notes }) {
  return (
    <nav
      className="hidden flex-col gap-3 p-4 border-b border-zinc-300 dark:border-zinc-800 w-full h-full max-h-60 lg:max-h-full lg:h-full lg:max-w-80 lg:min-w-80 lg:border-b-0 lg:border-r-2 lg:flex overflow-y-auto"
      id="nav"
    >
      <h2 className="text-2xl text-zinc-700 dark:text-zinc-200 font-medium">
        Notas Guardadas
      </h2>
      {notes.length > 0 && <SearchInput placeholder="Buscar nota" />}
      {notes.length <= 0 && (
        <span className="self-center text-zinc-400 mt-5">
          La lista está vacía
        </span>
      )}
      <ul className="flex flex-col gap-3">
        {notes.length > 0 &&
          notes.map((items) => {
            return (
              <li key={items?.id}>
                <NotesCard id={items?.id} title={items?.title} />
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default Nav;
