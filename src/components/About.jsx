import { FaGithub, FaLinkedin } from "react-icons/fa";
import MinhaImagem from "../assets/MeImage2.png";

function About() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center gap-10 px-6 py-10"
      id="about"
    >
      {/* Imagem */}
      <img
        src={MinhaImagem}
        alt="Minha foto"
        className="w-64 h-64 sm:h-90 object-cover rounded-lg sm:mr-10 transition-transform duration-300 hover:scale-105"
      />

      {/* Texto */}
      <div className="text-white max-w-xl text-left">
        <h2 className="text-4xl font-bold mb-4 sm:mb-12">
          <span className="bg-gradient-to-r from-30% from-indigo-700 to-white bg-clip-text text-transparent">
            Sobre mim
          </span>
        </h2>
        <p className="mb-4 text-lg">
          Desenvolvedor Front-End com experiência na construção e evolução de
          aplicações web escaláveis, criando interfaces modernas orientadas à
          performance, usabilidade e experiência do usuário. Atuo na
          transformação de regras de negócio complexas em soluções intuitivas,
          responsivas e de alta qualidade técnica, com foco em componentização,
          integração com APIs REST e código limpo.
        </p>

        {/* Adicione seus ícones aqui (opcional) */}
        <div className="flex justify-center gap-4 sm:justify-start text-center mt-4 sm:mt-6 ">
          <a
            href="https://github.com/pholive1ra"
            className="text-indigo-700 text-2xl hover:text-indigo-300"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-henrique-566211266/"
            className="text-indigo-700 text-2xl hover:text-indigo-300"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
