import { icons } from 'assets/icons';

const FilledStars = (rating, scss) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        const starElement = (
            <li key={i} className={scss.star}>
                <svg
                    className={`${scss.starIcon} ${rating > i && scss.starFilled}`}
                >
                    <use href={`${icons}#icon-star`}></use>
                </svg>
            </li>
        );
        stars.push(starElement);
    }
    return <ul className={scss.rating}>{stars}</ul>;
};

export default FilledStars;
