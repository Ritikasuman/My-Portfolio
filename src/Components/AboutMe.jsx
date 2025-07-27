const AboutMe = () => {
  return (
   <section
  id="about"
className="w-full mt-20  py-8 px-20 text-white bg-white/10 backdrop-blur-xl " 

           >

      <div className=" pr-10 pl-15 ">
        <h2 className="text-5xl font-mono mb-5">
         WHO I AM 
        </h2>
        <p className="text-xl text-gray-300 font-poppins leading-relaxed">
  Hi, I’m a computer science student exploring full-stack development. I enjoy crafting responsive UIs and am currently learning backend technologies like Node.js along with working on databases to build complete web apps.
</p>
<p className="text-xl font-poppins text-gray-300 leading-relaxed mt-2">
  My core strengths lie in problem-solving, programming, and strong fundamentals in OS and DBMS. I'm comfortable with Linux and value team collaboration, always aiming to improve through hands-on projects and real-world learning.
</p>

      </div>
    </section>
  );
};

export default AboutMe;
