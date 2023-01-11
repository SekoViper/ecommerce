import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  console.log('header');
  return (
    <div className="m-8">
      <nav className="flex justify-between items-center">
        <NavLink to="/">SHOP</NavLink>
        <div className="flex gap-4">
          <NavLink to="/Jewelery">Jewelries</NavLink>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/Women">Women</NavLink>
          <NavLink to="/Electronics">Electronics</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
