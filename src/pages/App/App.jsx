import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import NoteList from '../NoteList/NoteList';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false);

  function addNote(note) {
    setNotes(prevNotes => [...prevNotes, note]);
    setShowNotes(true);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
          </>
          :
          <AuthPage setUser={setUser} />
      }
        {showNotes ? ( 
          <NoteList notes={notes} addNote={addNote}/>)
          : (
          <p>No Notes Yet</p>
        )}
      <div>
        <NewNoteForm notes={notes} addNote={addNote}/>
      </div>
    </main>
  );
}
