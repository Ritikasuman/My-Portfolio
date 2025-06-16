const experiences = [
  {
    title: "Web Development Practice",
    duration: "2024 - Present",
    description: "Building websites to improve my skills in HTML, CSS, JavaScript, and React.",
  },
  {
    title: "Linux Familiarity",
    duration: "2024 - Present",
    description: "Using Linux for development, terminal commands, and workflow efficiency.",
  },
  {
    title: "Responsive Design Learning",
    duration: "2024 - Present",
    description: "Creating responsive layouts using Tailwind CSS and mobile-first design.",
  },
  {
    title: "Hands-on Projects",
    duration: "2024 - Present",
    description: "Applying what I learn by creating personal projects and small applications.",
  },
];

const Experience = () => {
  return (
    <section className="w-auto bg-gray-50 py-12 px-6 md:px-16" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-gray-700 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
