import LoginPage from "../assets/Projects/Login-Page-2.png";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="text-center px-4 py-10" id="Projects">
      <h2 className="text-4xl font-bold mb-8">
        <span className="bg-gradient-to-r from-indigo-700 to-white bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-6 justify-items-center">
        <ProjectCard
          img={LoginPage}
          alt="Login Page"
          link="https://github.com/pholive1ra/Login-Page"
          title="Login Page"
          description="Página de login usando MaterialUI + TailwindCSS + ReactJS"
        />

        {/* Basta duplicar <ProjectCard /> com props diferentes */}
      </div>
    </div>
  );
}

export default Projects;
