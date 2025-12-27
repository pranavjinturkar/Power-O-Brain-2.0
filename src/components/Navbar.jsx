import React, { useState, useEffect } from 'react';

import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-nunito font-extrabold text-2xl tracking-tight flex items-center gap-3">
              <img src={logo} alt="Power O Brain Logo" className="h-10 w-auto" />
              <span>
                <span className="text-[#009FE3]">Power</span> <span className="text-[#E60012]">O</span> <span className="text-[#8DC63F]">Brain</span>
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${scrolled ? 'text-gray-700 hover:text-brand-blue-600' : 'text-gray-800 hover:text-brand-blue-600'}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 hover:shadow-lg shadow-brand-yellow-200"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue-600 focus:outline-none bg-white/50 backdrop-blur-sm"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden glass-effect shadow-lg`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-brand-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-blue-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full text-center block bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-900 px-5 py-3 rounded-full text-base font-bold mt-4 shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
