"use client";

import { useState } from "react";
import { SearchInput } from "./Input";
import { filterNotesByName } from "@/utils/filterNotesByName";
import NotesCard from "./NotesCard";
import Loader from "./Loader";

function Nav({ notes }) {
  const [isLoading, setIsLoading] = useState(false);

  const [searchedNotes, setSearchedNotes] = useState([]);

  const searchNotes = (text) => {
    if (text === "") return setSearchedNotes([]);

    setIsLoading(true);

    const filteredList = filterNotesByName(text, notes);

    setTimeout(() => {
      setSearchedNotes(filteredList);
      setIsLoading(false);
    }, 2000);
  };

  const ListContent = () => {
    if (searchedNotes.length > 0) {
      return searchedNotes.map((items) => {
        return (
          <li key={items?.id}>
            <NotesCard id={items?.id} title={items?.title} />
          </li>
        );
      });
    } else if (searchedNotes.length <= 0 && notes.length > 0) {
      return notes.map((items) => {
        return (
          <li key={items?.id}>
            <NotesCard id={items?.id} title={items?.title} />
          </li>
        );
      });
    }
  };

  return (
    <nav
      className="hidden flex-col gap-3 p-4 border-b border-zinc-300 dark:border-zinc-800 w-full min-h-60 max-h-60 lg:max-h-full lg:h-full lg:max-w-80 lg:min-w-80 lg:border-b-0 lg:border-r-2 lg:flex overflow-y-auto"
      id="nav"
    >
      <h2 className="text-2xl text-zinc-700 dark:text-zinc-200 font-medium">
        Notas Guardadas
      </h2>
      {notes.length > 0 && (
        <SearchInput
          placeholder="Buscar nota"
          onChange={(t) => searchNotes(t.target.value)}
        />
      )}

      {isLoading && <Loader />}

      {notes.length <= 0 && (
        <span className="self-center text-zinc-400 mt-5">
          La lista está vacía
        </span>
      )}

      <ul className="flex flex-col gap-3">{!isLoading && <ListContent />}</ul>
    </nav>
  );
}

export default Nav;
