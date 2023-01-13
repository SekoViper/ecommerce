import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { FiMenu } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../Redux/ProductSlice';

const Header = () => {
  const dispatch = useDispatch(searchProduct);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="m-8 flex justify-between items-center">
        <NavLink to="/">SHOP</NavLink>
        <form className="w-full px-8 lg:px-28">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Search..."
              required
              onChange={(e) => { dispatch(searchProduct(e.target.value)); }}
            />
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </form>
        <nav className="justify-between items-center ml-5">
          <button type="button" onClick={() => setShow(!show)} className="text-3xl z-[10] absolute right-8 top-6 cursor-pointer">
            {show ? (
              <p>
                <GrClose />
              </p>
            ) : <p className="pt-2.5"><FiMenu /></p>}
          </button>

          <ul className={`md:flex h-screen justify-center text-xl text-center items-center md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[9] left-0 w-full md:w-auto md:pl-0 p-9 transition-all lg:hidden duration-500 ease-in ${show ? 'top-0 ' : 'top-[-990px]'}`}>
            <NavLink onClick={() => setShow(!show)} className="block mt-5" to="/Jewelery">Jewelries</NavLink>
            <NavLink onClick={() => setShow(!show)} className="block mt-5" to="/men">Men</NavLink>
            <NavLink onClick={() => setShow(!show)} className="block mt-5" to="/Women">Women</NavLink>
            <NavLink onClick={() => setShow(!show)} className="block mt-5" to="/Electronics">Electronics</NavLink>
          </ul>
        </nav>
      </div>

    </>
  );
};

export default Header;
