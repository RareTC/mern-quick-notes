import { useState, useEffect } from 'react';
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
    console.log('newNote:', newNote);
    setNotes([...notes, newNote])
  }

  useEffect(() => {
    async function getNotes() {
      const allNotes = await notesAPI.indexNote();
      setNotes(allNotes);
    }
    getNotes();
  }, []);

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <div>
            <NewNoteForm notes={notes} addNote={addNote}/>
          </div>
            <NoteList notes={notes} addNote={addNote}/>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
