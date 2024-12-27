import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="logo.png" 
            alt="SensorSync Logo"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-3xl font-bold text-light hover:text-highlight transition-colors duration-300">
            SensorSync
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#about"
            className="relative text-light hover:text-highlight transition-colors duration-300 text-xl"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-highlight transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#competencies"
            className="relative text-light hover:text-highlight transition-colors duration-300 text-xl"
          >
            Core Competencies
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-highlight transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#technologies"
            className="relative text-light hover:text-highlight transition-colors duration-300 text-xl"
          >
            Technologies
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-highlight transition-all duration-300 hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative text-light hover:text-highlight transition-colors duration-300 text-xl"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-highlight transition-all duration-300 hover:w-full"></span>
          </a>

          {/* Call-to-Action Button */}
          <a
            href="#get-started"
            className="px-6 py-3 bg-highlight text-light rounded-lg shadow-md hover:bg-cyan-500 transition-all duration-300"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3 6h14M3 10h14M3 14h14" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-light shadow-lg">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <img
                src="/assets/logo.svg" // Replace with your logo path
                alt="SensorSync Logo"
                className="w-10 h-10 mr-2"
              />
              <h1 className="text-2xl font-bold text-light">SensorSync</h1>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-light hover:text-highlight"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 6L14 14M6 14L14 6" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-4">
            <a
              href="#about"
              className="hover:text-highlight transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#competencies"
              className="hover:text-highlight transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Core Competencies
            </a>
            <a
              href="#technologies"
              className="hover:text-highlight transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </a>
            <a
              href="#contact"
              className="hover:text-highlight transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#get-started"
              className="px-6 py-3 bg-highlight text-light rounded-lg shadow-md hover:bg-cyan-500 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;