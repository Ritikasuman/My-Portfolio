const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built using React and Tailwind CSS to showcase my work and skills.",
    link: "https://your-portfolio-link.com",
  },
  {
    name: "To-Do App",
    description: "A simple task management app made with React, including add, delete, and mark-complete features.",
    link: "https://your-todo-link.com",
  },
  {
    name: "Weather App",
    description: "A web app that fetches real-time weather data using a public API and displays it by city.",
    link: "https://your-weatherapp-link.com",
  },
  {
    name: "Login Page UI",
    description: "A responsive and clean login/signup interface designed using Tailwind CSS.",
    link: "https://your-login-ui-link.com",
  },
];

const Work = () => {
  return (
    <section className="w-full bg-black py-12 px-6 md:px-16" id="work">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-max"
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
