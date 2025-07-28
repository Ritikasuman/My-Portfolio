import { useRef } from "react";
import SlideUpWrapper from "../Components/SlideUpWrapper";

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
    <SlideUpWrapper>
      <section
        ref={containerRef}
        className="w-full min-h-[70vh] text-white py-12 px-4 sm:px-8 md:px-20"
        id="skills"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-7xl font-mono font-bold text-white/80 tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              SKILLS
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-x-14 md:gap-y-16 place-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-full max-w-[150px] bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow flex flex-col items-center hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 object-contain mb-2 hover:scale-105 transition-transform duration-300"
                />
                <p className="text-sm font-medium text-white/80 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SlideUpWrapper>
  );
};

export default Skills;
