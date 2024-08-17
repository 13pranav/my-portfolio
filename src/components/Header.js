import React, { useState } from 'react';
import logo from "../images/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 md:h-16" /> {/* Adjusted logo size */}
          <a href="/" className="text-white text-lg md:text-xl font-bold">Pranav Kumar</a> {/* Adjusted font size */}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none focus:bg-gray-600 px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
          <button onClick={() => scrollToSection('about')} className="block lg:inline-block text-white hover:bg-gray-600 px-3 py-2 rounded-md">About</button>
          <button onClick={() => scrollToSection('services')} className="block lg:inline-block text-white hover:bg-gray-600 px-3 py-2 rounded-md">Specialization</button>
          <button onClick={() => scrollToSection('portfolio')} className="block lg:inline-block text-white hover:bg-gray-600 px-3 py-2 rounded-md">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="block lg:inline-block text-white hover:bg-gray-600 px-3 py-2 rounded-md">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
