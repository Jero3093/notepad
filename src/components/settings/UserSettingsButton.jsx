import Link from "next/link";
import { FaUserCog } from "react-icons/fa";

function UserSettingsButton({ userId }) {
  return (
    <Link
      href={`/settings/user?id=${userId}`}
      className="w-96 h-12 rounded-md flex flex-row justify-between items-center py-6 px-4 bg-transparent border-[3px] text-lg border-sky-500 text-sky-500"
      title="Ajustes de Usuario"
    >
      Ajustes de Usuario
      <FaUserCog className="w-5 h-5" />
    </Link>
  );
}

export default UserSettingsButton;
