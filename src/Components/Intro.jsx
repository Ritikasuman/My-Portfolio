// src/Components/Intro.jsx
const Intro = () => {
  return (
    <div className="flex h-[50vh] mt-10 mb-10 bg-white/30 backdrop-blur-4xl w-[80%] mx-auto gap-[10%] rounded-xl  shadow-white-500/50  text-white ">
      <div className="left w-[55%] flex flex-col justify-center pr-6 border-r border-white/20">
        <h1 className="text-[6vh] font-['IBM Plex Mono'] text-white">Ritika Suman</h1>
        <p className="mt-4 text-base text-white">
          Hi, I’m Ritika Suman. I’m a fresher exploring web development and learning by building websites and small projects...
        </p>
      </div>

      <div className="right w-[35%] flex items-center justify-center">
        <div className="w-[200px] h-[200px] bg-[url('../../assets/ProfileImg.jpg')] bg-cover bg-center rounded-full shadow-md border-4 border-white/50"></div>
      </div>
    </div>
  );
};

export default Intro;
