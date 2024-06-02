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

export const filterProductsRequest = async ({ location, type, equipments }) => {
    const { data } = await instance.get('/adverts', {
        params: {
            location,
            form: type,
        },
    });

    const filteredData = data.filter((product) => {
        return equipments.every((equipment) => {
            if (equipment === 'automatic') {
                return product.transmission === 'automatic';
            }
            return product.details[equipment] > 0;
        });
    });

    return filteredData;
};
