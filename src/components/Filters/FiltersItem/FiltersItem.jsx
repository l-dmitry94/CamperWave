import scss from './FiltersItem.module.scss';

const FiltersItem = ({ title, data, component: Component, register }) => {
    return (
        <div className={scss.item}>
            <h3 className={scss.title}>{title}</h3>
            <ul className={scss.itemList}>
                {data.map((item, index) => (
                    <Component key={index} {...item} register={register} />
                ))}
            </ul>
        </div>
    );
};

export default FiltersItem;
