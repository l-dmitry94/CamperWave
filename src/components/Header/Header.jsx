import { Link } from 'react-router-dom';

import Container from 'components/Container';
import Menu from './Menu';

import { logo } from 'assets/images';

import scss from './Header.module.scss';

const Header = () => {
    const menu = [
        { item: 'Home', path: '/' },
        { item: 'Catalog', path: '/catalog' },
        { item: 'Favorites', path: '/favorites' },
    ];

    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <Link to="/">
                        <img
                            className={scss.logo}
                            src={logo}
                            alt="Camper Wave"
                        />
                    </Link>

                    <Menu items={menu} />
                </div>
            </Container>
        </header>
    );
};

export default Header;
