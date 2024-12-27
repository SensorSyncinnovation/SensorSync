import React from 'react';
import { FaMicrochip, FaBrain, FaServer, FaCloud } from 'react-icons/fa';

const technologies = [
  { name: 'IoT', icon: <FaMicrochip className="text-4xl text-light" /> },
  { name: 'Machine Learning', icon: <FaBrain className="text-4xl text-light" /> },
  { name: 'Edge Computing', icon: <FaServer className="text-4xl text-light" /> },
  { name: 'Cloud Integration', icon: <FaCloud className="text-4xl text-light" /> },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 bg-background text-light">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-20 text-highlight">Technologies We Use</h2>
        <div className="flex space-x-6 px-6 justify-center flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="min-w-[150px] bg-light p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-500"
            >
              {/* Icon with 3D effect */}
              <div className="bg-gradient-to-br from-primary via-secondary to-highlight p-6 rounded-full shadow-xl absolute top-[-50px] left-1/2 transform -translate-x-1/2 transition-all duration-500 hover:scale-110 hover:shadow-2xl">
                {tech.icon}
              </div>
              <h3 className="text-lg font-medium mt-12 mb-4 text-dark">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;