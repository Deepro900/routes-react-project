import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : 'undefine'} to='/home'>Home</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/products'>products</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
            </nav>
            <p>common header</p>
        </div>
    );
};

export default Header;