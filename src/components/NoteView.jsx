const NoteView = ({ title, content, created_at }) => {
  const created_date = created_at && created_at.substring(0, 10);

  return (
    <aside className="p-4 flex flex-col gap-3 text-pretty w-full h-full">
      <h1 className="text-2xl font-medium">{title}.</h1>
      <span className="text-zinc-600">
        Creada el: <time dateTime={created_date}>{created_date}</time>
      </span>
      <pre className="leading-loose mt-10 text-xl font-[system-ui] text-wrap">{content}</pre>
    </aside>
  );
};

export default NoteView;
