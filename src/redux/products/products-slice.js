import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './products-operations';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload;
            }),
});

export default productsSlice.reducer;
