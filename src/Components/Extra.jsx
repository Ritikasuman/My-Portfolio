const extras = [
  {
    title: "Event Head | MintCode",
    date: "2024 – Present",
    description:
      "Organized and currently managing technical events and workshops.",
    img: "🧠",
  },
  {
    title: "Placement Coordinator | Global Institute of Technology",
    date: "2022 – Present",
    description:
      "Helped in organizing events like hackathons, alumni sessions, and placement drives.",
    img: "🎯",
  },
  {
    title: "Debate | Inter-college Competition, Jaipur",
    date: "2022 – Present",
    description:
      "Represented college in debate competitions across Jaipur, enhancing communication and public speaking.",
    img: "🎤",
  },
  {
    title: "Certifications",
    description:
      "Completed online courses in HTML, CSS, JavaScript, and Git from platforms like freeCodeCamp and Coursera.",
    img: "📜",
  },
  {
    title: "Soft Skills",
    description:
      "Good at time management, learning independently, and approaching problems with a practical mindset.",
    img: "💡",
  },
];

const ExtraInfo = () => {
  return (
    <section className="w-full bg-black " id="extra-info">
      <div className="mr-[10%] ml-[7%] ">
        <h2 className="text-5xl font-mono text-white mb-8">
          More 
        </h2>
        <div className="flex  gap-6">
          {extras.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border-5 border-dotted-100 border-white/30 backdrop-blur-md text-white p-6 rounded-xl shadow hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{item.img}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {item.date && (
                    <p className="text-xs text-white/60">{item.date}</p>
                  )}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
