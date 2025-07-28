import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mkgzbzjo", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
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
    <section className="w-full h-[60vh] mt-[8%]" id="contact">
      <div className="">
        <div className="text-center mb-10">
          <h2
            className="text-7xl font-mono font-bold bg-gradient-to-r text-white/80 mb-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            CONTACT ME
          </h2>
        </div>
       <div className="bg-gray-500/10 m-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div className="space-y-4 text-gray-300">
            <p>Feel free to reach out for any collaboration or questions!</p>
            <div>
              <p className="font-medium text-gray-200">Email:</p>
              <p>ritikasuman56@gmail.com</p>
            </div>
            <div>
              <p className="font-medium text-gray-200">Location:</p>
              <p>Jaipur, India</p>
            </div>
          </div>

          {/* Right side */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-white">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded bg-transparent text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded bg-transparent text-white placeholder-gray-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 p-3 rounded bg-transparent text-white placeholder-gray-400"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200"
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
  );
};

export default Contact;
