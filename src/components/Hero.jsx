import MinhaImagem from "../assets/Eu.png";
import Button from "./Button";

function Hero() {
  return (
    <div
      className="flex flex-col items-center text-center px-4 py-16"
      id="home"
    >
      <img
        src={MinhaImagem}
        className="w-40 h-40 sm:w-64 sm:h-64 rounded-full object-cover mb-6 transition-transform duration-300 hover:scale-105"
      ></img>
      <h1 className="text-white text-3xl sm:text-5xl mb-4">
        <span className="bg-gradient-to-r from-30% from-indigo-700 to-white bg-clip-text text-transparent">
          I'm Pedro Henrique
        </span>
        , frontend developer from Brazil.
      </h1>
      <p className="text-indigo-700 sm:text-2xl max-w-4xl mt-4 mb-6">
        I am a frontend developer in Brazil, I am looking for my first
        experience in the technology area.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/pedro-henrique-566211266/"
          target="_blank"
        >
          <Button>Connect with me</Button>
        </a>
        <Button>Skills</Button>
      </div>
    </div>
  );
}

export default Hero;
