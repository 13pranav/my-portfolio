import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    year: "Feb 2024 - Aug 2024",
    company: "Kamjritztex IT Solution",
    role: "Junior Software Developer",
    icon: FaLaptopCode,
    description: "Actively contributed to the development of various Texsmartly modules, including  Event Calendar, Recruitment, Response Corner, Help Desk, CRM, and Bookkeeping. Leveraged Spring Boot and React.js with Tailwind CSS to craft robust, scalable applications, while implementing MongoDB for efficient database management."
  },
  {
    year: "Feb 2022 - Aug 2022",
    company: "Prutor IIT Kanpur",
    role: "Android Development",
    icon: FaMobileAlt,
    description: "Immersed in Android development using Core Java within Android Studio. Engineered responsive and innovative frontends, culminating in the creation of a feature-rich weather forecast application. Gained hands-on experience in mobile app architecture and UI/UX design principles."
  },
  {
    year: "Oct 2021 - Feb 2022",
    company: "Vishveshwarya Group of Institutions",
    role: "Java Certification Program",
    icon: FaGraduationCap,
    description: "Completed an intensive, industry-aligned Java certification program. Mastered core programming concepts, object-oriented principles, and practical application development techniques, laying a solid foundation for a career in software engineering."
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full md:w-1/4 mb-4 md:mb-0 text-center md:text-right">
                <p className="text-primary font-bold text-lg">{exp.year}</p>
              </div>
              <div className="w-full md:w-3/4 pl-0 md:pl-12 border-l-4 border-primary flex items-start">
                <div className="bg-primary p-3 rounded-full mr-4 flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
                  <exp.icon className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;