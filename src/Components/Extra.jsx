import Mintlogo from '../../assets/Mintcode.png';
import Placement from '../../assets/placement.jpg'; // ✅ Make sure this exists
import Debate from '../../assets/debate.jpg';         // ✅ And this
// import Certificates from '../../assets/Certificates.png'; // ✅ And this too

const extras = [
  {
    title: "Event Head | MintCode",
    date: "2024 – Present",
    description:
      "Organized and currently managing technical events and workshops.",
    img: Mintlogo,
  },
  {
    title: "Placement Coordinator | Global Institute of Technology",
    date: "2022 – Present",
    description:
      "Helped in organizing events like hackathons, alumni sessions, and placement drives.",
    img: Placement,
  },
  {
    title: "Debate | Inter-college Competition, Jaipur",
    date: "2022 – Present",
    description:
      "Represented college in debate competitions across Jaipur, enhancing communication and public speaking.",
    img: Debate,
  },
  {
    title: "Certificate",
    date: "2022 – Present",
    description:
      "Earned following certificates throughout my learning journey ",
    img: Debate,
  }
  
];

const ExtraInfo = () => {
  return (
    <section className="w-full  h-[70vh] " id="extra-info">
      <div className="mr-[10%] ml-[8%] ">
         <div className="text-center mb-20">
          <h2
            className={`text-7xl md:text-7xl font-mono font-bold bg-gradient-to-r text-white/80 mb-6 `}
            style={{
              letterSpacing: "-0.02em",
            }}
          >
            EXPERIENCE
          </h2> </div>
        <div className="flex  gap-[10%]">
          {extras.map((item, index) => (
           <div
  key={index}
  className="group relative  w-64 h-40% overflow-hidden rounded-xl  shadow hover:shadow-xl transition-all duration-500"
>
  {/* Sliding Reveal Background */}
  <div className="absolute  gap-x-50 inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-30 z-0"></div>

  {/* Foreground Content */}
  <div className="relative w-[100%] h-[55vh] z-10 p-6 bg-neutral-900/10 border-[2px] border-dotted border-white/30 rounded-xl text-white ">
    <div className=" gap-10 mb-4">
      <div className=" flex items-center justify-center mb-3"> 
        <img src={item.img} alt="icon" className="object-contain bg-white w-[40vh] h-[20vh]" />
        </div>
      <div>
        <h3 className="text-xl font-thin pb-2 ">{item.title}</h3>
        {item.date && (
          <p className="text-xs text-white/60">{item.date}</p>
        )}
      </div>
    </div>
    <p className="text-sm leading-relaxed text-gray-300">
      {item.description}
    </p>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
