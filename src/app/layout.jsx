import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notepad - Escribe y guarda todo lo que quieras",
  description:
    "Aqui podras escribir y preservar lo que sea que salga de tu mente y en cualquier momento.",
  keyword: "notas, cuaderno, escribir, bloc de notas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
