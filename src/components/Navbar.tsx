import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-3' 
        : 'bg-transparent py-4 sm:py-5 md:py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center md:flex-grow-0 flex-grow justify-center md:justify-start">
            <a href="#" className="md:ml-0 mx-auto md:mx-0">
              <img 
                src="/assets/images/4.png" 
                alt="Logo" 
                className="h-20 sm:h-24 md:h-20 transition-all duration-300" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#accueil" className={`text-sm lg:text-base ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-400 transition-colors`}>Accueil</a>
            <a href="#services" className={`text-sm lg:text-base ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-400 transition-colors`}>Services</a>
            <a href="#specialites" className={`text-sm lg:text-base ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-400 transition-colors`}>Spécialités</a>
            <a href="#apropos" className={`text-sm lg:text-base ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-400 transition-colors`}>À Propos</a>
            <a href="#temoignages" className={`text-sm lg:text-base ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-400 transition-colors`}>Témoignages</a>
            <a href="#blog" className={`text-sm lg:text-base ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-400 transition-colors`}>Blog</a>
            <a href="#contact" className={`text-sm lg:text-base ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-amber-400 transition-colors`}>Contact</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+212600000000" 
              className="flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-amber-700 text-white text-sm lg:text-base rounded hover:bg-amber-800 transition-colors"
            >
              <Phone size={16} className="mr-1 lg:mr-2" />
              <span className="hidden lg:inline">+212 604 665 016</span>
              <span className="lg:hidden">Appeler</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4 flex items-center">
            {/* Menu Toggle */}
            <button 
              className={`${scrolled ? 'text-gray-700' : 'text-white'} focus:outline-none`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3 py-4">
          <a href="#accueil" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#services" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#specialites" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Spécialités</a>
          <a href="#apropos" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>À Propos</a>
          <a href="#temoignages" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Témoignages</a>
          <a href="#blog" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#contact" className="text-gray-800 py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Contact</a>
          <a 
            href="tel:+212600000000" 
            className="flex items-center justify-center px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} className="mr-2" />
            <span>+212 604 665 016</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;