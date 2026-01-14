function ProjectCard({ img, alt, link, title, description }) {
  return (
    <div className="w-full max-w-[300px] min-h-[380px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col bg-gray-800">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={alt} className="w-full h-40 object-cover" />
      </a>

      <div className="p-4 flex flex-col flex-grow text-white">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>

        <p className="text-sm text-left text-gray-300 flex-grow">
          {description}
        </p>
      </div>

      <div className="p-4 pt-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full font-semibold transition-colors"
        >
          Ver Projeto
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
