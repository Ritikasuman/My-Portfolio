// src/Components/Intro.jsx
import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
const Intro = () => {
  return (
    <div
      className="flex h-[60vh] mt-15 mb-10 w-[90%] ml-[5%] rounded-xl mr-[3%]
           bg-zinc-500/10 text-white backdrop-blur-sm shadow-xl shadow-zinc-500/50"
    >
      <div className="left w-[55%] flex flex-col justify-center pr-10 pl-25 ">
        <h1 className="text-[7vh]  font-mono">Ritika Suman</h1>
        <h4 className="text-[5vh]  font-mono  ">FULL STACK DEVELOPER</h4>
        <p className="mt-4 text-xl font-mono font-thin mb-3 text-gray-300">
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
            {" "}
            <PiGithubLogoThin className="size-10 hover:text-cyan-400 " />
          </a>
          <a href="https://www.linkedin.com/in/ritikasuman/" alt="Linkedin">
            {" "}
            <PiLinkedinLogoThin className="size-10 hover:text-cyan-400 " />
          </a>
        </div>
      </div>

      <div className="right w-[45%] flex items-center justify-center">
        <div className="w-[60%] h-[80%] bg-[url('../../assets/ProfileImg.jpg')] bg-cover bg-center rounded-[20%] shadow-white-900"></div>
      </div>
    </div>
  );
};

export default Intro;
