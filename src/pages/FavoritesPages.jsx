import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { resetProducts } from '../redux/products/products-slice';

import Favorites from 'components/Favorites';

const FavoritesPages = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
        dispatch(resetProducts());
    }, [dispatch]);

    return <Favorites />;
};

export default FavoritesPages;
