import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function NotesCard() {
  return (
    <Link
      href={`/notes/`}
      className="flex flex-row items-center gap-2 justify-between text-lg w-full max-w-full p-2 text-pretty hover:bg-zinc-300 hover:dark:bg-zinc-900 rounded-md transition-all"
    >
      <span className="line-clamp-1">Nota</span>
      <IoIosArrowForward className="min-w-5 min-h-5 text-zinc-500" />
    </Link>
  );
}

export default NotesCard;
