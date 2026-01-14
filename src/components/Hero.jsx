import MinhaImagem from "../assets/MeImage.png";
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
          Pedro Henrique
        </span>
        , Desenvolvedor FrontEnd
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/pedro-henrique-566211266/"
          target="_blank"
        >
          <Button>Conectar</Button>
        </a>
        <a href="#Skills">
          <Button>Skills</Button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
