import NoteListItem from "../NoteListItem/NoteListItem";

export default function NoteList({ notes }) {
  const noteListItems = notes.map((n, idx) =>(
    <NoteListItem note={n.text} idx={idx} key={idx} date={n.createdAt} />
  ));
console.log(notes);
  return (
    <>
      <h1> Note List:</h1>
      {noteListItems.length === 0 ? 
      <p>No Notes Yet</p>
      :
      <ul>
        {noteListItems}
      </ul>
      }
    </>
  );
}