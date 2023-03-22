import { useState } from 'react';


export default function NewNoteForm({addNote}) {
  const [newNote, setNewNote] = useState({text: ""});

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote({text:""});
  }

  function handleChange(evt) {
    const newNoteInfo = { ...newNote, [evt.target.name]: evt.target.value };
    setNewNote(newNoteInfo);
  } 

  return (
    <>
      <h1>Add Notes</h1>
      <form onSubmit={handleAddNote}>
          <input 
          type="text"
          name="text"
          value={newNote.text}
          onChange={handleChange}
          placeholder="Make Note"
          required
          />
        <button type="submit">Add Note</button>
      </form>
    </>
  );
}