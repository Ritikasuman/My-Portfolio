// src/Components/Intro.jsx
import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
const Intro = () => {
  return (

      <div className="flex h-[55vh] mt-10 mb-10 bg-black/100 w-[80%]  ml-30 rounded-xl  mb-10  text-white ">
       <div className="left w-[55%] flex flex-col justify-center pr-10  ">
        <h1 className="text-[6vh] font-['IBM Plex Mono'] text-white">
          Ritika Suman
        </h1>
        <p className="mt-4 text-base text-white">
          Hi, I’m Ritika Suman. I’m a fresher exploring web development and
          learning by building websites and small projects...
        </p>
       <div className="mt-6 flex gap-4">
         <a href="https://github.com/Ritikasuman" alt="Github"> <PiGithubLogoThin className="size-10 hover:text-cyan-400 " /></a>
         <a href="https://www.linkedin.com/in/ritikasuman/" alt="Linkedin" > <PiLinkedinLogoThin className="size-10 hover:text-cyan-400 " /></a>

        
      </div>
      </div>

      <div className="right w-[35%] flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-[url('../../assets/ProfileImg.jpg')] bg-cover bg-center rounded-full shadow-md border-4 border-white/50"></div>
      </div>
    </div>
  
  );
};

export default Intro;
