import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductsItem from './ProductsItem';

import { getProducts } from '../../redux/products/products-operations';
import { selectProducts } from '../../redux/products/products-selectors';

import scss from './Products.module.scss';

const Products = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const products = useSelector(selectProducts);

    console.log(products);

    useEffect(() => {
        dispatch(getProducts(page));
    }, [dispatch, page]);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <section className={scss.section}>
            <ul className={scss.list}>
                {products.map((product) => (
                    <ProductsItem key={product._id} product={product} />
                ))}
            </ul>
            <button type="button" onClick={loadMore} className={scss.loadMore}>
                Load more
            </button>
        </section>
    );
};

export default Products;
