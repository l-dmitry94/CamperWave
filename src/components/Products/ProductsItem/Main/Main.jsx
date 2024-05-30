import { icons } from 'assets/icons';

import scss from './Main.module.scss';

const Main = ({ product }) => {
    return (
        <div className={scss.main}>
            <p className={scss.mainDescription}>{product.description}</p>
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
                    {product.transmission}
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIconFill}>
                        <use href={`${icons}#icon-petrol`}></use>
                    </svg>
                    {product.engine}
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIcon}>
                        <use href={`${icons}#icon-kitchen`}></use>
                    </svg>
                    kitchen
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIcon}>
                        <use href={`${icons}#icon-bed`}></use>
                    </svg>
                    {`${product.details.beds} beds`}
                </li>
                <li className={scss.mainCategoriesItem}>
                    <svg className={scss.mainCategoriesIcon}>
                        <use href={`${icons}#icon-ac`}></use>
                    </svg>
                    AC
                </li>
            </ul>
        </div>
    );
};

export default Main;
