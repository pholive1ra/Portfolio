import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
