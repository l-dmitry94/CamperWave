import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favoriteReducer from './favorite/favorite-slice';
import productsReducer from './products/products-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorite'],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

const rootReducer = combineReducers({
    favorite: persistedReducer,
    products: productsReducer,
});

export default rootReducer;
