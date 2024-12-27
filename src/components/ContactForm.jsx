import React, { useState } from 'react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); 
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-secondary to-highlight text-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 to-cyan-500 opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-highlight">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-light text-dark shadow-lg focus:outline-none focus:ring-4 focus:ring-highlight focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-light text-dark shadow-lg focus:outline-none focus:ring-4 focus:ring-highlight focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full p-4 h-36 rounded-lg bg-light text-dark shadow-lg focus:outline-none focus:ring-4 focus:ring-highlight focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
              required
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-highlight px-8 py-3 text-light font-medium rounded-lg shadow-xl transform transition-all duration-500 hover:bg-cyan-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-highlight focus:ring-opacity-50"
            >
              Send Message
            </button>
          </div>
        </form>
        
        {/* Confirmation Message */}
        {isSubmitted && (
          <div className="mt-8 text-xl text-green-500">
            <p>Your message has been sent! We'll get back to you soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;