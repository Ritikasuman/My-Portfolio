import { useState } from "react";
import SlideUpWrapper from "../Components/SlideUpWrapper";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mkgzbzjo", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <SlideUpWrapper>
      <section className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-mono font-bold text-white/80 mb-15">
              CONTACT ME
            </h2>
          </div>

          <div className="bg-gray-400/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left side */}
              <div className="space-y-4 text-gray-300">
                <p className="text-base sm:text-lg">Feel free to reach out for any collaboration or questions!</p>
                <div>
                  <p className="font-medium text-gray-200">Email:</p>
                  <p className="break-all">ritikasuman56@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-200">Location:</p>
                  <p>Jaipur, India</p>
                </div>
              </div>

              {/* Right side - Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-white">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 rounded bg-transparent text-white placeholder-gray-300 text-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-3 rounded bg-transparent text-white placeholder-gray-300 text-sm"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full border border-gray-300 p-3 rounded bg-transparent text-white placeholder-gray-300 text-sm"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-cyan-700 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-cyan-400 text-lg font-medium">
                  ✅ Thank you! Your message has been sent.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SlideUpWrapper>
  );
};

export default Contact;
