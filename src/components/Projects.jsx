import LoginPage from '../assets/Projects/Login-Page-2.png';

function Projects() {
  return (
    <div className="text-center px-4 py-10" id="Projects">
      <h2 className="text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-indigo-700 to-white bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-6 justify-items-center">
        <div className="w-full max-w-[300px] rounded overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
          <a
            href="https://github.com/pholive1ra/Login-Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LoginPage}
              alt="Login Page"
              className="w-full h-auto object-cover"
            />
          </a>
          <div className="p-4 bg-gray-800 text-white">
            <h3 className="font-semibold text-lg">Login Page</h3>
            <p className="text-sm mt-1 text-left">
              Página de login usando MaterialUI + TailwindCSS + ReactJS
            </p>
          </div>  
        </div>

        {/* Adicione outros projetos aqui duplicando o bloco */}
      </div>
    </div>
  );
}

export default Projects;
