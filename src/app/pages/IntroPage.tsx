import React from "react";
import ProfilePhoto from "@components/profile/ProfilePhoto";
import Button from "@components/Button/Button";
import SkillsMarquee from "../component/Marque/SkillsMarquee";
import GithubLogo from "@/assets/svg/github-svgrepo-com (2).svg";

const IntroPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 relative top-20">
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="flex flex-col leading-tight">
          <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
            From Design to Deployment —
          </span>
          <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-brand">
            Scalable & Reliable
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl px-4 md:px-10 leading-relaxed">
          I focus on creating applications that are not only fast and
          user-friendly but also designed to scale with growth. My goal is to
          blend performance, usability, and innovation to build products that
          truly make an impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Button
            text="View My Projects"
            size="medium"
            className="bg-neutral-800 border-neutral-700 hover:border-neutral-600 w-full sm:w-auto"
          />
          <Button
            text="GitHub Profile"
            size="medium"
            className="bg-neutral-800 border-neutral-700 hover:border-neutral-600 w-full sm:w-auto"
            icon={GithubLogo}
          />
        </div>
      </div>
      <div className="mt-12">
        <SkillsMarquee />
      </div>
    </div>
  );
};

export default IntroPage;
