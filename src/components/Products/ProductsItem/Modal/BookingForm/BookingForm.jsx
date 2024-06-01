import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import * as yup from 'yup';

import CustomButton from 'components/CustomButton';

import { icons } from 'assets/icons';

import scss from './BookingForm.module.scss';

const schema = yup
    .object({
        name: yup.string().required('Name is required'),
        email: yup
            .string()
            .required('Email is required')
            .matches(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid'),
        date: yup.string().required('Booking date is required'),
        comment: yup.string(),
    })
    .required();

const BookingForm = ({ product }) => {
    const today = Date.now();
    const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        data.date = format(data.date, 'dd.MM.yyyy');
        console.log({ ...data, van: product.name });
        window.location.reload();
    };

    const handleClick = () => {
        setIsOpenDatePicker(!isOpenDatePicker);
    };

    return (
        <section className={scss.section}>
            <div className={scss.info}>
                <h3 className={scss.title}>Book your campervan now</h3>
                <p className={scss.description}>
                    Stay connected! We are always ready to help you.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={scss.formWrapper}>
                    <div className={scss.wrapper}>
                        <input
                            {...register('name')}
                            type="text"
                            placeholder="Name"
                            className={scss.input}
                        />
                        <p className={scss.error}>{errors.name?.message}</p>
                    </div>

                    <div className={scss.wrapper}>
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email"
                            className={scss.input}
                        />
                        <p className={scss.error}>{errors.email?.message}</p>
                    </div>
                    <div className={scss.wrapper}>
                        <div className={scss.dateWrapper}>
                            <Controller
                                name="date"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <DatePicker
                                            {...field}
                                            selected={field.value}
                                            onChange={(date) =>
                                                field.onChange(date)
                                            }
                                            minDate={today}
                                            dateFormat="dd.MM.yyyy"
                                            className={scss.input}
                                            placeholderText="Booking date"
                                            inline={isOpenDatePicker}
                                        />

                                        <svg
                                            className={scss.dateIcon}
                                            onClick={handleClick}
                                        >
                                            <use
                                                href={`${icons}#icon-calendar`}
                                            ></use>
                                        </svg>
                                    </>
                                )}
                            />
                        </div>
                        <p className={scss.error}>{errors.date?.message}</p>
                    </div>
                    <div className={scss.wrapper}>
                        <textarea
                            {...register('comment')}
                            placeholder="Comment"
                            className={scss.textarea}
                        ></textarea>
                    </div>
                </div>

                <CustomButton type="submit" text="Send" />
            </form>
        </section>
    );
};

export default BookingForm;
