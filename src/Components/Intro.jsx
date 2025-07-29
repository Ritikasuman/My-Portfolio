import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SlideUpWrapper from "../Components/SlideUpWrapper";
import ProfileImg from "../../assets/ProfileImg2.jpg"; // ✅ Import image from src/assets

const Intro = () => {
  return (
    <SlideUpWrapper>
      <div
        className="flex flex-col lg:flex-row h-auto lg:h-[60vh] mt-10 mb-10 w-[90%] mx-auto rounded-3xl 
        bg-gray-600/10 backdrop-blur-lg text-white shadow-xl shadow-black-800/30 
        hover:scale-[1.01] transition-transform duration-800"
      >
        {/* LEFT */}
        <div className="w-full lg:w-[65%] flex flex-col justify-center p-6 lg:pl-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[7vh] font-mono">
            Ritika Suman
          </h1>
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-[5vh] font-mono text-cyan-200 mt-2">
            FULL STACK DEVELOPER
          </h4>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-poppins mb-3 text-gray-300">
            Hey, I’m Ritika Suman. I enjoy building websites, exploring design
            ideas, and refining my approach with each project — working with
            structure and creativity to bring clean, functional layouts to life.
          </p>
          <div className="flex items-center gap-2 text-base md:text-lg mb-6">
            <CiLocationOn className="size-6 hover:text-red-400" />
            <span>Jaipur</span>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Ritikasuman" alt="Github">
              <PiGithubLogoThin className="size-8 sm:size-10 hover:text-cyan-400" />
            </a>
            <a href="https://www.linkedin.com/in/ritikasuman/" alt="Linkedin">
              <PiLinkedinLogoThin className="size-8 sm:size-10 hover:text-cyan-400" />
            </a>
          </div>
        </div>

        {/* RIGHT — imported image */}
        <motion.div
          className="w-full lg:w-[35%] flex items-center justify-center mt-5 lg:mt-0 mb-10 lg:mb-0"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            glareEnable={true}
            glareMaxOpacity={0.0}
            scale={1.05}
            transitionSpeed={1000}
            className="w-[70%] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[80%]"
          >
            <img
              src={ProfileImg}
              alt="Ritika Suman"
              className="w-full h-full object-cover rounded-[5%] hover:scale-105 transition-transform duration-300"
            />
          </Tilt>
        </motion.div>
      </div>
    </SlideUpWrapper>
  );
};

export default Intro;
