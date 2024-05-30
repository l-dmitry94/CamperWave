import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsRequest } from 'api/products-api';

export const getProducts = createAsyncThunk(
    'products/products',
    async (_, { rejectWithValue }) => {
        try {
            const data = await productsRequest();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
