// src/App.jsx
import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Extra from "./Components/Extra";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="h-screen w-screen bg-black/100 bg-cover bg-center relative">
        <Nav />
        <Intro />
        <AboutMe />
        <Skills />
        <Experience />
        <Work />
        <Extra />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
