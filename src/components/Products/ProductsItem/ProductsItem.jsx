import { useEffect, useState } from 'react';

import Head from './Head';
import Main from './Main';
import CustomButton from 'components/CustomButton';
import Modal from './Modal';

import scss from './ProductsItem.module.scss';

const ProductsItem = ({ product, label }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'auto';
    }, [isModalOpen]);

    return (
        <>
            <li className={scss.item}>
                <img
                    src={product.gallery[0]}
                    alt={product.name}
                    className={scss.image}
                />
                <div className={scss.info}>
                    <Head product={product} />

                    <Main product={product} label={label} />

                    <CustomButton
                        type="button"
                        text="Show more"
                        onClick={handleOpenModal}
                    />
                </div>
            </li>

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                productId={product._id}
                product={product}
            />
        </>
    );
};

export default ProductsItem;
