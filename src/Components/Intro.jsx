import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion"; // ✅ Import motion

const Intro = () => {
  return (
    <div
      className="flex h-[60vh] mt-15 mb-10 w-[90%] ml-[5%] rounded-3xl mr-[3%]
           bg-neutral-500/10 text-white backdrop-blur-lg shadow-xl shadow-black-800/30 hover:scale-104 transition-transform duration-800"
    >
      {/* LEFT */}
      <div className="left w-[55%] flex flex-col justify-center pr-10 pl-16 ">
        <h1 className="text-[7vh] font-mono">Ritika Suman</h1>
        <h4 className="text-[5vh] font-mono text-cyan-300 ">
          FULL STACK DEVELOPER
        </h4>
        <p className="mt-4 text-xl font-poppins mb-3 text-gray-300">
          Hey, I’m Ritika Suman. I’m new to web development and learning through
          practice - building websites, exploring design ideas, and refining my
          approach with each project. I enjoy working with structure and
          creativity to bring clean, functional layouts to life.
        </p>
        <div className="flex items-center gap-1 text-lg mb-8">
          <CiLocationOn className="size-6 hover:text-red-400 " />
          <span>Jaipur</span>
        </div>

        <div className="mt-6 flex gap-4">
          <a href="https://github.com/Ritikasuman" alt="Github">
            <PiGithubLogoThin className="size-10 hover:text-cyan-400 " />
          </a>
          <a href="https://www.linkedin.com/in/ritikasuman/" alt="Linkedin">
            <PiLinkedinLogoThin className="size-10 hover:text-cyan-400 " />
          </a>
        </div>
      </div>

      {/* RIGHT — animated */}
      <motion.div
        className="ml-20 right w-[40%] h-full flex items-center justify-center"
        initial={{ y: 1000, opacity: 0 }} // ✅ Slide in from far right
        animate={{ y: 0, opacity: 1 }} // ✅ Ends at its original place
        transition={{ duration: 0.9, ease: "easeOut" }} // ✅ Smooth transition
      >
        <Tilt
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          glareEnable={true}
          glareMaxOpacity={0.0}
          scale={1.05}
          transitionSpeed={1000}
          className="w-[55%] h-[70%]"
        >
          <div className="w-full h-full bg-[url('../../assets/ProfileImg.jpg')] bg-cover bg-center rounded-[10%] hover:scale-110 transition-transform duration-300"></div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Intro;
