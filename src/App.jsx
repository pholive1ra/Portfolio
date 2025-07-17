import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
