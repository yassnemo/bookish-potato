import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import ContrastToggle from "./ContrastToggle";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isHighContrast } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-3 ${
        scrolled ? 'bg-white/80 dark:bg-card/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
          Yassine.E
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <ContrastToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-foreground focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-card/90 backdrop-blur-md shadow-lg py-4 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={closeMobileMenu} className="nav-link py-2">About</a>
              <a href="#projects" onClick={closeMobileMenu} className="nav-link py-2">Projects</a>
              <a href="#skills" onClick={closeMobileMenu} className="nav-link py-2">Skills</a>
              <a href="#contact" onClick={closeMobileMenu} className="nav-link py-2">Contact</a>
              
              {/* Theme toggles (mobile) */}
              <div className="flex items-center justify-between py-2">
                <span>Dark Mode</span>
                <ThemeToggle />
              </div>
              
              <div className="flex items-center justify-between py-2">
                <span>High Contrast</span>
                <ContrastToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
