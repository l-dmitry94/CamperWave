import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'components/Container';
import ProductsItem from 'components/Products/ProductsItem';

import { selectFavoriteProducts } from '../../redux/favorite/favorite-selectors';

import scss from './Favorites.module.scss';

const Favorites = () => {
    const favoritesProducts = useSelector(selectFavoriteProducts);

    return (
        <section className={scss.section}>
            <Container>
                {favoritesProducts.length ? (
                    <ul className={scss.list}>
                        {favoritesProducts.map((product) => (
                            <ProductsItem
                                key={product._id}
                                product={product}
                                label={true}
                            />
                        ))}
                    </ul>
                ) : (
                    <div className={scss.empty}>
                        <p className={scss.emptyText}>
                            There&apos;s nothing here
                        </p>
                        <Link to="/catalog" className={scss.returnLink}>
                            Return to catalog
                        </Link>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default Favorites;
