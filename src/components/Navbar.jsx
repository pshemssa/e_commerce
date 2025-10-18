import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => {
              onNavigate && onNavigate('home');
              setMobileMenuOpen(false);
            }}
          >
            TechStyle Store
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate && onNavigate(link.path)}
                className={`text-sm transition-colors ${
                  currentPage === link.path? 'text-blue-400 font-semibold' : 'text-gray-700'
                } hover:text-blue-400`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate && onNavigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-3 transition-colors ${
                  currentPage === link.path ? 'text-blue-400 font-semibold' : 'text-gray-700'
                } hover:text-blue-400`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;