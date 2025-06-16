import img from "../../assets/Ritika.png";

const Nav = () => {
  return (
    <div className="flex bg-zinc-900 text-white p-3.5 items-center gap-[80vh] backdrop-blur-sm">
      <div className="mr-4">
        <img src={img} alt="Sign" className="w-60 h-12 rounded-full" />
      </div>
      <div className="flex space-x-10">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>
            <button className="bg-blue-400/60 rounded-[4vh]" >Dowload CV</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
