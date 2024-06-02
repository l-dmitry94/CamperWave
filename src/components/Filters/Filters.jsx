import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Location from './Location';
import EquipmentsItem from './EquipmentsItem';
import TypesItem from './TypesItem';
import FiltersItem from './FiltersItem';
import CustomButton from 'components/CustomButton';

import equipments from './equipments.json';
import types from './types.json';
import { getFilteredProducts } from '../../redux/products/products-operations';
import { selectisEmptyResultFilter } from '../../redux/products/products-selectors';

import scss from './Filters.module.scss';

const schema = yup
    .object({
        location: yup.string(),
        equipments: yup.array().of(yup.string()),
        type: yup.string(),
    })
    .test(
        'at-least-one',
        'Either location, type must or equipments be provided',
        (value) => {
            return value.location || value.type || value.equipments.length > 0;
        }
    );

const Filters = () => {
    const isEmptyResultFilter = useSelector(selectisEmptyResultFilter);

    const defaultValues = {
        location: '',
        equipments: [],
        type: '',
    };
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        dispatch(getFilteredProducts(data));
        {
            !isEmptyResultFilter && reset();
        }
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
