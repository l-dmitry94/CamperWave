import Container from 'components/Container';
import Filters from 'components/Filters';

import scss from './Catalog.module.scss';
import Products from 'components/Products';

const Catalog = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.wrapper}>
                    <Filters />
                    <Products />
                </div>
            </Container>
        </section>
    );
};

export default Catalog;
