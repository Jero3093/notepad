"use client";

import { saveAs } from "file-saver";
import { MdSaveAlt } from "react-icons/md";

function ExportNoteButton({ title, content }) {
  const handleExportNote = () => {
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    saveAs(blob, `${title}.txt`);
  };

  return (
    <button
      className="p-2 rounded-md border-2 border-sky-500 text-sky-500 bg-transparent md:px-5"
      title="Exportar Nota"
      onClick={() => handleExportNote()}
    >
      <MdSaveAlt className="w-6 h-6 " />
    </button>
  );
}

export default ExportNoteButton;
