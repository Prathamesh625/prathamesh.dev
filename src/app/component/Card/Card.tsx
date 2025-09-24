import React from "react";

interface ICardProps {
  title?: string;
  description?: string;
  github?: string;
  className?: string;
}

function Card({ title, description, github, className }: ICardProps) {
  return (
    <div
      className={`h-52 bg-[#171717] rounded-lg p-5 backdrop-blur-sm border border-neutral-800 shadow hover:shadow-lg hover:scale-105 transition-transform flex flex-col justify-between ${className}`}
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-white">
        {title || "Project Title"}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-400 mt-2 flex-grow">
        {description || "Project description goes here."}
      </p>

      {/* GitHub Link */}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm mt-3 hover:underline"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}

export default Card;
