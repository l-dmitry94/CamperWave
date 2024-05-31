import nameLetter from 'helpers/nameLetter';
import filledStars from './FilledStars';

import scss from './ReviewItem.module.scss';

const ReviewItem = ({ reviewer_name, reviewer_rating, comment }) => {
    return (
        <li className={scss.item}>
            <div className={scss.head}>
                <div className={scss.letterWrapper}>
                    {nameLetter(reviewer_name)}
                </div>
                <div className={scss.headInfo}>
                    <h4 className={scss.name}>{reviewer_name}</h4>
                    {filledStars(reviewer_rating, scss)}
                </div>
            </div>

            <p className={scss.comment}>{comment}</p>
        </li>
    );
};

export default ReviewItem;
