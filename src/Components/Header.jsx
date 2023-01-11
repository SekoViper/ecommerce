import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="m-8 flex justify-between">
      <nav className="justify-between items-center">
        <button type="button" onClick={() => setShow((prev) => !prev)}>
          <div className="h-1 w-8 bg-[gray] mt-1" />
          <div className="h-1 w-8 bg-[gray] mt-1" />
          <div className="h-1 w-8 bg-[gray] mt-1" />
        </button>
        {show && (
        <div className="flex gap-4 flex-col mt-6">
          <NavLink to="/Jewelery">Jewelries</NavLink>
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/Women">Women</NavLink>
          <NavLink to="/Electronics">Electronics</NavLink>
        </div>
        )}
      </nav>
      <NavLink to="/">SHOP</NavLink>
    </div>
  );
};

export default Header;
