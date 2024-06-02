import { useDispatch, useSelector } from 'react-redux';

import { selectFavoriteProducts } from '../../../../redux/favorite/favorite-selectors';
import {
    addProductToFavorite,
    deleteProductFromFavorite,
} from '../../../../redux/favorite/favorite-slice';

import { icons } from 'assets/icons';

import scss from './Head.module.scss';
import { toast } from 'react-toastify';

const Head = ({ product }) => {
    const favoriteProducts = useSelector(selectFavoriteProducts);
    const dispatch = useDispatch();

    const isDublicateProduct = favoriteProducts.some(
        ({ _id }) => product._id === _id
    );

    const toggleFavoriteProducts = () => {
        if (!isDublicateProduct) {
            dispatch(addProductToFavorite(product));
            toast.success('Motorhome added to favorites', {
                autoClose: 2000,
                closeOnClick: true,
            });
        } else {
            dispatch(deleteProductFromFavorite(product._id));
            toast.success('Motorhome removed from favorites', {
                autoClose: 2000,
                closeOnClick: true,
            });
        }
    };

    return (
        <div className={scss.head}>
            <div className={scss.headInfo}>
                <h3 className={scss.headTitle}>{product.name}</h3>
                <div className={scss.headRatingLocation}>
                    <div className={scss.headRating}>
                        <svg className={scss.headStarIcon}>
                            <use href={`${icons}#icon-star`}></use>
                        </svg>
                        <p
                            className={scss.headRatingText}
                        >{`${product.rating}(${product.reviews.length} Reviews)`}</p>
                    </div>
                    <div className={scss.headLocation}>
                        <svg className={scss.headLocationIcon}>
                            <use href={`${icons}#icon-location`}></use>
                        </svg>
                        <p className={scss.headLocationText}>
                            {product.location}
                        </p>
                    </div>
                </div>
            </div>
            <div className={scss.headPriceLike}>
                <span className={scss.headPrice}>{`€${product.price}.00`}</span>
                <button className={scss.like} onClick={toggleFavoriteProducts}>
                    <svg
                        className={`${scss.likeIcon} ${isDublicateProduct && scss.likeIconPressed}`}
                    >
                        <use href={`${icons}#icon-like`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Head;
