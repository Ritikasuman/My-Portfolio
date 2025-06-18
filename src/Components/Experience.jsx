const experiences = [
  {
    title: "ReactJS Developer Intern | Vidhaalay Transforming Future LLP",
    duration: "2025 – Present",
    description:
      "Currently working as a ReactJS Developer Intern, contributing to frontend development and UI implementation using React and modern web technologies.",
  },
  {
    title: "Intern | CodeUp",
    duration: "Aug 2024 – Mar 2025",
    description:
      "Contributed to Java and web-based projects. Took leadership roles in organizing team activities. Worked on the 'Mayur' outcome-based learning app as part of the frontend team.",
  },
  {
    title: "RHSCA & Cloud Computing Trainee | Grras Solutions",
    duration: "Jul 2024 – Aug 2024",
    description:
      "Completed training with RedHat Global Certification. Gained hands-on experience with RedHat Linux, AWS basics, databases, containers, and DevOps tools through advanced project assignments.",
  },
  {
    title: "Java Core Intern | Learn and Build",
    duration: "Aug 2023 – Sep 2023",
    description:
      "Completed a 15-day online internship focused on Java Core concepts. Gained experience in OOP and developed small-scale projects. Collaborated with mentors to enhance problem-solving skills.",
  },
];


const Experience = () => {
  return (
    <section className="w-full bg-black py-12 border-t border-white h-[85vh] " id="experience">
      <div className="mr-[10%] ml-[8%] space-x-10">
        <h2 className="text-5xl text-white font-mono mb-10">
          EXPERIENCE
        </h2>
        <div className="bg-[url('../../assets/vedio.png')] flex gap-10">
         {experiences.map((exp, index) => (
  <div
    key={index}
    style={{ transform: `translateY(${index * 60}px)` }} // each card shifts down 20px more
    className=" p-6 rounded-xl  bg-white/35 backdrop-blur-lg hover:scale-110 transition-transform duration-300 w-[30%]"
  >
    <h3 className="text-3xl font-popins font-thin text-white">{exp.title}</h3>
    <p className="font-popins font-thin text-gray-200 mb-2">{exp.duration}</p>
    <p className="font-popins font text-gray-200  border-t border-solid border-gray-300 pt-4 mt-4">{exp.description}</p>
  </div>
))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
