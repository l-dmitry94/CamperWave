import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Hero from 'components/Hero';
import Services from 'components/Services';

import { resetProducts } from '../redux/products/products-slice';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
        dispatch(resetProducts());
    }, [dispatch]);

    return (
        <>
            <Hero />
            <Services />
        </>
    );
};

export default HomePage;
