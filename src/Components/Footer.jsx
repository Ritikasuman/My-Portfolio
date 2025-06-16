const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Ritika Suman. All rights reserved.</p>
        
        <div className="flex space-x-4">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
