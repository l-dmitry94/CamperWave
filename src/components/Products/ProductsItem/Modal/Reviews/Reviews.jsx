import BookingForm from '../BookingForm';
import ReviewItem from './ReviewItem';

import scss from './Reviews.module.scss';

const Reviews = ({ product }) => {
    const { reviews } = product;

    return (
        <div className={scss.reviews}>
            <ul className={scss.reviewsList}>
                {reviews.map((review, index) => (
                    <ReviewItem key={index} {...review} />
                ))}
            </ul>
            <BookingForm product={product} />
        </div>
    );
};

export default Reviews;
