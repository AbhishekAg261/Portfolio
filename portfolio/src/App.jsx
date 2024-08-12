import "./App.css";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Hero />
        </div>
        <div className="content-2">
          <Skills />
        </div>
        <div className="content">
          <Projects />
        </div>
        <div className="content-2">
          <Education />
        </div>
        <div className="content">
          <Contact />
        </div>
        <div className="content-2">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
