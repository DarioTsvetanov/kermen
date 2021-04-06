import axios from 'axios';

const url = 'http://localhost:3333';

export const create = (data) => {
    try {
        return axios.post(url, data);
    }
    catch(e) {
        console.log(e.message);
    }
}

export const getAll = () => {
    return axios.get(url);
}