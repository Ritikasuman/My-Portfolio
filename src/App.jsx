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
      <div className="h-auto w-screen bg-[url('../assets/bg.jpg')] bg-cover bg-center relative">
        <Nav />
        <Intro />
      </div>

      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <Extra />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
