// src/Components/AboutMe.jsx

const AboutMe = () => {
  return (
    <section className="w-full py-16 px-6 md:px-16" id="about">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-xl shadow-xl border border-white/30">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Hi, I’m Ritika Suman. I’m a fresher in the field of web development, currently learning and applying my skills through hands-on projects.
          I enjoy working on the front end and have been gradually building my understanding of how websites work—from layout and styling to basic interactivity.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
          I’m also comfortable using Linux, which helps me manage my workflow and understand development environments better.
          While I’m still learning, I try to approach each project as a chance to improve and explore new ideas. My goal is to keep building,
          keep experimenting, and eventually contribute to meaningful and unique solutions as I grow in this field.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
