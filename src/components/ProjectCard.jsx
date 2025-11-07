// ProjectCard.jsx
function ProjectCard({ img, alt, link, title, description }) {
  return (
    <div className="w-full max-w-[300px] h-[380px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 flex flex-col justify-between bg-gray-800">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={alt} className="w-full h-40 object-cover" />
      </a>

      <div className="p-4 flex-1 flex flex-col justify-between text-white">
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-left text-gray-300 line-clamp-3">
            {description}
          </p>
        </div>
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
