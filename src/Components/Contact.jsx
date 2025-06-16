const Contact = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: contact info */}
          <div className="space-y-4">
            <p className="text-gray-700">Feel free to reach out for any collaboration or questions!</p>
            <div>
              <p className="font-medium text-gray-800">Email:</p>
              <p className="text-gray-600">your.email@example.com</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Location:</p>
              <p className="text-gray-600">Your City, India</p>
            </div>
          </div>

          {/* Right side: contact form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
