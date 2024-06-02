import Link from "next/link";
import { IoAdd } from "react-icons/io5";

function NewNoteButton() {
  return (
    <Link
      href={"/notes/create"}
      className="fixed bottom-0 right-0 grid place-items-center w-14 h-14 rounded-tl-lg bg-amber-300 z-10"
    >
      <IoAdd className="w-9 h-9 text-black" />
    </Link>
  );
}

export default NewNoteButton;
