import React from 'react';
import { FaCode, FaMobileAlt, FaServer, FaChartLine, FaRocket, FaFile } from 'react-icons/fa';

const services = [
  { icon: FaCode, title: "Web Development", desc: "Custom websites using React JS, Tailwind CSS, and modern tools." },
  { icon: FaServer, title: "Backend Development", desc: "Efficient server-side logic with Java, Spring Boot, and MongoDB for database." },
  { icon: FaMobileAlt, title: "Mobile Apps", desc: "Develop Android apps using Java and Android Studio." },
  { icon: FaChartLine, title: "SEO Optimization", desc: "Create SEO-friendly websites to boost visibility and rankings." },
  { icon: FaRocket, title: "Fast Deployment", desc: "Rapid deployment with CI/CD pipelines, Docker, and automation." },
  { icon: FaFile, title: "Microsoft Office", desc: "Proficient in Excel, PowerPoint, and Word for diverse tasks." },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16">Specialization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <service.icon className="text-5xl text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;