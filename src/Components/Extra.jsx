import React, { useState } from "react";
import Mintlogo from '../../assets/Mintcode.png';
import Placement from '../../assets/placement.jpg';
import Debate from '../../assets/debate.jpg';
import Certificate from "../../assets/certificate.webp";

import Cert1 from "../../assets/certificate/debate.png";
import Cert2 from "../../assets/certificate/hac3.jpg";
import Cert3 from "../../assets/certificate/hac2.png";

 import Cert4 from "../../assets/certificate/one.png";
 import Cert5 from "../../assets/certificate/three.png";
 import Cert6 from "../../assets/certificate/two.png";
 import Cert7 from "../../assets/certificate/four.png";
 import Cert8 from "../../assets/certificate/five.jpeg";

 import Cert9 from "../../assets/certificate/nine.png";
 import Cert10 from "../../assets/certificate/ten.png";
  import Cert11 from "../../assets/certificate/eleven.png";
   import Cert12 from "../../assets/certificate/twe.png";

const extras = [
  {
    title: "Event Head | MintCode",
    date: "2024 – Present",
    description:
      "Organized and currently managing technical events and workshops for the Club.",
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
      "Earned following certificates throughout my learning journey",
    img: Certificate,
  }
];

const certificateImages = [ Cert2, Cert3, Cert4, Cert5, Cert6, Cert7, Cert9 , Cert10, Cert11, Cert12 ,Cert1 ,Cert8];


const Extra = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full h-[80vh] pb-20" id="extra-info">
      <div className="mr-[%] ml-[%]">
        <div className="text-center mb-20">
          <h2
            className="text-7xl md:text-7xl font-mono font-bold text-white/80 mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            MORE ABOUT ME
          </h2>
        </div>
        <div className="flex flex-wrap gap-[5%] justify-center">
          {extras.map((item, index) => (
            <div
              key={index}
              className="group relative w-[18%] h-[100%] overflow-hidden rounded-xl shadow hover:shadow-xl transition-all duration-500"
            >
              {/* Sliding Reveal Background */}
              <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 opacity-30 z-0"></div>

              {/* Foreground Content */}
              <div className="relative w-full h-[55vh] z-10 p-6 bg-white/10 backdrop-blur-xl border-[2px] border-dotted border-white/30 rounded-xl text-white">
                <div className="gap-5 mb-4">
                  <div className="flex items-center justify-center mb-3">
                    <img src={item.img} alt="icon" className="object-content bg-white w-[40vh] h-[20vh]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-thin pb-2">{item.title}</h3>
                    {item.date && (
                      <p className="text-xs text-white/60">{item.date}</p>
                    )}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>

                {item.title === "Certificate" && (
                  <button
                    className="mt-4 px-4 py-2 bg-cyan-700 text-white rounded-xl hover:bg-cyan-600 transition"
                    onClick={() => setIsModalOpen(true)}
                  >
                    View Certificates
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-opacity-80">
          <div className="bg-white/40 rounded-lg p-6  w-[90%] relative">
            <button
              className="absolute top-2 right-4 text-black text-3xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray">My Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
              {certificateImages.map((cert, i) => (
                <img
                  key={i}
                  src={cert}
                  alt={`Certificate ${i + 1}`}
                  className="w-full h-auto rounded shadow border"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Extra;
