import LoginPage from "../assets/Projects/Login-Page-2.png";
import BarbeariaPrestige from "../assets/Projects/barbeariaprestige.png";
import PortalFonte from "../assets/Projects/portalfonte.png";
import WeatherAPI from "../assets/Projects/weatherapi.png";
import CountriesSearch from "../assets/Projects/countriessearch.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="text-center px-4 py-10" id="Projects">
      <h2 className="text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-indigo-700 to-white bg-clip-text text-transparent">
          Projetos
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-6 justify-items-center">
        <ProjectCard
          img={BarbeariaPrestige}
          alt="Barbearia Prestige"
          link="https://barbearia-prestige.vercel.app/"
          title="Barbearia Prestige"
          description="Sistema de serviço de agendamento visando facilitar a barbearia e o cliente. (Projeto em andamento atualmente)"
        />

        <ProjectCard
          img={PortalFonte}
          alt="Portal Fonte"
          link="https://portalfonte.com/"
          title="Portal Fonte"
          description="Participei da criação de uma página universitária com fins de comunicação: NextJS, TypeScript, MySQL. fui responsável pela criação e manutenção de componentes de interface reutilizáveis, contribuindo diretamente para a padronização visual, organização do código e consistência da experiência do usuário."
        />

        <ProjectCard
          img={CountriesSearch}
          alt="API Countries Search"
          link="https://api-countries-search.vercel.app/"
          title="Countries Search API"
          description="Aplicação consumindo uma API que busca informações de países: ReactJS, API REST, Tailwind"
        />

        <ProjectCard
          img={WeatherAPI}
          alt="WeatherAPI"
          link="https://github.com/pholive1ra/weather-api"
          title="WeatherAPI"
          description="Aplicação consumindo uma API de previsão do tempo para os próximos 7 dias: ReactJS, API REST, Tailwind"
        />
      </div>
    </div>
  );
}

export default Projects;
