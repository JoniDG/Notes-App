import { useState, useEffect } from 'react';
import './App.css';
import { Note } from './components/Note';
import { createNote } from './services/notes/createNote';
import { getAllNotes } from './services/notes/getAllNotes';

/* const notesDefault = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
] */

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  /*1° Se renderiza todo sin haber ejecutado el efecto
  2° Se ejecuta el efecto, hace el fetch, setea las notas y renderiza
  */

  useEffect(() => {
    setLoading(true);
    getAllNotes()
      .then(response => {
        setNotes(response);
        setLoading(false);
      })
  }, []);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteObject = {
      title: newNote,
      body: newNote,
    }
    createNote(noteObject)
      .then(response => {
        setNotes([...notes, response]);
        setNewNote('');
      })
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      {/* <input type="text" onChange={handleChange} value={newNote} />
      <button onClick={handleClick}>Add Note</button> */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add Note</button>
      </form>
      {loading ? <p>Loading Notes...</p> : null}
      <ul>
        {notes
          .map(note => {
            return <Note key={note.id} {...note} />  /*La key debe ir donde estoy iterando la lista de elementos*/

            /*2 Opciones en el map: "{return (valor a devolver)}" o "(valor directo a devolver)"*/

          })}
      </ul>
    </div>
  );
}

export default App;
