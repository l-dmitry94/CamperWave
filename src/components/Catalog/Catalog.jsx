import Container from 'components/Container';
import Filters from 'components/Filters';
import Products from 'components/Products';

import scss from './Catalog.module.scss';

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
