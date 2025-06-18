import Mintlogo from '../../assets/Mintcode.png';
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
    title: "Certifications",
    description:
      "Completed online courses in HTML, CSS, JavaScript, and Git from platforms like freeCodeCamp and Coursera.",
    img: Certificates ,
  },
  
];

const ExtraInfo = () => {
  return (
    <section className="w-full bg-black " id="extra-info">
      <div className="mr-[10%] ml-[8%] ">
        <h2 className="text-5xl font-mono text-white mb-8">
          More 
        </h2>
        <div className="flex  gap-6">
          {extras.map((item, index) => (
           <div
  key={index}
  className="group relative  w-64 h-auto overflow-hidden rounded-xl  shadow hover:shadow-xl transition-all duration-500"
>
  {/* Sliding Reveal Background */}
  <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-30 z-0"></div>

  {/* Foreground Content */}
  <div className="relative h-full z-10 p-6 bg-neutral-900/10 border border-dotted border-white/30 rounded-xl text-white">
    <div className=" gap-4 mb-4">
      <div className="w-full h-full"> 
        <img src={item.img} alt="icon" className="object-contain bg-white" />
        </div>
      <div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        {item.date && (
          <p className="text-xs text-white/60">{item.date}</p>
        )}
      </div>
    </div>
    <p className="text-sm leading-relaxed text-white/90">
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
