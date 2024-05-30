import scss from './CustomButton.module.scss';

const CustomButton = ({ text, type, onClick }) => {
    return (
        <>
            <button
                type={type}
                className={scss.button}
                onClick={onClick ? onClick : () => {}}
            >
                {text}
            </button>
        </>
    );
};

export default CustomButton;
