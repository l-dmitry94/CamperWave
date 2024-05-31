import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: [],
    },
    reducers: {
        addProductToFavorite(state, action) {
            state.favorite = [...state.favorite, action.payload];
        },
        deleteProductFromFavorite(state, action) {
            state.favorite = state.favorite.filter(
                (product) => product._id !== action.payload
            );
        },
    },
});

export const { addProductToFavorite, deleteProductFromFavorite } =
    favoriteSlice.actions;

export default favoriteSlice.reducer;
