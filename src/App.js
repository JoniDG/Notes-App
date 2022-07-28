import { useState } from 'react';
import './App.css';
import { Note } from './components/Note';

const notesDefault = [
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
]

function App() {
  const [notes, setNotes] = useState(notesDefault);
  const [newNote, setNewNote] = useState('');

  const handleChange = (e) => {
    setNewNote(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
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
