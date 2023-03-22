import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import NoteList from '../NoteList/NoteList';
import NavBar from '../../components/NavBar/NavBar';
import * as notesAPI from '../../utilities/notes-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);

  async function addNote(note) {
    const newNote = await notesAPI.createNote(note);
    setNotes([...notes, newNote])
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          {showNotes ? ( 
            <NoteList notes={notes} addNote={addNote}/>)
            : (
            <p>No Notes Yet</p>
          )}
          <div>
            <NewNoteForm notes={notes} addNote={addNote}/>
          </div>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
