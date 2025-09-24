import React from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2023 - Present",
    description:
      "Building scalable web applications using React, Node.js, and MongoDB. Focused on performance and user experience.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Minds",
    period: "Jun 2021 - Dec 2022",
    description:
      "Developed responsive interfaces with React and Tailwind CSS, collaborating with designers and backend developers.",
  },
  {
    role: "Intern - Web Development",
    company: "InnovateX Labs",
    period: "Jan 2021 - May 2021",
    description:
      "Assisted in developing and maintaining web applications, learning best practices in full-stack development.",
  },
];

function ExperiencePage() {
  return (
    <section className="px-6 md:px-20 py-16 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Experience
      </h1>

      <div className="flex flex-col space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#171717] p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
            <h3 className="text-sm text-gray-400 mt-1">{exp.company}</h3>
            <p className="text-sm text-gray-500 mt-2">{exp.period}</p>
            <p className="text-gray-400 mt-3">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperiencePage;
