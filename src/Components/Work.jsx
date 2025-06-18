const projects = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS to showcase my work and skills.",
    link: "https://your-portfolio-link.com", // Replace with actual link
  },
  {
    name: "Mayur App",
    description:
      "Developed an outcome-based learning application as part of the frontend development team. Designed and built UI using React, HTML, CSS, and JavaScript. The app manages student input and provides macro/micro learning insights for teachers, sorted by recency.",
    link: "#", // Update if hosted
  },
  {
    name: "Bank Management System",
    description:
      "Mar 2023 – Implemented in C++ using OOP. The project uses a Bank class for account handling with array-based data storage. Supports account creation, deposits, withdrawals, balance checks, and basic file I/O with console display management.",
    link: "#", // Update if hosted
  },
  {
    name: "Car Rental Management System",
    description:
      "Feb 2023 – Built using C++, OOP, and Data Structures. Features include file I/O, class inheritance, user validation with password protection, rental fee calculation, and system commands for screen control.",
    link: "#", // Update if hosted
  },
];


const Work = () => {
  return (
    <section className="w-full bg-black pb-20 pt-20 h-60vh" id="work">
      <div className=" mr-[10%] ml-[8%]">
        <h2 className="text-5xl font-mono text-white mb-10">
        PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/35 backdrop-blur-lg p-6 rounded-xl  transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-thin text-gray-100 mb-2">{project.name}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-xl w-max"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
