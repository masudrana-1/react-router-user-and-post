import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/post'>Post</Link>
                <Link to='/products'>Products</Link>
            </div>
            <p>Common header</p>
        </div>
    );
};

export default Header;