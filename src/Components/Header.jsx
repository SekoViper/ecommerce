import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  console.log('header');
  return (
    <div className="m-8">
      <nav className="flex justify-between items-center">
        <NavLink to="/">SHOP</NavLink>
        <NavLink to="/Jewelery">Jewelries</NavLink>
      </nav>
    </div>
  );
};

export default Header;
