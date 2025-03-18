"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/contact', label: 'Contact' }
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-[#102A43]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <motion.span 
                className="text-2xl font-bold text-[#F5F7FA] group-hover:text-[#33C5E5] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#33C5E5]">{'{'}</span>
                dev.talk
                <span className="text-[#33C5E5]">{'}'}</span>
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`relative inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#50C4E6]' 
                      : 'text-[#C0C4D6] hover:text-[#33C5E5]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-[#50C4E6]"
                      layoutId="navbar-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            
            {/* Desktop Ticket Button */}
            <div className="hidden sm:block">
              <Link 
                href="/tickets" 
                className="bg-[#FF6B35] hover:brightness-110 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                GET A TICKET
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              className="sm:hidden p-2 rounded-full bg-[#1A1D32]/50 text-[#F5F7FA] hover:bg-[#1A1D32]/80 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#50C4E6]" />
              ) : (
                <Menu className="w-6 h-6 text-[#50C4E6]" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-[#102A43]/95 backdrop-blur-md border-t border-[#FFFFFF10]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link 
                      href={link.href} 
                      className={`block py-2 text-base font-medium ${
                        isActive 
                          ? 'text-[#50C4E6]' 
                          : 'text-[#C0C4D6] hover:text-[#33C5E5]'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile Ticket Button */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="pt-4"
              >
                <Link 
                  href="/tickets" 
                  className="block w-full bg-[#FF6B35] hover:brightness-110 text-white font-medium py-3 px-6 rounded-lg text-center transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GET A TICKET
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}