
import React, { useState } from 'react';
import { Menu, X, Home, Box, Camera, Award, MessageSquare, Phone } from "lucide-react";
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

  const getNavLink = (section: string) => {
    if (isHomePage) {
      return `#${section}`;
    }
    return `/#${section}`;
  };

  const navItems = [
    { name: "Beranda", href: "beranda", icon: <Home size={16} /> },
    { name: "Produk", href: "produk", icon: <Box size={16} /> },
    { name: "Konsultasi", href: "konsultasi", icon: <MessageSquare size={16} /> },
    { name: "Kontak", href: "kontak", icon: <Phone size={16} /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="kitopanto-container py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/src/EmasHijra_20250524_191024_0000.svg" 
                alt="Kitopanto Logo" 
                className="h-8 w-auto md:h-10"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={getNavLink(item.href)} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center"
              >
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </a>
            ))}
            <div className="flex items-center space-x-3">
              <UserMenu />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <UserMenu />
            <button onClick={toggleMenu} className="p-1 text-blue-600 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={getNavLink(item.href)} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center py-1"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
