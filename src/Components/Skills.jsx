import { useRef } from "react";
import SlideUpWrapper from "../Components/SlideUpWrapper";

// ✅ Import images
import html from "../../assets/html.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import react from "../../assets/physics.png";
import tailwind from "../../assets/Tailwind.png";
import linux from "../../assets/linux.png";
import java from "../../assets/java.png";
import github from "../../assets/github.png";
import vscode from "../../assets/logo.png";
import c from "../../assets/letter-c.png";
import mysql from "../../assets/mysql.png";
import cpp from "../../assets/c-.png";

// ✅ Use imported images in array
const skills = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "React", img: react },
  { name: "Tailwind", img: tailwind },
  { name: "Linux", img: linux },
  { name: "Java", img: java },
  { name: "Github", img: github },
  { name: "Visual Studio", img: vscode },
  { name: "C", img: c },
  { name: "MySql", img: mysql },
  { name: "C++", img: cpp },
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
                  className="w-20 h-20 object-contain mb-2 hover:scale-120 transition-transform duration-300"
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
