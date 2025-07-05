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
      <div className="" style={{ backgroundImage: "url('./assets/bg99.png')" }}>

        <Nav />
        <Intro />
         <AboutMe />
         </div>
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
