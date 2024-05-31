import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsRequest } from 'api/products-api';

export const getProducts = createAsyncThunk(
    'products/products',
    async (page, { rejectWithValue }) => {
        try {
            const data = await productsRequest(page);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
