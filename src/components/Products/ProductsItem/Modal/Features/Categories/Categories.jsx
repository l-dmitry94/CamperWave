import { icons } from 'assets/icons';

import scss from './Categories.module.scss';

const Categories = ({ product }) => {
    return (
        <ul className={scss.categories}>
            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIconFill}>
                    <use href={`${icons}#icon-users`}></use>
                </svg>
                {`${product.adults} adults`}
            </li>
            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIcon}>
                    <use href={`${icons}#icon-automatic`}></use>
                </svg>
                {product.transmission}
            </li>
            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIconFill}>
                    <use href={`${icons}#icon-ac`}></use>
                </svg>
                AC
            </li>
            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIconFill}>
                    <use href={`${icons}#icon-petrol`}></use>
                </svg>
                {product.engine}
            </li>
            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIcon}>
                    <use href={`${icons}#icon-kitchen`}></use>
                </svg>
                Kitchen
            </li>
            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIcon}>
                    <use href={`${icons}#icon-bed`}></use>
                </svg>
                {`${product.details.beds} ${product.details.beds > 1 ? 'beds' : 'bed'}`}
            </li>
            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIcon}>
                    <use href={`${icons}#icon-conditioner`}></use>
                </svg>
                {`${product.details.airConditioner} ${product.details.airConditioner > 1 ? 'Air conditioners' : 'Air conditioner'}`}
            </li>
            {product.details.CD > 0 && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIcon}>
                        <use href={`${icons}#icon-cd`}></use>
                    </svg>
                    CD
                </li>
            )}

            {product.details.TV > 0 && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIcon}>
                        <use href={`${icons}#icon-tv`}></use>
                    </svg>
                    TV
                </li>
            )}

            {product.details.radio > 0 && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIcon}>
                        <use href={`${icons}#icon-radio`}></use>
                    </svg>
                    Radio
                </li>
            )}

            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIcon}>
                    <use href={`${icons}#icon-hob`}></use>
                </svg>
                {`${product.details.hob} hob`}
            </li>

            {product.details.bathroom > 0 && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIcon}>
                        <use href={`${icons}#icon-shower`}></use>
                    </svg>
                    {`${product.details.bathroom} ${product.details.bathroom > 1 ? 'bathrooms' : 'bathroom'}`}
                </li>
            )}

            {product.details.freezer > 0 && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIcon}>
                        <use href={`${icons}#icon-freezer`}></use>
                    </svg>
                    Freezer
                </li>
            )}
            {product.details.gas && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIconFill}>
                        <use href={`${icons}#icon-gas`}></use>
                    </svg>
                    Gas
                </li>
            )}

            {product.details.microwave > 0 && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIcon}>
                        <use href={`${icons}#icon-microwave`}></use>
                    </svg>
                    {`${product.details.microwave} ${product.details.microwave > 1 ? 'microwaves' : 'microwave'}`}
                </li>
            )}
            <li className={scss.categoriesItem}>
                <svg className={scss.categoriesItemIcon}>
                    <use href={`${icons}#icon-water`}></use>
                </svg>
                Water
            </li>
            {product.details.toilet > 0 && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIconFill}>
                        <use href={`${icons}#icon-toilet`}></use>
                    </svg>
                    Toilet
                </li>
            )}

            {product.details.shower > 0 && (
                <li className={scss.categoriesItem}>
                    <svg className={scss.categoriesItemIcon}>
                        <use href={`${icons}#icon-shower`}></use>
                    </svg>
                    Shower
                </li>
            )}
        </ul>
    );
};

export default Categories;
