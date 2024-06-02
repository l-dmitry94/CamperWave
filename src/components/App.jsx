import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBar from './AppBar';
import HomePage from 'pages/HomePage';
import CatalogPage from 'pages/CatalogPage';
import FavoritesPages from 'pages/FavoritesPages';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppBar />}>
                    <Route index element={<HomePage />} />
                    <Route path="catalog" element={<CatalogPage />} />
                    <Route path="favorites" element={<FavoritesPages />} />
                </Route>

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <ToastContainer theme="colored" hideProgressBar />
        </>
    );
};

export default App;
