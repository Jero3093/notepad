"use client";

import { useState } from "react";
import { SearchInput } from "./Input";
import { IoSearch, IoMenuOutline } from "react-icons/io5";

function Header() {
  const [showInput, setShowInput] = useState(false);

  const handleShowNav = () => {
    const nav = document.getElementById("nav");

    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      nav.classList.add("flex");
    } else {
      nav.classList.remove("flex");
      nav.classList.add("hidden");
    }
  };

  return (
    <>
      <header className="flex flex-row items-center justify-between p-4 border-b border-zinc-300 dark:border-zinc-800">
        <button onClick={() => handleShowNav()}>
          <IoMenuOutline className="w-10 h-10 text-amber-300" />
        </button>

        <h1 className="text-3xl text-[#46b3e6] font-semibold">Notepad</h1>

        <button className="md:hidden" onClick={() => setShowInput(!showInput)}>
          <IoSearch className="w-7 h-7 text-amber-300" />
        </button>

        <SearchInput
          className="max-w-96 p-2 h-10 border-t-2 border-r-2 border-b-2 rounded-tr-full rounded-br-full border-amber-300 outline-none"
          placeholder="Buscar nota"
        />
      </header>
      {showInput && (
        <div className="mx-3 mt-3">
          <SearchInput
            className="w-full max-w-96 p-2 h-10 border-t-2 border-r-2 border-b-2 rounded-tr-full rounded-br-full border-amber-300 outline-none"
            placeholder="Buscar nota"
            mobile={true}
          />
        </div>
      )}
    </>
  );
}

export default Header;
