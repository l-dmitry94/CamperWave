import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import Location from './Location';
import EquipmentsItem from './EquipmentsItem';
import TypesItem from './TypesItem';
import FiltersItem from './FiltersItem';
import CustomButton from 'components/CustomButton';

import equipments from './equipments.json';
import types from './types.json';
import { setFilter } from '../../redux/filter/filter-slice';

import scss from './Filters.module.scss';

const Filters = () => {
    const defaultValues = {
        location: '',
        equipments: [equipments[0].title],
        type: '',
    };
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm({ defaultValues });

    const onSubmit = (data) => {
        dispatch(setFilter(data));
    };

    return (
        <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <Location register={register} />

            <div className={scss.wrapper}>
                <p className={scss.title}>Filters</p>
                <div className={scss.filtersWrapper}>
                    <FiltersItem
                        title="Vehicle equipment"
                        data={equipments}
                        component={EquipmentsItem}
                        register={register}
                    />

                    <FiltersItem
                        title="Vehicle type"
                        data={types}
                        component={TypesItem}
                        register={register}
                    />
                </div>
            </div>

            <CustomButton text="Search" type="submit" />
        </form>
    );
};

export default Filters;
