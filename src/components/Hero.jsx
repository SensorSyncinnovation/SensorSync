import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    
    const initialParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 30 + 1,
      baseX: Math.random() * window.innerWidth,
      baseY: Math.random() * window.innerHeight,
    }));
    setParticles(initialParticles);

    let animationFrameId;
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let newX = particle.x;
          let newY = particle.y;
          
          if (distance < 120) {
            
            const repelStrength = (120 - distance) / 120 * 0.15; 
            newX = particle.x - (dx / distance) * repelStrength;
            newY = particle.y - (dy / distance) * repelStrength;
          } else {
            
            newX += (particle.baseX - newX) * 0.02;
            newY += (particle.baseY - newY) * 0.02;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative py-36 lg:py-48 text-light overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500" />
      
      {/* Particle Effect */}
      <ParticleBackground />
      
      {/* Content Container */}
      <div className="container relative mx-auto flex flex-col lg:flex-row items-center justify-between px-6 z-10">
        {/* Left Side Text Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6 md:mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Revolutionizing Navigation with SensorSync
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 ml-0 mx-auto max-w-2xl text-white opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Combining IoT, AI, and advanced frameworks to deliver real-time road quality assessments and navigation solutions.
          </motion.p>
          <motion.a
            href="#contact"
            className="mt-8 inline-block px-8 py-4 bg-safety text-light font-medium rounded-lg shadow-md hover:bg-green-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              Contact Us
              <motion.span 
                className="ml-3 text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        {/* Right Side Image */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.img
            src="self-driving-car-concept-illustration_114360-14315.jpg"
            alt="SensorSync Navigation"
            className="w-full h-auto object-contain shadow-lg rounded-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;