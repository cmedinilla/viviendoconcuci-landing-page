import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-lg font-bold text-gray-800">
          Viviendo con CUCI
        </div>

        {/* Phone Number */}
        <div className="hidden md:block text-gray-800">
          <a href="https://api.whatsapp.com/send?phone=523322726475"  target='_blank' rel="noreferrer" className="hover:text-orange-500 transition duration-300">
            +52 33-22-72-64-75
          </a>
        </div>

        <div>
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-white shadow-lg w-full">
            <div className="px-6 py-4">
              <a href="https://api.whatsapp.com/send?phone=523322726475" target='_blank' rel="noreferrer" className="block text-gray-800 hover:text-orange-500 transition duration-300 mb-4">
                +52 33-22-72-64-75
              </a>
              {/* Add more menu items here if needed */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
