import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__nav-list'>

                    <Link to='/' style={{textDecoration: 'none'}} className='header__logo-link'>
                        <img src={Logo} alt='Logo for away. Icon depicts a blue house with a smile' className='header__logo'/>
                    </Link>

                    <Link to='/listings' style={{textDecoration: 'none'}}>
                        <li className='header__nav-item'>Properties</li>
                    </Link>

                    <Link to='/login' style={{textDecoration: 'none'}}>
                        <li className='header__nav-item'>Profile</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;