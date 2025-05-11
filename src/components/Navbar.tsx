
import React, { useState } from 'react';
import { Shield, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="kitopanto-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand name */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-kitopanto-orange" />
            <span className="text-xl font-bold text-kitopanto-blue">Kitopanto CCTV</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors">
              Beranda
            </a>
            <a href="#produk" className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors">
              Produk
            </a>
            <a href="#fitur" className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors">
              Fitur
            </a>
            <a href="#keunggulan" className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors">
              Keunggulan
            </a>
            <a href="#testimoni" className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors">
              Testimoni
            </a>
            <a href="#kontak" className="cta-button">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-kitopanto-blue focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#beranda" 
                className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors"
                onClick={toggleMenu}
              >
                Beranda
              </a>
              <a 
                href="#produk" 
                className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors"
                onClick={toggleMenu}
              >
                Produk
              </a>
              <a 
                href="#fitur" 
                className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors"
                onClick={toggleMenu}
              >
                Fitur
              </a>
              <a 
                href="#keunggulan" 
                className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors"
                onClick={toggleMenu}
              >
                Keunggulan
              </a>
              <a 
                href="#testimoni" 
                className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors"
                onClick={toggleMenu}
              >
                Testimoni
              </a>
              <a href="#kontak" className="cta-button inline-block text-center" onClick={toggleMenu}>
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
