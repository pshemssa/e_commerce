import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-cream-50 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink
            to="/"
            className="text-2xl md:text-3xl font-montserrat font-bold text-slate-800 hover:text-coral-500 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            TechStyle Store
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-poppins font-medium transition-colors duration-200 ${
                    isActive ? 'text-pink-400 font-semibold' : 'text-slate-800 hover:text-coral-500'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              className="p-2 text-slate-800 hover:text-coral-500 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-cream-50 border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block w-full text-left py-2 px-3 text-sm font-poppins font-medium transition-colors duration-200 ${
                  isActive ? 'text-pink-400 font-semibold' : 'text-slate-800 hover:text-coral-500'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;