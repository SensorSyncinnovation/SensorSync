import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import Technologies from './components/Technologies';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-background text-dark font-sans">
      <Header />
      <Hero />
      <About />
      <Competencies />
      <Technologies />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;