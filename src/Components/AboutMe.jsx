import SlideUpWrapper from "../Components/SlideUpWrapper";

const AboutMe = () => {
  return (
    <SlideUpWrapper>
      <section
        id="about"
        className="w-full mt-20 py-8 px-6 sm:px-12 md:px-16 lg:px-20 text-white bg-white/10 backdrop-blur-xl"
      >
        <div className="pl-2 pr-4">
          <div className="mb-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-white/80 tracking-tight">
              WHO I M
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-poppins leading-relaxed">
            Hi, I’m a computer science student exploring full-stack development.
            I enjoy crafting responsive UIs and am currently learning backend
            technologies like Node.js along with working on databases to build
            complete web apps.
          </p>

          <p className="text-base sm:text-lg md:text-xl font-poppins text-gray-300 leading-relaxed mt-2">
            My core strengths lie in problem-solving, programming, and strong
            fundamentals in OS and DBMS. I'm comfortable with Linux and value
            team collaboration, always aiming to improve through hands-on
            projects and real-world learning.
          </p>
        </div>
      </section>
    </SlideUpWrapper>
  );
};

export default AboutMe;
