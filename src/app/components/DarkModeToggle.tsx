"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
  
  useEffect(() => {
    // On initial mount, check system preference or localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                     (!('darkMode' in localStorage) && 
                     window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Don't render anything until we've determined the mode (to prevent flash)
  if (darkMode === undefined) return null;
  
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-[#1A1D32]/50 text-[#F5F7FA] hover:bg-[#1A1D32]/80 transition-all duration-300"
      whileHover={{ 
        scale: 1.1,
        boxShadow: '0 0 8px rgba(80, 196, 230, 0.5)'
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-[#50C4E6]" />
      ) : (
        <Moon className="w-5 h-5 text-[#50C4E6]" />
      )}
    </motion.button>
  );
} 