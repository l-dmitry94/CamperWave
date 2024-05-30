import BookingForm from '../BookingForm';
import Categories from './Categories';

import scss from './Features.module.scss';
import VehicleDetails from './VehicleDetails';

const Features = ({ product }) => {
    return (
        <div className={scss.features}>
            <div className={scss.info}>
                <Categories product={product} />
                <VehicleDetails product={product} />
            </div>

            <BookingForm product={product} />
        </div>
    );
};

export default Features;
