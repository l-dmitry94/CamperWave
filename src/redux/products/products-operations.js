import { createAsyncThunk } from '@reduxjs/toolkit';

import { filterProductsRequest, productsRequest } from 'api/products-api';

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

export const getFilteredProducts = createAsyncThunk(
    'products/filter',
    async (body, { rejectWithValue }) => {
        try {
            const data = await filterProductsRequest(body);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);
