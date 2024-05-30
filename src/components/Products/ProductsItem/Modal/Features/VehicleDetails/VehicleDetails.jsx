import transformString from 'helpers/transformForm';
import scss from './VehicleDetails.module.scss';

const VehicleDetails = ({ product }) => {
    const form = transformString(product.form);

    return (
        <div className={scss.details}>
            <h3 className={scss.title}>Vehicle details</h3>

            <div className={scss.detailsTable}>
                <div className={scss.item}>
                    <p className={scss.itemText}>Form</p>
                    <p className={scss.itemText}>{form}</p>
                </div>
                <div className={scss.item}>
                    <p className={scss.itemText}>Length</p>
                    <p className={scss.itemText}>{product.length}</p>
                </div>
                <div className={scss.item}>
                    <p className={scss.itemText}>Width</p>
                    <p className={scss.itemText}>{product.width}</p>
                </div>
                <div className={scss.item}>
                    <p className={scss.itemText}>Height</p>
                    <p className={scss.itemText}>{product.height}</p>
                </div>
                <div className={scss.item}>
                    <p className={scss.itemText}>Tank</p>
                    <p className={scss.itemText}>{product.tank}</p>
                </div>
                <div className={scss.item}>
                    <p className={scss.itemText}>Consumption</p>
                    <p className={scss.itemText}>{product.consumption}</p>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;
