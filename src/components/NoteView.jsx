const NoteView = ({ title, content, created_at }) => {
  return (
    <aside className="p-4 flex flex-col gap-3 text-pretty w-full h-full">
      <h1 className="text-2xl font-medium">{title}.</h1>
      <span className="text-zinc-600">
        Creada el: <time dateTime="2024/06/02">{created_at}</time>
      </span>
      <p className="leading-loose mt-10 text-xl font-light">{content}</p>
    </aside>
  );
};

export default NoteView;
