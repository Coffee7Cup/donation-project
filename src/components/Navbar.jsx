import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md text-xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2   B">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MyLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Mission</a>
            <a href="#Donate" className="text-gray-700 hover:text-blue-600 font-medium">Donate</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">conatct</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-4 pb-4 space-y-2 flex flex-col"
          >
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Mission</a>
            <a href="#Donate" className="text-gray-700 hover:text-blue-600 font-medium">Donate</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">conatct</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
