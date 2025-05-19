
import React, { useState } from 'react';
import { Shield, Menu, X, Home, Box, Camera, Award, MessageSquare, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // For home page, use hash links
  // For other pages, navigate to home with hash
  const getNavLink = (section: string) => {
    if (isHomePage) {
      return `#${section}`;
    }
    return `/#${section}`;
  };

  const navItems = [
    { name: "Beranda", href: "beranda", icon: <Home size={16} /> },
    { name: "Produk", href: "produk", icon: <Box size={16} /> },
    { name: "Fitur", href: "fitur", icon: <Camera size={16} /> },
    { name: "Keunggulan", href: "keunggulan", icon: <Award size={16} /> },
    { name: "Testimoni", href: "testimoni", icon: <MessageSquare size={16} /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="kitopanto-container py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-kitopanto-orange" />
              <span className="text-lg md:text-xl font-bold text-kitopanto-blue whitespace-nowrap">Kitopanto CCTV</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={getNavLink(item.href)} 
                className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors flex items-center"
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </a>
            ))}
            <div className="flex items-center space-x-3">
              <a href={getNavLink('kontak')} className="cta-button flex items-center">
                <Phone size={16} className="mr-1" />
                Hubungi Kami
              </a>
              <UserMenu />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <UserMenu />
            <button onClick={toggleMenu} className="p-1 text-kitopanto-blue focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={getNavLink(item.href)} 
                  className="text-kitopanto-darkGray hover:text-kitopanto-blue font-medium transition-colors flex items-center py-1"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>
              ))}
              <a 
                href={getNavLink('kontak')} 
                className="cta-button inline-flex items-center justify-center text-center py-2" 
                onClick={toggleMenu}
              >
                <Phone size={16} className="mr-1" />
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
