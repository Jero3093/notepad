function SettingsHeader({ user }) {
  return (
    <header className="flex flex-row gap-5 items-center">
      <div className="w-24 h-24 rounded-full grid place-items-center text-2xl font-semibold bg-sky-600 md:w-36 md:h-36 md:text-4xl">
        {user[0]?.username.split("")[0]}
      </div>
      <aside className="flex flex-col gap-2">
        <h2 className="font-semibold text-2xl line-clamp-2 md:text-4xl">
          {user[0]?.username}
        </h2>
        <h3 className="text-zinc-500 line-clamp-1 md:text-xl">
          {user[0]?.email}
        </h3>
        <span className="text-zinc-500 md:text-xl">
          Se unió el{" "}
          <time dateTime={user[0]?.created_at.substring(0, 10)}>
            {user[0]?.created_at.substring(0, 10)}
          </time>
        </span>
      </aside>
    </header>
  );
}

export default SettingsHeader;
