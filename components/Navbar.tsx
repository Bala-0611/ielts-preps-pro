
import React, { useState } from 'react';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">
          IELTS Prep Pro
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-600 hover:text-primary transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a
            href="#signup"
            className="bg-accent text-white px-5 py-2 rounded-md font-semibold hover:bg-accent-hover transition-colors duration-300 shadow-sm"
          >
            Start Free Trial
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-600 hover:text-primary transition-colors duration-300 text-lg" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href="#signup"
              className="bg-accent text-white w-full text-center px-5 py-3 rounded-md font-semibold hover:bg-accent-hover transition-colors duration-300 shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
