import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductsItem from './ProductsItem';

import { getProducts } from '../../redux/products/products-operations';
import { selectProducts } from '../../redux/products/products-selectors';

import scss from './Products.module.scss';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <section className={scss.section}>
            <ul className={scss.list}>
                {products.map((product) => (
                    <ProductsItem key={product._id} product={product} />
                ))}
            </ul>
        </section>
    );
};

export default Products;
