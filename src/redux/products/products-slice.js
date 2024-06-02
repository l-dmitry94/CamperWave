import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getFilteredProducts, getProducts } from './products-operations';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoadMore: false,
        toastId: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getProducts.pending, (state) => {
                state.toastId = toast.loading('Please wait...');
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload?.length
                    ? [...state.products, ...action.payload]
                    : state.products;
                state.isLoadMore = action.payload.length === 4;
                toast.update(state.toastId, {
                    render: 'Motorhomes loaded successfully',
                    type: 'success',
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                });
            })
            .addCase(getProducts.rejected, (state) => {
                toast.update(state.toastId, {
                    render: 'An error occurred',
                    type: 'error',
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                });
            })
            .addCase(getFilteredProducts.pending, (state) => {
                state.toastId = toast.loading('Filtering motorhomes...');
            })
            .addCase(getFilteredProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoadMore = false;
                if (action.payload.length) {
                    toast.update(state.toastId, {
                        render: 'Motorhomes filtered successfully',
                        type: 'success',
                        isLoading: false,
                        autoClose: 2000,
                        closeOnClick: true,
                    });
                } else {
                    toast.update(state.toastId, {
                        render: 'Nothing was found',
                        type: 'error',
                        isLoading: false,
                        autoClose: 2000,
                        closeOnClick: true,
                    });
                }
            })
            .addCase(getFilteredProducts.rejected, (state) => {
                toast.update(state.toastId, {
                    render: 'Nothing was found',
                    type: 'error',
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                });
            }),
});

export default productsSlice.reducer;
