import NoteListItem from "../NoteListItem/NoteListItem";

export default function NoteList({ notes }) {
  const noteListItems = notes.map((n, idx) =>(
    <NoteListItem newNote={n} idx={idx} key={idx} />
  ));

  return (
    <>
      <h1> Note List:</h1>
      <ul>
        {noteListItems}
      </ul>
    </>
  );
}