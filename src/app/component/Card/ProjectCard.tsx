import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 right-4 flex gap-2">
          <a
            href={project.github}
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={project.live}
            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
