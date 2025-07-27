import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Extra from "./Components/Extra";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import TimelinePath from "./Components/TimelinePath";

function App() {
  return (
    <>
      <div
        className="app-wrapper"
        style={{
          backgroundImage: "url('./assets/bgc3.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* All sections scroll on top of this */}
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
