import React, { useState } from "react";
import SlideUpWrapper from "../Components/SlideUpWrapper";
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
  },
];

const certificateImages = [
  Cert2, Cert3, Cert4, Cert5, Cert6,
  Cert7, Cert9, Cert10, Cert11, Cert12,
  Cert1, Cert8,
];

const Extra = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SlideUpWrapper>
      <section className="w-full py-15 px-4 sm:px-10" id="extra-info">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-mono font-bold text-white/80"
            
            >
              MORE ABOUT ME
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl shadow hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Sliding Reveal */}
                <div className="absolute inset-0 bg-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 opacity-30 z-0"></div>

                {/* Foreground Content */}
                <div className="relative z-10 p-6 bg-white/10 backdrop-blur-xl border-2 border-dotted border-white/30 text-white min-h-[350px] flex flex-col justify-between">
                  {/* Image */}
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-contain bg-white w-full max-h-36 rounded"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-xs text-white/60 mb-2">{item.date}</p>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>

                  {/* Button */}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
            <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-4 text-white text-3xl font-bold"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>

              {/* Title */}
              <h2 className="text-2xl font-semibold mb-4 text-white">
                My Certificates
              </h2>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {certificateImages.map((cert, i) => (
                  <img
                    key={i}
                    src={cert}
                    alt={`Certificate ${i + 1}`}
                    className="w-full h-auto rounded shadow-md border border-white/20 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </SlideUpWrapper>
  );
};

export default Extra;
