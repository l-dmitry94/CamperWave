import { useEffect } from 'react';

import Favorites from 'components/Favorites';

const FavoritesPages = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    return <Favorites />;
};

export default FavoritesPages;
