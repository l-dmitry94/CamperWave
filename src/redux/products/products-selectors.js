import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = (state) => state.products.products;

export const selectIsLoadMore = (state) => state.products.isLoadMore;

export const selectIsLoading = (state) => state.products.isLoading;

export const selectError = (state) => state.products.error;

export const selectisEmptyResultFilter = (state) =>
    state.products.isEmptyResultFilter;

export const selectProductById = createSelector(
    [selectProducts, (_, productId) => productId],
    (products, productId) =>
        products.find((product) => product._id === productId)
);
