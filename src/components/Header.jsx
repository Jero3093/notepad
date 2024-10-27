"use client";
import { IoMenuOutline, IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

function Header() {
  const handleShowNav = () => {
    const nav = document.getElementById("nav");

    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      nav.classList.add("flex");
      if (nav.classList.contains("lg:flex")) {
        nav.classList.remove("lg:flex");
        nav.classList.add("lg:hidden");
      }
    } else {
      nav.classList.remove("flex");
      nav.classList.add("hidden");
      if (nav.classList.contains("lg:hidden")) {
        nav.classList.remove("lg:hidden");
        nav.classList.add("lg:flex");
      }
    }
  };

  return (
    <>
      <header className="flex flex-row items-center justify-between p-4">
        <button onClick={() => handleShowNav()} title="Menu">
          <IoMenuOutline className="w-10 h-10 text-zinc-700 dark:text-zinc-200" />
        </button>

        <Link href={"/"} title="Pagina Principal">
          <h1 className="text-3xl text-sky-600 font-semibold dark:text-sky-400">
            Notepad
          </h1>
        </Link>

        <Link href={"/settings"} title="Ajustes">
          <IoSettingsSharp className="w-7 h-7 text-zinc-700 dark:text-zinc-300" />
        </Link>
      </header>
    </>
  );
}

export default Header;
