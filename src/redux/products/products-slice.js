import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { getFilteredProducts, getProducts } from './products-operations';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoadMore: false,
        toastId: null,
        isEmptyResultFilter: false,
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getProducts.pending, (state) => {
                state.toastId = toast.loading('Please wait...');
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload?.length
                    ? [...state.products, ...action.payload]
                    : state.products;
                state.isLoadMore = action.payload.length === 4;
                state.isLoading = false;
                state.error = null;
                toast.update(state.toastId, {
                    render: 'Motorhomes loaded successfully',
                    type: 'success',
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                });
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
                toast.update(state.toastId, {
                    render: 'An error occurred',
                    type: 'error',
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                });
            })
            .addCase(getFilteredProducts.pending, (state) => {
                state.isLoading = true;
                state.toastId = toast.loading('Filtering motorhomes...');
            })
            .addCase(getFilteredProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoadMore = false;
                state.isLoading = false;
                state.error = null;
                if (action.payload.length) {
                    state.error = null;
                    toast.update(state.toastId, {
                        render: 'Motorhomes filtered successfully',
                        type: 'success',
                        isLoading: false,
                        autoClose: 2000,
                        closeOnClick: true,
                    });
                    state.isEmptyResultFilter = false;
                } else {
                    state.error = 'Not Found';
                    toast.update(state.toastId, {
                        render: 'Nothing was found',
                        type: 'error',
                        isLoading: false,
                        autoClose: 2000,
                        closeOnClick: true,
                    });
                    state.isEmptyResultFilter = true;
                }
            })
            .addCase(getFilteredProducts.rejected, (state, action) => {
                state.isLoading = false;
                toast.update(state.toastId, {
                    render: 'Nothing was found',
                    type: 'error',
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                });
                state.error = action.payload;
            }),
});

export default productsSlice.reducer;
