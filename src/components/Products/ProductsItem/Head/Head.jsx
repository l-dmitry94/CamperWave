import { icons } from 'assets/icons';

import scss from './Head.module.scss';

const Head = ({ product }) => {
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
                <button className={scss.like}>
                    <svg className={scss.likeIcon}>
                        <use href={`${icons}#icon-like`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Head;
