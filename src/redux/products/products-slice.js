import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './products-operations';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoadMore: false,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload?.length
                    ? [...state.products, ...action.payload]
                    : state.products;
                state.isLoadMore = action.payload.length === 4;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload;
            }),
});

export default productsSlice.reducer;
