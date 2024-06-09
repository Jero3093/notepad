import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function NotesCard({ id, title }) {
  return (
    <Link
      href={`/notes/${id}/`}
      className="flex flex-row items-center gap-2 justify-between text-lg w-full max-w-full p-2 text-pretty hover:bg-zinc-300 hover:dark:bg-zinc-900 rounded-md transition-all"
      key={id}
    >
      <span className="line-clamp-1">{title}</span>
      <IoIosArrowForward className="min-w-5 min-h-5 text-zinc-500" />
    </Link>
  );
}

export default NotesCard;
