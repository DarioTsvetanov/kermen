import axios from 'axios';

const url = 'https://kermen.herokuapp.com';

export const create = (flowerData) => {
    try {
        return axios.post(url, flowerData);
    }
    catch (e) {
        console.log(e.message);
    }
}

export const getAll = (currentUser) => {
    return axios.get(url, { params: { currentUser } });
}

export const getOne = (id) => {
    return axios.get(`${url}/flowers/${id}`, { params: { id } });
};

export const update = (flowerId, flowerData) => {
    try {
        return axios.post(`${url}/flowers/${flowerId}/edit`, flowerData);
    }
    catch (e) {
        console.log(e.message);
    }
}

export const deleteFlower = async (flowerId) => {
    try {
        return fetch(`${url}/flowers/${flowerId}/delete`, {
            method: 'DELETE',
        })
    }
    catch (e) {
        console.log(e.message);
    }
}

