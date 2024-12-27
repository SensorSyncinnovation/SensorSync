import React from 'react';
import { FaPlug, FaBrain, FaServer } from 'react-icons/fa';

const competencies = [
  {
    title: 'IoT Integration',
    description: 'Real-time sensor data for precise navigation.',
    icon: <FaPlug className="text-4xl text-light" />, 
  },
  {
    title: 'AI-Powered Insights',
    description: 'Optimize routes with advanced machine learning.',
    icon: <FaBrain className="text-4xl text-light" />, 
  },
  {
    title: 'Edge Computing',
    description: 'Low-latency decision-making on the go.',
    icon: <FaServer className="text-4xl text-light" />, 
  },
];

const Competencies = () => {
  return (
    <section id="competencies" className="py-24 bg-background text-light">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-20 text-highlight mt-0">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {competencies.map((item, index) => (
            <div
              key={index}
              className="bg-light rounded-lg shadow-xl hover:shadow-2xl p-5 transition-shadow duration-300 transform  relative"
            >
              {/* Icon with 3D effect */}
              <div className="bg-gradient-to-br from-primary via-secondary to-highlight rounded-full absolute top-[-40px] left-1/2 transform -translate-x-1/2 shadow-xl hover:scale-105 p-5 text-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mt-12 mb-4 text-dark">{item.title}</h3>
              <p className="text-lg text-opacity-80 text-dark">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;