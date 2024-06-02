import { icons } from 'assets/icons';

import scss from './EquipmentsItem.module.scss';

const EquipmentsItem = ({ icon, title, backendName, register }) => {
    return (
        <div className={scss.itemCheckbox}>
            <input
                {...register('equipments')}
                type="checkbox"
                id={icon}
                value={backendName}
                className={`${scss.visuallyHidden} ${scss.itemInput}`}
            />
            <label htmlFor={icon} className={scss.itemLabel}>
                <svg
                    className={`${scss.itemIcon} ${title === 'AC' && scss.itemIconFill}`}
                >
                    <use href={`${icons}#icon-${icon}`}></use>
                </svg>
                {title}
            </label>
        </div>
    );
};

export default EquipmentsItem;
