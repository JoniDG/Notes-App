import { useState } from 'react';
import './App.css';
import { Note } from './components/Note';

const notesDefault = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]

function App() {
  const [notes, setNotes] = useState(notesDefault);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  }

  const handleChange = (e) => {
    setNewNote(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toUTCString(),
      important: Math.random() < 0.5,
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? 'Show important' : 'Show all'}
      </button>
      {/* <input type="text" onChange={handleChange} value={newNote} />
      <button onClick={handleClick}>Add Note</button> */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add Note</button>
      </form>
      <ul>
        {notes
          .filter(note => showAll || note.important)  // show all or only important, filter construye un nuevo array con todos los valores para los cuales devuelve true
          .map(note => {
            return <Note key={note.id} id={note.id} content={note.content} date={note.date} />  /*La key debe ir donde estoy iterando la lista de elementos*/

            /*2 Opciones en el map: "{return (valor a devolver)}" o "(valor directo a devolver)"*/

          })}
      </ul>
    </div>
  );
}

export default App;
