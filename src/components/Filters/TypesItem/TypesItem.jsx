import { icons } from 'assets/icons';

import scss from './TypesItem.module.scss';

const TypesItem = ({ icon, title, backendName, register }) => {
    return (
        <div className={scss.itemRadio}>
            <input
                {...register('type')}
                type="radio"
                id={icon}
                value={backendName}
                className={`${scss.visuallyHidden} ${scss.itemInput}`}
            />
            <label htmlFor={icon} className={scss.itemLabel}>
                <svg className={scss.itemIcon}>
                    <use href={`${icons}#icon-${icon}`}></use>
                </svg>
                {title}
            </label>
        </div>
    );
};

export default TypesItem;
