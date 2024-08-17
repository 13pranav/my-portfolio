import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiMongodb, SiGithub, SiAndroidstudio, SiJenkins } from 'react-icons/si';
import { DiJava } from 'react-icons/di'; // Import Java icon from Developer Icons

const technologies = [
  { name: "React JS", icon: <FaReact className="text-blue-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" /> },
  { name: "Java", icon: <DiJava className="text-red-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" /> },
  { name: "GitHub", icon: <SiGithub className="text-black w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" /> },
  { name: "Android Studio", icon: <SiAndroidstudio className="text-green-700 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" /> },
  { name: "Jenkins Pipeline", icon: <SiJenkins className="text-blue-700 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" /> }
];

const Testimonials = () => {
  return (
    <section className="bg-primary text-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-4 sm:p-6 md:p-8 rounded-lg flex flex-col items-center justify-center transition transform hover:scale-105 hover:bg-opacity-20"
            >
              {tech.icon}
              <h4 className="mt-4 text-sm sm:text-base md:text-lg font-semibold text-center">{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
