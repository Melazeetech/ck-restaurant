import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Visibility', href: '#digital-visibility' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Location', href: '#location' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel py-4 shadow-xl shadow-black/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo & Branding */}
          <a href="#home" className="flex items-center gap-3 group">
            <Logo className="w-12 h-12 group-hover:scale-105 transition-transform" />
            <div className="hidden sm:flex flex-col border-l border-white/20 pl-3">
              <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                C.K RESTAURANT
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-brand-orange font-medium mt-1">
                & Fast Food
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-white hover:shadow-brand-orange/50 transition-colors relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Reservation CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#reservation"
              className="px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-brand-orange hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20"
            >
              Book A Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full glass-panel-light text-white hover:text-brand-orange transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#051020]/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-6 items-center text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif tracking-wide text-gray-300 hover:text-white"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="w-full max-w-xs mt-6 flex flex-col gap-4"
              >
                <a
                  href="#reservation"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 text-center rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold uppercase tracking-wider transition-all duration-300 border border-brand-orange shadow-lg shadow-brand-orange/20"
                >
                  Book A Table
                </a>
                <a
                  href="tel:+2348034364691"
                  className="w-full py-4 text-center rounded-full glass-panel text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  Call to Order
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
