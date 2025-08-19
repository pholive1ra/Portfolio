// ProjectCard.jsx
function ProjectCard({ img, alt, link, title, description }) {
  return (
    <div className="w-full max-w-[300px] rounded overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={alt} className="w-full h-auto object-cover" />
      </a>
      <div className="p-4 bg-gray-800 text-white">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm mt-1 text-left">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
