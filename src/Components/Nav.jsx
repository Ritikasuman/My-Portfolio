import img from "../../assets/Ritika2.png";

const Nav = () => {
  return (
    <div className="flex bg-zinc-100/10 text-white p-1 items-center gap-[87vh] backdrop-blur-lg sticky top-0 z-999  ">
      <div className="">
        {/* <h1 className="w-60 h-11 font-mono size-8xl" >Ritika</h1> */}
        <img src={img} alt="Sign" className=" ml-21 w-60 h-12 rounded-full " />
      </div>
      <div className="flex space-x-10">
        <a href="#home" className="hover:text-cyan-400 cursor-pointer font-bold font-lucid">Home</a>
        <a href="#about" className="hover:text-cyan-400  cursor-pointer font-bold font-sans">About</a>
        <a href="#contact" className="hover:text-cyan-400  cursor-pointer font-bold font-sans">Contact</a>
        <div>
          <button className="bg-cyan-600/60 rounded-[4vh] px-4 py-1">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
