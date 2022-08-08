import axios from 'axios';
export const createNote = (note) => {
    return axios.post('http://localhost:3001/notes', note)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
}