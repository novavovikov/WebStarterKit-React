import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({}) => {
    return(
        <header className="header">
            <NavLink to="/" exact>Home </NavLink>
            <NavLink to="/about" exact>About</NavLink>
        </header>
    )
};

export default Header;