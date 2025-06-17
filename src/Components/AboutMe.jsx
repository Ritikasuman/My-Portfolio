const AboutMe = () => {
  return (
   <section
  id="about"
className="w-full mt-20  py-8 px-20 text-white bg-white/18 backdrop-blur-lg "

           >

      <div className=" pr-10 pl-15 ">
        <h2 className="text-4xl font-mono mb-5">
         Who I Am
        </h2>
        <p className="text-xl text-gray-300 font-poppins font-thin leading-relaxed">
           Hi, I’m a fresher in the field of web development, currently learning and applying my skills through hands-on projects.
          I enjoy working on the front end and have been gradually building my understanding of how websites work—from layout and styling to basic interactivity.
        </p>
        <p className="text-xl font-poppins  text-gray-300 font-thin leading-relaxed mt-2">
          I’m also comfortable using Linux, which helps me manage my workflow and understand development environments better.
          While I’m still learning, I try to approach each project as a chance to improve and explore new ideas. My goal is to keep building,
          keep experimenting, and eventually contribute to meaningful and unique solutions as I grow in this field.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
