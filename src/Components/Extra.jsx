const extras = [
  {
    title: "Tools & Platforms",
    description: "Comfortable with VS Code, Git & GitHub, Figma for basic design, and terminal-based workflows.",
  },
  {
    title: "Soft Skills",
    description: "Good at time management, learning independently, and approaching problems with a practical mindset.",
  },
  {
    title: "Certifications",
    description: "Completed online courses in HTML, CSS, JavaScript, and Git from platforms like freeCodeCamp and Coursera.",
  },
  {
    title: "Interests",
    description: "Interested in UI design, open-source contributions, and learning about system-level tools and commands in Linux.",
  },
];

const ExtraInfo = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16" id="extra-info">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Extra Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {extras.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
