import React from "react";

const ProjectCard = ({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
  icon,
}) => (
  <div className="p-6 transition-all duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
    <div className="flex items-center mb-4">
      <div className="p-3 mr-4 bg-gray-700 rounded-full">{icon}</div>
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
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-400 hover:text-blue-300"
      >
        GitHub
      </a>
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-green-400 hover:text-green-300"
      >
        Live Demo
      </a>
    </div>
  </div>
);

export default ProjectCard;
