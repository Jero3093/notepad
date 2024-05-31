import Logo from "../../public/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src={Logo} alt="Notepad - Logo" />
      <h1>Notepad</h1>
    </main>
  );
}
