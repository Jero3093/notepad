function Loader({ authButtons }) {
  const normalStyles =
    "w-5 h-5 self-center rounded-full border-2 border-t-zinc-600 border-l-transparent border-r-zinc-600 border-b-zinc-600 dark:border-t-zinc-400 dark:border-r-zinc-400 dark:border-b-zinc-400 animate-spin";

  const authButtonStyle =
    "w-5 h-5 self-center rounded-full border-2 border-t-zinc-600 border-l-transparent border-r-black border-b-black dark:border-t-black dark:border-r-black dark:border-b-black animate-spin";

  return <div className={authButtons ? authButtonStyle : normalStyles}></div>;
}

export default Loader;
