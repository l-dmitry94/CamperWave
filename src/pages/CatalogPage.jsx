import { useEffect } from 'react';

import Catalog from 'components/Catalog';

const CatalogPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    return <Catalog />;
};

export default CatalogPage;
