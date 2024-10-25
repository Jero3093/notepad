import EditNoteButton from "./EditNoteButton";
import DeleteNoteButton from "./DeleteNoteButton";
import ExportNoteButton from "./ExportNoteButton";

const NoteView = ({ id, title, content, created_at }) => {
  const created_date = created_at && created_at.substring(0, 10);

  return (
    <aside className="p-4 flex flex-col gap-3 text-pretty pb-36 overflow-y-auto w-full lg:h-full">
      <header className="flex flex-row justify-between md:items-center">
        <aside className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium md:text-3xl line-clamp-2 max-w-80 md:max-w-lg lg:max-w-2xl">{title}.</h1>
          <span className="text-zinc-600">
            Creada el: <time dateTime={created_date}>{created_date}</time>
          </span>
        </aside>
        <aside className="flex flex-col gap-3 md:flex-row">
          <ExportNoteButton title={title} content={content} />
          <EditNoteButton noteId={id} />
          <DeleteNoteButton noteId={id} />
        </aside>
      </header>
      <pre className="leading-loose text-xl font-[system-ui] text-wrap md:mt-10">
        {content}
      </pre>
    </aside>
  );
};

export default NoteView;
