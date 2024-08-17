import React, { useState } from 'react';
import portfolio from "../images/portfolio.png";
import event from "../images/event.png";
import bookkeeping from "../images/Bookkeeping.jpg";
import responseCorner from "../images/request corner.jpg";
import recruitment from "../images/JobRequisitions.jpg";
import website from "../images/website.png";

import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiSpringboot } from 'react-icons/si';

const projects = [
  { 
    title: "Portfolio", 
    image: portfolio,
    description: "A comprehensive personal portfolio website designed to showcase my projects, experience, and skills. This portfolio provides a detailed overview of my professional journey, including my specialized areas of expertise, significant projects, and key accomplishments. It also features sections on my hobbies and interests, offering a well-rounded view of my background and passions. The website serves as a dynamic platform to present my work and capabilities to potential clients and employers.",
    technologies: [
      { Icon: FaReact, color: '#61DAFB' },
      { Icon: SiTailwindcss, color: '#06B6D4' },
    ] // Pass the icon components without rendering them

  },  
  { 
    title: "Event Calendar", 
    image: event,
    description: "An interactive event calendar designed to manage and schedule various events and holidays. This application features a visually distinct calendar where working days are highlighted in green, Sundays in yellow, and holidays in red for easy identification. Built with React.js and styled using CSS, it utilizes the Ant Design library's Badge and Calendar components for an intuitive user experience. On the backend, the application is powered by Spring Boot and MongoDB, ensuring robust data management and seamless integration.",
    technologies: [
      { Icon: FaReact, color: '#61DAFB' },
      { Icon: SiTailwindcss, color: '#06B6D4' },
      { Icon: SiMongodb, color: '#47A248' },
      { Icon: SiSpringboot, color: '#6DB33F' }
    ] // Pass the icon components without rendering them

  },  
  { 
    title: "Bookkeeping", 
    image: bookkeeping,
    description: "A robust bookkeeping application designed to streamline financial management for businesses. It simplifies accounting tasks with features for invoicing, billing, expense tracking, and multi-currency support. Users can manage income and expenses efficiently and benefit from advanced data visualization through charts and graphs, offering clear insights into financial performance. Developed with React.js and styled with Tailwind CSS, it provides a modern and intuitive user interface.",
    technologies: [
      { Icon: FaReact, color: '#61DAFB' },
      { Icon: SiTailwindcss, color: '#06B6D4' },
      { Icon: SiMongodb, color: '#47A248' },
      { Icon: SiSpringboot, color: '#6DB33F' }
    ]  // Pass the icon components without rendering them

  },  
  { 
    title: "Response Corner", 
    image: responseCorner,
    description: "Developed an advanced 'Response Corner' module to enhance workplace practices through employee feedback. It enables the creation, distribution, and analysis of surveys, featuring visual feedback via speedometer graphs for clear score representation. The system includes automated email notifications to keep employees informed and engaged. Designed to improve communication and boost workplace morale, it facilitates continuous improvement in workplace practices.",
    technologies: [
      { Icon: FaReact, color: '#61DAFB' },
      { Icon: SiTailwindcss, color: '#06B6D4' },
      { Icon: SiMongodb, color: '#47A248' },
      { Icon: SiSpringboot, color: '#6DB33F' }
    ] // Pass the icon components without rendering them

  },
  { 
    title: "Recruitment", 
    image: recruitment,
    description: "An integrated recruitment system designed to streamline HR processes and enhance hiring efficiency. It supports managing job applications, showcasing openings, and scheduling interviews. Features include resume-based candidate shortlisting, interview management, and automated offer letter generation. This platform provides a smooth, organized workflow for HR teams to efficiently manage the recruitment process from application to offer.",
    technologies:  [
      { Icon: FaReact, color: '#61DAFB' },
      { Icon: SiTailwindcss, color: '#06B6D4' },
      { Icon: SiMongodb, color: '#47A248' },
      { Icon: SiSpringboot, color: '#6DB33F' }
    ]  // Pass the icon components without rendering them

  }
  ,
  { 
    title: "Texsmartly Website", 
    image: website,
    description: "",
    technologies: []  // Pass the icon components without rendering them

  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    if (project.title === "Texsmartly Website") {
      window.location.href = 'https://texsmartlywebapp.wn.r.appspot.com/';
    } else {
      setSelectedProject(project);
    }
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                <button
                  className="text-primary mt-2 inline-block"
                  onClick={() => openPopup(project)}
                >
                  View 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && selectedProject.title !== "Texsmartly Website" && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl p-6 sm:p-8 relative transform scale-95 transition-transform duration-300 ease-in-out">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl"
              onClick={closePopup}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full md:w-1/2 h-64 sm:h-72 object-cover rounded-lg"
              />
              <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-sm sm:text-lg text-gray-700">
                  {selectedProject.description}
                </p>

                <div className="flex space-x-2 mt-4">
                  {selectedProject.technologies.map((tech, idx) => (
                    <tech.Icon key={idx} className="text-3xl sm:text-4xl" color={tech.color} />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;