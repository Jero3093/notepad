import Link from "next/link";
import { CiEdit } from "react-icons/ci";

function EditNoteButton({ noteId }) {
  return (
    <Link
      href={`/notes/edit/${noteId}`}
      className="p-2 rounded-md border-2 border-sky-500 text-sky-500 bg-transparent md:px-5"
      title="Editar Nota"
    >
      <CiEdit className="w-6 h-6" />
    </Link>
  );
}

export default EditNoteButton;
