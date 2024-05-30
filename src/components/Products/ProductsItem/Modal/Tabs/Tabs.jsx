import { useState } from 'react';

import Features from '../Features';
import Reviews from '../Reviews';

import scss from './Tabs.module.scss';

const Tabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState('Features');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <ul className={scss.list}>
                <li className={scss.item}>
                    <button
                        className={`${scss.button} ${activeTab === 'Features' ? scss.active : ''}`}
                        onClick={() => handleClick('Features')}
                    >
                        Features
                    </button>
                </li>
                <li className={scss.item}>
                    <button
                        className={`${scss.button} ${activeTab === 'Reviews' ? scss.active : ''}`}
                        onClick={() => handleClick('Reviews')}
                    >
                        Reviews
                    </button>
                </li>
            </ul>
            <div className={scss.content}>
                {activeTab === 'Features' && <Features product={product} />}
                {activeTab === 'Reviews' && <Reviews product={product} />}
            </div>
        </>
    );
};

export default Tabs;
