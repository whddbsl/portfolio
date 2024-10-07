import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  title,
  description,
  techStack,
  githubLink,
  icon,
  inProgress,
  longDescription,
  features,
  challenges,
  outlines,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative p-6 transition-all duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
        {inProgress && (
          <div className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-black bg-yellow-500 rounded-tr-lg rounded-bl-lg">
            진행중
          </div>
        )}
        <div className="flex items-center mb-4">
          <img src={icon} alt={title} className="w-10 h-10 mr-4 rounded-full" />
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        <p className="h-20 mb-4 overflow-hidden text-gray-300">{description}</p>
        <div className="mb-4">
          <h3 className="mb-2 text-sm font-semibold text-white">기술 스택:</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-white bg-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              GitHub
            </a>
          ) : (
            <span className="text-sm text-gray-500">GitHub 준비중</span>
          )}
          <button
            className="text-sm text-yellow-400 hover:text-yellow-300"
            onClick={() => setIsModalOpen(true)}
          >
            View More
          </button>
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={longDescription || description}
        techStack={techStack}
        githubLink={githubLink}
        icon={icon}
        features={features}
        challenges={challenges}
        outlines={outlines}
      />
    </>
  );
};

export default ProjectCard;
