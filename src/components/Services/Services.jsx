import Container from 'components/Container';
import ServicesItem from './ServicesItem';

import services from './data';

import scss from './Services.module.scss';

const Services = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <h2 className={scss.title}>Our Services</h2>

                    <ul className={scss.list}>
                        {services.map((item, index) => (
                            <ServicesItem key={index} {...item} />
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};

export default Services;
