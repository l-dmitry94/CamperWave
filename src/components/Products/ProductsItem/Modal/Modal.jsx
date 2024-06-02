import ReactModal from 'react-modal';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import HeadModal from './HeadModal';
import Tabs from './Tabs';

import { icons } from 'assets/icons';

import scss from './Modal.module.scss';

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, onClose, product }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            closeTimeoutMS={200}
            overlayClassName={scss.overlay}
            className={scss.content}
        >
            <div className={scss.wrapper}>
                <div className={scss.head}>
                    <HeadModal product={product} />

                    <button className={scss.closeModal} onClick={onClose}>
                        <svg className={scss.closeModalIcon}>
                            <use href={`${icons}#icon-close`}></use>
                        </svg>
                    </button>
                </div>
                <SimpleBar className="react-simplebar">
                    <ul className={scss.gallery}>
                        {product.gallery.map((image, index) => (
                            <li key={index} className={scss.galleryItem}>
                                <img
                                    src={image}
                                    alt={product.name}
                                    className={scss.image}
                                />
                            </li>
                        ))}
                    </ul>

                    <p className={scss.description}>{product.description}</p>

                    <Tabs product={product} />
                </SimpleBar>
            </div>
        </ReactModal>
    );
};

export default Modal;
