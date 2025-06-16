const skills = [
  { name: "HTML", img: "/skills/html.png" },
  { name: "CSS", img: "/skills/css.png" },
  { name: "JavaScript", img: "/skills/javascript.png" },
  { name: "React", img: "/skills/react.png" },
  { name: "Tailwind", img: "/skills/tailwind.png" },
  { name: "Linux", img: "/skills/linux.png" },
  // Add more as needed
];

const Skills = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Skills
        </h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="min-w-[120px] bg-gray-100 p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
