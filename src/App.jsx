import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CareerSection from "./components/CareerSection";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CareerSection />
      </div>
    </>
  );
}

export default App;
