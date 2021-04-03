const url = 'http://localhost:3333';

export const create = (data) => {
    return fetch(`${url}/create`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}