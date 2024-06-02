import { useEffect } from 'react';

import Hero from 'components/Hero';
import Services from 'components/Services';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    return (
        <>
            <Hero />
            <Services />
        </>
    );
};

export default HomePage;
