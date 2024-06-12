function filterNotesByName(text, notes) {
  const filteredList = notes.filter((e) =>
    e.title.toLowerCase().includes(text.toLowerCase())
  );

  if (filteredList.length <= 0) return [];

  return filteredList;
}

export { filterNotesByName };
