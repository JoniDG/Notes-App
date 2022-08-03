import axios from 'axios';
export const createNote = (note) => {
    return axios.post('https://jsonplaceholder.typicode.com/posts', note)
        .then(response => {
            return response.data;
        });
}