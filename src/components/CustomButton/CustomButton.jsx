import scss from './CustomButton.module.scss';

const CustomButton = ({ text, type }) => {
    return (
        <button type={type} className={scss.button}>
            {text}
        </button>
    );
};

export default CustomButton;
