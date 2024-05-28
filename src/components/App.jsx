import { Route, Routes } from 'react-router-dom';

import AppBar from './AppBar';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritesPages from 'pages/FavoritesPages';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppBar />}>
                <Route index element={<HomePage />} />
                <Route path="catalog" element={<CatalogPage />} />
                <Route path="favorites" element={<FavoritesPages />} />
            </Route>
        </Routes>
    );
};

export default App;
