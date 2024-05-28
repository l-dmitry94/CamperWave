import { Link } from 'react-router-dom';

import Container from 'components/Container';

import scss from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.info}>
                    <h1 className={scss.title}>
                        Explore Camping Adventures with Our Off-Road Vehicles
                    </h1>
                    <p className={scss.description}>
                        Discover rugged 4x4s, spacious campervans, and versatile
                        trailers. Whether you&apos;re hitting the trails or
                        setting up camp, we&apos;ve got the perfect wheels for
                        your next adventure.
                    </p>

                    <Link to="/catalog" className={scss.link}>
                        Explore our catalog
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
