import img from "../../assets/Ritika2.png";

const Nav = () => {
  return (
    <div className="flex bg-cyan-300/10 text-white p-1 items-center justify-between px-8 backdrop-blur-lg sticky top-0 z-50">
      {/* Logo or Name */}
      <div>
        <img src={img} alt="Sign" className="w-60 h-12 rounded-full" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-10 items-center">
        <a
          href="#home"
          className="hover:text-cyan-400 cursor-pointer font-bold font-lucid"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-cyan-400 cursor-pointer font-bold font-sans"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-cyan-400 cursor-pointer font-bold font-sans"
        >
          Contact
        </a>

        {/* Download CV Button */}
        <a
          href="/Ritika_Suman_CV.pdf"
          download="RitikaSuman.docx"
          className="bg-cyan-600/60 rounded-[4vh] px-4 py-1 text-white font-semibold hover:bg-cyan-700 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Nav;
