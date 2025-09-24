import React from "react";
import ProfilePhoto from "../component/profile/ProfilePhoto";

function About() {
  return (
    <div className="min-h-screen grid grid-cols-3 max-md:grid-cols-1 w-full px-20 max-md:px-5 py-10">
      {/* Profile Photo */}
      <div className="w-full col-span-1 flex justify-center items-center mb-10 max-md:mb-6">
        <ProfilePhoto />
      </div>

      {/* About Text */}
      <div className="w-full col-span-2 flex justify-center items-center">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-3xl font-bold leading-snug">
            Hi, I’m <span className="text-blue-500">Prathamesh Thorat</span>
          </h1>

          <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
            Software Developer 
          </h2>

          <p className="text-base text-gray-500 dark:text-gray-400">
            I craft modern, user-friendly, and scalable web applications. My
            passion lies in blending{" "}
            <span className="font-semibold">clean code</span> with{" "}
            <span className="font-semibold">creative design</span> to deliver
            meaningful digital experiences. With strong focus on performance and
            usability, I strive to create applications that adapt seamlessly to
            any screen size and scale with growth.
          </p>

          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>🚀 Experienced in building full-stack apps with MERN stack</li>
            <li>🎯 Strong focus on performance & responsive design</li>
            <li>🤝 Passion for open-source & collaborative projects</li>
            <li>📚 Exploring AI & modern web technologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
