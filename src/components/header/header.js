import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <h1 className='logo-container'>Guest Book</h1>
        </Link>
        <div className="options">
            <Link className="option" to="/signin">Sign In</Link>
        </div>
    </div>
);

export default Header;