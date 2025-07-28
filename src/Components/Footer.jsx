import { PiGithubLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-cyan-300/20 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Ritika Suman. All rights reserved.</p>
        
        <div className="flex space-x-4">
       <a href="https://github.com/Ritikasuman" alt="Github">
                   <PiGithubLogoThin className="size-10 hover:text-cyan-400 " />
                 </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:underline">
          
          </a>
          <a href="https://www.linkedin.com/in/ritikasuman/" alt="Linkedin">
                      <PiLinkedinLogoThin className="size-10 hover:text-cyan-400 " />
                    </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
