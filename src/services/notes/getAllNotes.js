import axios from 'axios';
export const getAllNotes = () => {
  return axios.get('http://localhost:3001/notes')
    .then(response => { //No hace falta transformar a json
      return response.data;
    });
  /* fetch('https://jsonplaceholder.typicode.com/posts')  //fetch devuelve una promesa (tipo de dato que se puede resolver o rechazar)
    .then(response => response.json())
    .then(json => {
      setNotes(json);
      setLoading(false);
    }); */
}