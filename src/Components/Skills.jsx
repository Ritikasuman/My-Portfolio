import { useRef } from "react";

const skills = [
  { name: "HTML", img: "../../assets/html.png" },
  { name: "CSS", img: "../../assets/css-3.png" },
  { name: "JavaScript", img: "../../assets/js.png" },
  { name: "React", img: "../../assets/physics.png" },
  { name: "Tailwind", img: "../../assets/Tailwind.png" },
  { name: "Linux", img: "../../assets/linux.png" },
  { name: "Java", img: "../../assets/java.png" },
  { name: "Github", img: "../../assets/github.png" },
  { name: "Visual studio", img: "../../assets/logo.png" },
  { name: "C", img: "../../assets/letter-c.png" },
  { name: "MySql", img: "../../assets/mysql.png" },
  { name: "C++", img: "../../assets/c-.png" },
];

const Skills = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="w-full h-[70vh] text-white py-12 px-16"
      id="skills"
    >
      <div className="w-[90%] bg-black-100 mx-auto">
        <h2 className="text-5xl font-mono mb-8">SKILLS</h2>
        <div className="flex flex-wrap gap-y-[7vh] gap-x-[7vh]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="media min-w-[150px] bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow  flex flex-col items-center"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-35 h-25 object-contain mb-2 hover:scale-120 transition-transform duration-300"
              />
              <p className="text-sm font-medium text-white-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
