import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-light text-dark">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          SensorSync is an innovative startup redefining real-time navigation and road quality assessment. 
          Leveraging IoT, AI, and edge computing, we bridge gaps in navigation platforms with vehicle-specific 
          guidance and real-time insights, enhancing safety, efficiency, and sustainability in urban transportation.
        </p>
      </div>
    </section>
  );
};

export default About;