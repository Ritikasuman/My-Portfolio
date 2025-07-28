"use client";

import SlideUpWrapper from "../Components/SlideUpWrapper";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS to showcase my work and skills.",
    link: "#",
  },
  {
    name: "Mayur App",
    description:
      "Developed an outcome-based learning application as part of the frontend development team. Designed and built UI using React, HTML, CSS, and JavaScript.",
    link: "https://mayoor-web.vercel.app",
  },
  {
    name: "Bank Management System",
    description:
      "Implemented in C++ using OOP. The project uses a Bank class for account handling with array-based data storage. Supports account creation, deposits, withdrawals, and file I/O.",
    link: "https://github.com/Ritikasuman/Bank-management-system-",
  },
  {
    name: "Car Rental Management System",
    description:
      "Basic learning project built using C++, OOP, and Data Structures. Includes rental fee calculation, user validation, and screen control via system commands.",
    link: "https://github.com/Ritikasuman/Car-rental-project",
  },
];

const Work = () => {
  return (
    <SlideUpWrapper>
      <section className="w-full py-24 px-4 sm:px-10" id="work">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-mono font-bold text-white/80">
              PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-xl p-6 rounded-xl hover:shadow-cyan-400/20 transition duration-300 transform hover:scale-105 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white bg-cyan-600 hover:bg-cyan-100 px-4 py-2 rounded-xl w-max"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SlideUpWrapper>
  );
};

export default Work;
