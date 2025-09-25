import React from "react";
import Card from "../component/Card/Card";

// Example projects
const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS",
    github: "https://github.com/prathamesh-portfolio",
  },
  {
    title: "E-commerce App",
    description: "Full-stack MERN e-commerce platform with payments",
    github: "https://github.com/prathamesh/ecommerce-app",
  },
  {
    title: "Chat Application",
    description: "Realtime chat app using Node.js, Express, and Socket.io",
    github: "https://github.com/prathamesh/chat-app",
  },
  {
    title: "Task Manager",
    description: "A productivity app built with React, Node, and MongoDB",
    github: "https://github.com/prathamesh/task-manager",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blogging platform using Next.js",
    github: "https://github.com/prathamesh/blog-platform",
  },
];

function ProjectPage() {
  return (
    <section className="px-6 md:px-20 py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My Projects
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;
