const projects = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio built using React and Tailwind CSS to showcase my work and skills.",
    link: "#", // Replace with actual link
  },
  {
    name: "Mayur App",
    description:
      "Developed an outcome-based learning application as part of the frontend development team. Designed and built UI using React, HTML, CSS, and JavaScript. The app manages student input and provides macro/micro learning insights for teachers, sorted by recency.",
    link: "https://mayoor-web.vercel.app", // Update if hosted
  },
  {
    name: "Bank Management System",
    description:
      "Implemented in C++ using OOP. The project uses a Bank class for account handling with array-based data storage. Supports account creation, deposits, withdrawals, balance checks, and basic file I/O with console display management.",
    link: "https://github.com/Ritikasuman/Bank-management-system-", // Update if hosted
  },
  {
    name: "Car Rental Management System",
    description:
      "Basic learning project built using C++, OOP, and Data Structures. Features include file I/O, class inheritance, user validation with password protection, rental fee calculation, and system commands for screen control.",
    link: "https://github.com/Ritikasuman/Car-rental-project", // Update if hosted
  },
];


const Work = () => {
  return (
    <section className="w-full pb-20 pt-20 h-60vh" id="work">
      <div className=" mr-[6%] ml-[6%]">
         <div className="text-center mb-20">
          <h2
            className={`text-7xl md:text-7xl font-mono font-bold bg-gradient-to-r text-white/80 mb-6 `}
            style={{
              letterSpacing: "-0.02em",
            }}
          >
            PROJECTS
          </h2> </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl  p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition duration-300  flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
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
