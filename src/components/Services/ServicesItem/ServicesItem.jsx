import { icons } from 'assets/icons';

import scss from './ServicesItem.module.scss';

const ServicesItem = ({ icon, title, description }) => {
    return (
        <li className={scss.item}>
            <div className={scss.wrapperIcon}>
                <svg className={scss.icon}>
                    <use href={`${icons}#icon-${icon}`}></use>
                </svg>
            </div>
            <h3 className={scss.cardTitle}>{title}</h3>
            <p className={scss.cardDescription}>{description}</p>
        </li>
    );
};

export default ServicesItem;
