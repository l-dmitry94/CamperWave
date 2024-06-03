import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductsItem from './ProductsItem';
import CustomButton from 'components/CustomButton';

import { getProducts } from '../../redux/products/products-operations';
import {
    selectError,
    selectIsLoadMore,
    selectIsLoading,
    selectProducts,
} from '../../redux/products/products-selectors';

import scss from './Products.module.scss';

const Products = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const products = useSelector(selectProducts);
    const isLoadMore = useSelector(selectIsLoadMore);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(getProducts(page));
    }, [dispatch, page]);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const getAllProducts = () => {
        if (page === 1) {
            dispatch(getProducts(page));
        } else {
            setPage(1);
        }
        setPage(1);
    };

    return (
        <section className={scss.section}>
            {!isLoading && (
                <>
                    {products.length && error !== undefined ? (
                        <>
                            <ul className={scss.list}>
                                {products.map((product) => (
                                    <ProductsItem
                                        key={product._id}
                                        product={product}
                                    />
                                ))}
                            </ul>
                            {isLoadMore && (
                                <button
                                    type="button"
                                    onClick={loadMore}
                                    className={scss.loadMore}
                                >
                                    Load more
                                </button>
                            )}
                        </>
                    ) : (
                        <div className={scss.empty}>
                            <p className={scss.emptyText}>
                                We couldn&apos;t find anything
                            </p>
                            <CustomButton
                                type="button"
                                text="Show all motorhomes"
                                onClick={getAllProducts}
                            />
                        </div>
                    )}
                </>
            )}
        </section>
    );
};

export default Products;
