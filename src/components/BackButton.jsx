import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

function BackButton({ route }) {
  return (
    <Link
      href={route}
      className="flex flex-row items-center gap-2 w-fit text-zinc-800 dark:text-zinc-300 hover:scale-105 transition-all"
      title="Regresar a pagina anterior"
    >
      <IoIosArrowBack className="w-6 h-6" />
      Regresar
    </Link>
  );
}

export default BackButton;
