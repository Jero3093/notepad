import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import ImportNoteBtn from "./ImportNoteBtn";

function NewNoteButton({ userId }) {
  return (
    <menu className="fixed newNoteBtn grid grid-cols-1">
      <Link
        href={"/notes/create"}
        title="Agregar Nueva Nota"
        className="grid place-items-center shadow-md w-14 h-14 rounded-tl-lg bg-sky-700 dark:bg-sky-400 z-10"
      >
        <IoAdd className="w-9 h-9 text-black" />
      </Link>

      <ImportNoteBtn userId={userId} forBottomBtns={true} />
    </menu>
  );
}

export default NewNoteButton;
