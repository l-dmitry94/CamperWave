import { icons } from 'assets/icons';

import scss from './Main.module.scss';

const Main = ({ product, label }) => {
    return (
        <div className={scss.main}>
            <p
                className={`${scss.mainDescription} ${label && scss.mainDescriptionFavorite}`}
            >
                {product.description}
            </p>
            <ul className={scss.mainCategories}>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIconFill}>
                        <use href={`${icons}#icon-users`}></use>
                    </svg>
                    {`${product.adults} adults`}
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIcon}>
                        <use href={`${icons}#icon-automatic`}></use>
                    </svg>
                    <p className={scss.categoryText}>{product.transmission}</p>
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIconFill}>
                        <use href={`${icons}#icon-petrol`}></use>
                    </svg>
                    <p className={scss.categoryText}>{product.engine}</p>
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIcon}>
                        <use href={`${icons}#icon-kitchen`}></use>
                    </svg>
                    <p className={scss.categoryText}>kitchen</p>
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIcon}>
                        <use href={`${icons}#icon-bed`}></use>
                    </svg>
                    {`${product.details.beds} beds`}
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIconFill}>
                        <use href={`${icons}#icon-ac`}></use>
                    </svg>
                    <p className={scss.categoryText}>AC</p>
                </li>
            </ul>
        </div>
    );
};

export default Main;
