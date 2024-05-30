import { createSelector } from '@reduxjs/toolkit';

export const selectProducts = (state) => state.products.products;

export const selectProductById = createSelector(
    [selectProducts, (_, productId) => productId],
    (products, productId) =>
        products.find((product) => product.id === productId)
);