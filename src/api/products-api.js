import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const productsRequest = async (page = 1) => {
    const response = await instance.get('/adverts', {
        params: {
            page,
            limit: 4,
        },
    });
    return response.data;
};
