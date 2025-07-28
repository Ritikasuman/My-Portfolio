import { useState } from "react";
import img from "../../assets/Ritika2.png";
import SlideUpWrapper from "../Components/SlideUpWrapper";
import { Menu, X } from "lucide-react"; // for hamburger icon

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SlideUpWrapper>
      <nav className="bg-cyan-300/10 text-white px-4 sm:px-8 py-2 backdrop-blur-lg sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img
              src={img}
              alt="Sign"
              className="w-44 h-10 sm:w-60 sm:h-12 rounded-full"
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="hover:text-cyan-400 font-bold font-lucid">
              Home
            </a>
            <a
              href="#about"
              className="hover:text-cyan-400 font-bold font-sans"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 font-bold font-sans"
            >
              Contact
            </a>
          <a
              href="/RitikasumanResume.pdf"
              download
              className="bg-cyan-600/60 rounded-[4vh] px-4 py-1 text-white font-semibold hover:bg-cyan-700 transition duration-300 w-max"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="flex flex-col space-y-4 mt-4 md:hidden items-center">
            <a href="#" className="hover:text-cyan-400 font-bold">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 font-bold">
              About
            </a>
            <a href="#contact" className="hover:text-cyan-400 font-bold">
              Contact
            </a>
            <a
              href="/RitikasumanResume.pdf"
              download
              className="bg-cyan-600/60 rounded-[4vh] px-4 py-1 text-white font-semibold hover:bg-cyan-700 transition duration-300 w-max"
            >
              Download CV
            </a>
          </div>
        )}
      </nav>
    </SlideUpWrapper>
  );
};

export default Nav;
