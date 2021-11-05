import './Header.css';
import MenuIcon from '../icons/menu.svg';

import React from 'react';

import HomeIcon from '../icons/home.svg';

import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            navigationShow: false
        }

        this.openNavigation = this.openNavigation.bind(this);
        this.closeNavigation = this.closeNavigation.bind(this);
    }

    openNavigation() {
        this.setState({navigationShow: true});
        console.log(this.navigationShow);
    }

    closeNavigation() {
        this.setState({navigationShow: false});
    }

    render() { 
        return (
            <header className="header">
                <a href="/">
                    <div className="header__logo">
                        <img className="header__logo-img" src={ HomeIcon } alt="logo" />
                        <span className="header__logo-text">LinkShortener.me</span>
                    </div>
                </a>
                <div onClick={ this.closeNavigation } className={`navigation__vignette ${ this.state.navigationShow ? '' : 'navigation__vignette--hidden'}`}></div>
                <nav className={`navigation ${ this.state.navigationShow ? '' : 'navigation--hidden' }`}>
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
                <button className="navigation__button" onClick={ this.openNavigation }>
                    <img src={ MenuIcon } alt="" />
                </button>
            </header>
        );
    }
}

export default Header;