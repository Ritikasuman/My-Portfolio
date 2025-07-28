import { PiGithubLogoThin, PiLinkedinLogoThin } from "react-icons/pi";
import SlideUpWrapper from "../Components/SlideUpWrapper";

const Footer = () => {
  return (
    <SlideUpWrapper>
      <footer className="bg-cyan-300/40 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-center md:text-left">
          
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ritika Suman. All rights reserved.
          </p>
          
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com/Ritikasuman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <PiGithubLogoThin className="size-8 hover:text-cyan-400 transition duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/ritikasuman/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <PiLinkedinLogoThin className="size-8 hover:text-cyan-400 transition duration-300" />
            </a>
          </div>

        </div>
      </footer>
    </SlideUpWrapper>
  );
};

export default Footer;
