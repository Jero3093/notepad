import EditNoteButton from "./EditNoteButton";
import DeleteNoteButton from "./DeleteNoteButton";

const NoteView = ({ id, title, content, created_at }) => {
  const created_date = created_at && created_at.substring(0, 10);

  return (
    <aside className="p-4 flex flex-col gap-3 text-pretty w-full h-full">
      <header className="flex flex-row justify-between items-center">
        <aside className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium md:text-3xl">{title}.</h1>
          <span className="text-zinc-600">
            Creada el: <time dateTime={created_date}>{created_date}</time>
          </span>
        </aside>
        <aside className="flex flex-row gap-3">
          <EditNoteButton noteId={id} />
          <DeleteNoteButton noteId={id} />
        </aside>
      </header>
      <pre className="leading-loose mt-10 text-xl font-[system-ui] text-wrap">
        {content}
      </pre>
    </aside>
  );
};

export default NoteView;
