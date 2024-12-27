import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-light py-8 relative"
      style={{
        backgroundImage:
          'url(https://tnfsolutions.com/wp-content/uploads/2020/12/tnf-footer-768x356.jpg)', // Replace with your preferred image
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto relative text-center">
        {/* Title and Tagline */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-highlight">Stay Connected</h2>
          <p className="text-lg max-w-lg mx-auto text-light">
            Revolutionizing navigation through data-driven solutions. Stay updated on our journey.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
          <div>
            <h3 className="text-lg font-semibold text-light">Quick Links</h3>
            <ul className="space-y-4 mt-4">
              <li>
                <a href="#about" className="hover:text-highlight transition-all duration-200">About Us</a>
              </li>
              <li>
                <a href="#competencies" className="hover:text-highlight transition-all duration-200">Core Competencies</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-highlight transition-all duration-200">Technologies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-highlight transition-all duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold text-light">Follow Us</h3>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-highlight transition-all duration-200">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-highlight transition-all duration-200">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light hover:text-highlight transition-all duration-200">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold text-light">Subscribe</h3>
            <div className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-64 rounded-md text-dark outline-none focus:ring-2 focus:ring-highlight transition-all"
              />
              <button className="ml-4 px-6 py-2 bg-highlight text-light rounded-md hover:bg-cyan-500 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-light mt-8">
          <p>&copy; {new Date().getFullYear()} SensorSync. All Rights Reserved.</p>
          <p className="text-sm">
            <a href="#terms" className="hover:text-highlight transition-all duration-200">
              Terms & Conditions
            </a>{' '}
            |{' '}
            <a href="#privacy" className="hover:text-highlight transition-all duration-200">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;