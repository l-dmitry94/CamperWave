import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const productsRequest = async () => {
    const response = await instance.get('/adverts');
    return response.data;
};
