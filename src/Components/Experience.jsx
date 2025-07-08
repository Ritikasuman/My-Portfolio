"use client"

import { useEffect, useRef, useState } from "react"
import Tilt from "react-parallax-tilt"

const experiences = [
  {
    title: "ReactJS Developer Intern | Vidhaalay Transforming Future LLP",
    duration: "2025 – Present",
    description:
      "Currently working as a ReactJS Developer Intern, contributing to frontend development and UI implementation using React and modern web technologies.",
    status: "current",
    tech: ["React", "JavaScript", "UI/UX"],
  },
  {
    title: "Intern | CodeUp",
    duration: "Aug 2024 – Mar 2025",
    description:
      "Contributed to Java and web-based projects. Took leadership roles in organizing team activities. Worked on the 'Mayur' outcome-based learning app as part of the frontend team.",
    status: "completed",
    tech: ["Java", "Frontend", "Leadership"],
  },
  {
    title: "RHSCA & Cloud Computing Trainee | Grras Solutions",
    duration: "Jul 2024 – Aug 2024",
    description:
      "Completed training with RedHat Global Certification. Gained hands-on experience with RedHat Linux, AWS basics, databases, containers, and DevOps tools through advanced project assignments.",
    status: "completed",
    tech: ["RedHat", "AWS", "DevOps", "Docker"],
  },
  {
    title: "Java Core Intern | Learn and Build",
    duration: "Aug 2023 – Sep 2023",
    description:
      "Completed a 15-day online internship focused on Java Core concepts. Gained experience in OOP and developed small-scale projects. Collaborated with mentors to enhance problem-solving skills.",
    status: "completed",
    tech: ["Java", "OOP", "Problem Solving"],
  },
]

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 border-t border-cyan-500/30 overflow-hidden"
      id="experience"
    >
    \
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full mix-blend-screen filter blur-xl opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-pulse delay-500"></div>
      </div> */}

      {/* Floating Particles */}
      {/* <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: "0 0 6px rgba(34, 211, 238, 0.6)",
            }}
          />
        ))}
      </div> */}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Enhanced Title */}
        <div className="text-center mb-20">
          <h2
            className={`text-7xl md:text-8xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.02em",
              // textShadow: "0 0 40px rgba(34, 211, 238, 0.3)",
              // filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.5))",
            }}
          >
            EXPERIENCE
          </h2>
          <div
            className={`w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.8)",
            }}
          />
          <p
            className={`text-gray-300 text-xl mt-6 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            A journey through innovation, growth, and technical excellence
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${index * 200 + 600}ms`,
                transform: `translateY(${index * 20}px)`,
              }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#22d3ee"
                glarePosition="all"
                scale={hoveredCard === index ? 1.08 : 1.02}
                transitionSpeed={800}
                className="h-full"
              >
                <div
                  className={`
                    relative p-8 h-full rounded-2xl transition-all duration-500 cursor-pointer
                    bg-white/10 backdrop-blur-xl border border-white/20
                    hover:border-cyan-400/60 hover:shadow-sm hover:shadow-cyan-500/20
                    ${hoveredCard === index ? "bg-white/15 border-cyan-400/80" : ""}
                  `}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background:
                      hoveredCard === index
                        ? "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(34,211,238,0.1) 50%, rgba(255,255,255,0.05) 100%)"
                        : "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(34,211,238,0.05) 50%, rgba(255,255,255,0.05) 100%)",
                    boxShadow:
                      hoveredCard === index
                        ? "0 25px 50px -12px rgba(34, 211, 238, 0.25), 0 0 0 1px rgba(34, 211, 238, 0.1)"
                        : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        exp.status === "current"
                          ? "bg-cyan-400 shadow-lg shadow-cyan-400/60 animate-pulse"
                          : "bg-white shadow-lg shadow-white/30"
                      }`}
                      style={{
                        boxShadow:
                          exp.status === "current"
                            ? "0 0 15px rgba(34, 211, 238, 0.8)"
                            : "0 0 10px rgba(255, 255, 255, 0.5)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight hover:text-cyan-200 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-200 font-medium text-sm tracking-wide">{exp.duration}</p>
                    </div>

                    <div className="border-t border-white/20 pt-4">
                      <p className="text-gray-300 leading-relaxed text-sm">{exp.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-white/10 text-cyan-200 rounded-full border border-cyan-400/30 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"
                          style={{
                            boxShadow: "0 0 10px rgba(34, 211, 238, 0.2)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: "linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                      filter: "blur(1px)",
                    }}
                  />

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-16 h-16 transition-opacity duration-500 ${
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: "linear-gradient(135deg, rgba(34,211,238,0.3) 0%, transparent 70%)",
                      clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
                    }}
                  />
                </div>
              </Tilt>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        {/* <div className="mt-20 text-center">
          <div
            className={`inline-flex items-center space-x-4 text-gray-400 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div> */}
            <span className="text-sm font-medium text-cyan-200">Continuously Growing</span>
            {/* <div className="w-12 h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent"></div>
          </div>
        </div> */}
      </div>

     
    </section>
  )
}

export default Experience
