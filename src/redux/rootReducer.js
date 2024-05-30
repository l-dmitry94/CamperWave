import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './products/products-slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['products'],
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

const rootReducer = combineReducers({
    products: persistedReducer,
    filter: filterReducer,
});

export default rootReducer;
