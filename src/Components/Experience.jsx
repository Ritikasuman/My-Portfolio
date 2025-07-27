"use client";

import Tilt from "react-parallax-tilt";

const experiences = [
  {
    title: "ReactJS Developer Intern | Vidhaalay Transforming Future LLP",
    duration: "2025 – Present",
    description:
      "Currently working as a ReactJS Developer Intern, contributing to frontend development and UI implementation using React and modern web technologies.",
    tech: ["React", "JavaScript", "UI/UX"],
  },
  {
    title: "Intern | CodeUp",
    duration: "Aug 2024 – Mar 2025",
    description:
      "Contributed to Java and web-based projects. Took leadership roles in organizing team activities. Worked on the 'Mayur' outcome-based learning app as part of the frontend team.",
    tech: ["Java", "Frontend", "Leadership"],
  },
  {
    title: "RHSCA & Cloud Computing Trainee | Grras Solutions",
    duration: "Jul 2024 – Aug 2024",
    description:
      "Completed training with RedHat Global Certification. Gained hands-on experience with RedHat Linux, AWS basics, databases, containers, and DevOps tools through advanced project assignments.",
    tech: ["RedHat", "AWS", "DevOps", "Docker"],
  },
  {
    title: "Java Core Intern | Learn and Build",
    duration: "Aug 2023 – Sep 2023",
    description:
      "Completed a 15-day online internship focused on Java Core concepts. Gained experience in OOP and developed small-scale projects. Collaborated with mentors to enhance problem-solving skills.",
    tech: ["Java", "OOP", "Problem Solving"],
  },
];

const Experience = () => {
  return (
    <section
      className="relative w-full h-[90vh] py-20 mb-10"
      id="experience"
    >
      <div className="" />
      <div className="ml-[6%] mr-[6%] ">
        {/* Title */}
        <div className="text-center mb-25">
          <h2 className="text-7xl md:text-7xl font-mono font-bold text-white/80 tracking-tight">
            EXPERIENCE
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid xl:grid-cols-4  gap-[5%] ">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="transition-all duration-700"
              style={{
                transform: `translateY(${index * 50}px)`,
                transitionDelay: `${index * 200 + 400}ms`,
              }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#22d3ee"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={800}
                className="h-full"
              >
                <div
                  className="relative p-8 h-full rounded-2xl transition-all duration-500 cursor-pointer
                    bg-white/10 backdrop-blur-xl border border-white/20
                    hover:border-cyan-400/60 hover:shadow-sm hover:shadow-cyan-500/10"
                >
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight ">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-200 font-medium text-sm tracking-wide">
                        {exp.duration}
                      </p>
                    </div>

                    <div className="border-t border-white/20 pt-4">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-white/10 text-cyan-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                 
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
