import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="m-8 flex justify-between">
      <NavLink to="/">SHOP</NavLink>
      <nav className="justify-between items-center">
        <button type="button" onClick={() => setShow(!show)} className="text-3xl z-[10] absolute right-8 top-6 cursor-pointer">
          {show ? (
            <p>
              <GrClose />
            </p>
          ) : <FiMenu />}
        </button>

        <ul className={`md:flex h-screen justify-center text-xl text-center mt-9 items-center md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[9] left-0 w-full md:w-auto md:pl-0 p-9 transition-all duration-500 ease-in ${show ? 'top-0 ' : 'top-[-990px]'}`}>
          <NavLink onClick={() => setShow(!show)} className="block mt-5" to="/Jewelery">Jewelries</NavLink>
          <NavLink onClick={() => setShow(!show)} className="block mt-5" to="/men">Men</NavLink>
          <NavLink onClick={() => setShow(!show)} className="block mt-5" to="/Women">Women</NavLink>
          <NavLink onClick={() => setShow(!show)} className="block mt-5" to="/Electronics">Electronics</NavLink>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
