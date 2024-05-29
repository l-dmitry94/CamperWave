import { icons } from 'assets/icons';

import scss from './Location.module.scss';

const Location = ({ register }) => {
    return (
        <div className={scss.inputWrapper}>
            <label htmlFor="location" className={scss.title}>
                Location
            </label>
            <div className={scss.locationWrapper}>
                <input
                    className={scss.location}
                    {...register('location')}
                    id="location"
                    placeholder="City"
                />
                <svg className={scss.locationIcon}>
                    <use href={`${icons}#icon-location`}></use>
                </svg>
            </div>
        </div>
    );
};

export default Location;
