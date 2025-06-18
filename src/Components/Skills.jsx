import { useEffect, useRef } from "react";
import gsap from "gsap";

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


  // Add more as needed
];

const Skills = () => {
  const containerRef = useRef(null);
  let oldX = 0, oldY = 0;

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      oldX = e.clientX;
      oldY = e.clientY;
    };

    container.addEventListener("mousemove", handleMouseMove);

    container.querySelectorAll(".media").forEach((media) => {
      const img = media.querySelector("img");

      media.addEventListener("mouseenter", (e) => {
        const deltaX = e.clientX - oldX;
        const deltaY = e.clientY - oldY;

        gsap.to(img, {
          x: deltaX * 3,
          y: deltaY * 3,
          rotate: (Math.random() - 0.5) * 30,
          yoyo: true,
          repeat: 1,
          duration: 0.4,
          ease: "power1.inOut",
        });

        gsap.to(img, {
          x: 0,
          y: 0,
          duration: 0.5,
          delay: 0.4,
        });
      });
    });

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full h-[70vh] bg-black text-white py-12 px-16"
      id="skills"
    >
      <div className="w-[90%]  bg-black-100 mx-auto">
        <h2 className="text-5xl font-mono mb-8">SKILLS</h2>
        <div className=" flex flex-wrap  gap-y-[7vh] gap-x-[7vh]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="media min-w-[150px] bg-white/35 p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300 flex flex-col items-center backddrop-blur-lg"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-35 h-25 object-contain mb-2 pointer-events-none"
              />
              <p className="text-sm font-medium text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
