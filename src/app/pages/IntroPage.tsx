"use client";

import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  Code,
  Palette,
  Globe,
  Database,
  Smartphone,
  Server,
} from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Skills data
  const skillsData = [
    { name: "React", icon: Code, color: "from-blue-500 to-cyan-400" },
    { name: "Node.js", icon: Server, color: "from-green-500 to-emerald-400" },
    { name: "TypeScript", icon: Code, color: "from-blue-600 to-blue-400" },
    { name: "Next.js", icon: Globe, color: "from-gray-800 to-gray-600" },
    { name: "MongoDB", icon: Database, color: "from-green-600 to-green-400" },
    {
      name: "React Native",
      icon: Smartphone,
      color: "from-purple-500 to-pink-400",
    },
    { name: "UI/UX Design", icon: Palette, color: "from-pink-500 to-rose-400" },
    { name: "GraphQL", icon: Database, color: "from-purple-600 to-purple-400" },
  ];

  // Projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team chat.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Business intelligence dashboard with machine learning insights and customizable data visualizations.",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  // Smooth scrolling
  const scrollToSection = (sectionId:string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "education",
        "projects",
        "contact",
      ];
      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SkillsMarquee = () => (
    <div className="w-full overflow-hidden  from-gray-900 via-gray-800 to-gray-900 py-6 mt-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...skillsData, ...skillsData].map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="mx-8 flex items-center space-x-3 text-white"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                <IconComponent size={20} />
              </div>
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  type Project = {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group relative bg-gray-brand  rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-700/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0  from-gray-900 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 right-4 flex gap-2">
          <a
            href={project.github}
            className="p-2 bg-black/50  rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={project.live}
            className="p-2 bg-black/50  rounded-full text-white hover:bg-black/70 transition-colors"
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
              className="px-3 py-1  text-blue-300 rounded-full text-sm border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div> */}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Prathamesh.dev
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "experience",
                "education",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              {[
                "home",
                "about",
                "experience",
                "education",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 relative pt-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Greeting */}
            <div className="text-lg md:text-xl text-cyan-400 font-medium mb-4 animate-pulse">
              👋 Hi, I’m Prathamesh Thorat
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="flex flex-col leading-tight">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  Full-Stack Developer
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Turning Ideas into Reality
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 mt-4">
                  Web • Mobile • Machine Learning
                </span>
              </h1>
            </div>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              I’m a{" "}
              <span className="text-blue-400 font-semibold">
                Computer Science graduate
              </span>
              and{" "}
              <span className="text-green-400 font-semibold">
                Full-Stack Developer
              </span>
              with 1 year of professional experience. My work spans{" "}
              <span className="text-cyan-300 font-semibold">web apps</span>,{" "}
              <span className="text-purple-400 font-semibold">
                mobile solutions
              </span>
              , and{" "}
              <span className="text-teal-300 font-semibold">
                machine learning projects
              </span>
              . I’m passionate about building clean, scalable, and impactful
              applications.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  1+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  15+
                </div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  Full-Stack
                </div>
                <div className="text-gray-400">Web & Mobile</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2"
              >
                <Code size={18} />
                View My Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="px-6 py-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 hover:border-gray-600 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105  flex items-center gap-2"
              >
                <Palette size={18} />
                My Experience
              </button>
            </div>

            {/* Scroll Down */}
            <button
              onClick={() => scrollToSection("about")}
              className="mt-12 p-3 rounded-full border border-gray-600 hover:border-gray-500 transition-colors animate-bounce flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <span className="text-sm">Learn More About Me</span>
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        <SkillsMarquee />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - About Text */}
            <div className="space-y-5 text-gray-300 text-base leading-relaxed">
              <p>
                I’m a dedicated{" "}
                <span className="text-white font-semibold">
                  Full-Stack Developer
                </span>
                with{" "}
                <span className="text-cyan-400 font-semibold">
                  1 year of industry experience
                </span>
                building scalable web applications. I enjoy working with modern
                JavaScript frameworks and creating seamless user experiences.
              </p>
              <p>
                My journey started with curiosity about how websites work, which
                grew into a passion for building{" "}
                <span className="text-blue-400 font-semibold">
                  digital solutions
                </span>
                that solve real-world problems. I believe in clean, maintainable
                code and following best practices.
              </p>
              <p>
                Outside of coding, I love exploring new technologies,
                experimenting with open-source projects, and learning from the
                developer community.
              </p>
            </div>

            {/* Right Side - Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skillsData.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="p-5 rounded-lg border bg-neutral-900 border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`p-2.5 rounded-md bg-gradient-to-r ${skill.color} w-fit mb-2`}
                    >
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-medium text-sm text-white">
                      {skill.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b via-cyan-400 to-teal-300 md:left-1/2 md:transform md:-translate-x-px"></div>

            <div className="space-y-10">
              {/* Software Developer */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="flex-1 md:text-right md:pr-10">
                  <div className="ml-12 md:ml-0 p-5 bg-gray-brand text-start rounded-lg border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">
                        Software Developer
                      </h3>
                      <span className="text-xs text-blue-400 font-medium bg-blue-500/20 px-2.5 py-1 rounded-full">
                        Oct 2024 – Present
                      </span>
                    </div>
                    <h4 className="text-sm text-cyan-400 mb-2">Company Name</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Contributed to enterprise-scale applications serving 100K+
                      users. Helped architect backend services and collaborated
                      with cross-functional teams.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        React
                      </span>
                      <span className="px-2.5 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                        Node.js
                      </span>
                      <span className="px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                        AWS
                      </span>
                      <span className="px-2.5 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">
                        Docker
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 md:left-1/2 md:transform md:-translate-x-2"></div>
                <div className="flex-1 md:pl-10"></div>
              </div>

              {/* Software Developer Intern */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="flex-1 md:pr-10"></div>
                <div className="absolute left-6 w-4 h-4 bg-gray-brand rounded-full border-4 border-gray-900 md:left-1/2 md:transform md:-translate-x-2"></div>
                <div className="flex-1 md:pl-10">
                  <div className="ml-12 md:ml-0 p-5 rounded-lg border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">
                        Software Developer Intern
                      </h3>
                      <span className="text-xs text-cyan-400 font-medium bg-cyan-500/20 px-2.5 py-1 rounded-full">
                        Apr 2018 – Sept 2018
                      </span>
                    </div>
                    <h4 className="text-sm text-cyan-400 mb-2">Company Name</h4>
                    <p className="text-gray-300 text-sm mb-3">
                      Assisted in developing and maintaining client projects
                      using modern web technologies. Improved performance by 40%
                      with optimization strategies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        Vue.js
                      </span>
                      <span className="px-2.5 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                        Express
                      </span>
                      <span className="px-2.5 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">
                        MongoDB
                      </span>
                      <span className="px-2.5 py-1 bg-red-500/20 text-red-300 rounded-full text-xs">
                        Redis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"></div>
                Education
              </h3>

              <div className="p-5 bg-gray-brand rounded-lg border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Bachelor in Computer Science
                    </h4>
                    <p className="text-sm text-cyan-400">Tech University</p>
                  </div>
                  <span className="text-xs text-blue-400 font-medium bg-blue-500/20 px-2.5 py-1 rounded-full">
                    2015 – 2018
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Specialized in Software Engineering and Web Development.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-400 rounded-lg"></div>
                Certifications
              </h3>

              <div className="space-y-3">
                {/* Individual Certification */}
                {[
                  {
                    name: "AWS Certified Solutions Architect",
                    org: "Amazon Web Services",
                    year: "2023",
                    color: "green",
                  },
                  {
                    name: "Google Cloud Professional Developer",
                    org: "Google Cloud Platform",
                    year: "2022",
                    color: "blue",
                  },
                  {
                    name: "MongoDB Certified Developer",
                    org: "MongoDB University",
                    year: "2022",
                    color: "purple",
                  },
                  {
                    name: "React Developer Certification",
                    org: "Meta (Facebook)",
                    year: "2021",
                    color: "cyan",
                  },
                  {
                    name: "Docker Certified Associate",
                    org: "Docker Inc.",
                    year: "2021",
                    color: "orange",
                  },
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    className={`p-4 bg-gray-brand rounded-lg border border-gray-800/50 hover:border-${cert.color}-500/50 transition-all duration-300`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-gray-400">{cert.org}</p>
                      </div>
                      <span
                        className={`text-xs text-${cert.color}-400 bg-${cert.color}-500/20 px-2 py-1 rounded`}
                      >
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Continuous Learning */}
                <div className="mt-6 p-5 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700/50">
                  <h4 className="text-sm md:text-base font-semibold text-white mb-2">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    Staying current with technology trends through various
                    platforms:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Udemy", "Coursera", "Pluralsight", "egghead.io"].map(
                      (platform, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded text-xs md:text-sm"
                        >
                          {platform}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            Interested in working together or just want to say hi? Reach out to
            me!
          </p>
          <div className="flex justify-center gap-4 md:gap-6">
            <a
              href="mailto:your@email.com"
              className="p-3 md:p-4 bg-gray-800/50 hover:bg-blue-600 rounded-full transition"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="p-3 md:p-4 bg-gray-800/50 hover:bg-blue-600 rounded-full transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="p-3 md:p-4 bg-gray-800/50 hover:bg-blue-600 rounded-full transition"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
