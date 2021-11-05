import './Header.css';
import HomeIcon from '../icons/home.svg';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <a href="/">
                <div className="header__logo">
                    <img className="header__logo-img" src={ HomeIcon } alt="logo" />
                    <span className="header__logo-text">LinkShortener.me</span>
                </div>
            </a>
            <nav className="navigation">
                <ul className="navigation__links">
                    <li className="navigation__link-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navigation__link-item">
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li className="navigation__link-item">
                        <Link to="/tos">ToS</Link>
                    </li>
                    <li className="navigation__link-item">
                        <Link className="btn btn--secondary" to="/sign-in">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;