import React from "react";
import { Tag } from "../component";
import {
  ExpressIcon,
  GithubIcon,
  PostgresIcon,
  ReactIcon,
  NextJs,
  NodejsIcon,
  Typescript,
  HTML,
  gitIcon,
  PrismaIcon,
  PythonIcon,
  TailwindCss,
} from "@/assets/svg";

function SkillsPage() {
  return (
    <div className="px-10 max-md:px-5 py-16">
      {/* Small Heading */}
      <div className="text-2xl font-semibold text-center mb-4">
        Technologies I Work With
      </div>

      {/* Tiny Subtext */}
      <div className="text-sm text-gray-500 text-center mb-10 max-w-lg mx-auto">
        My toolkit for building scalable, modern, and user-friendly web apps.
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Tag icon={HTML} text="HTML" />
        <Tag icon={ReactIcon} text="React" />
        <Tag icon={NextJs} text="Next.js" />
        <Tag icon={NodejsIcon} text="Node.js" />
        <Tag icon={ExpressIcon} text="Express.js" />
        <Tag icon={PostgresIcon} text="PostgreSQL" />
        <Tag icon={PrismaIcon} text="Prisma" />
        <Tag icon={Typescript} text="TypeScript" />
        <Tag icon={TailwindCss} text="Tailwind CSS" />
        <Tag icon={gitIcon} text="Git" />
        <Tag icon={GithubIcon} text="GitHub" />
        <Tag icon={PythonIcon} text="Python" />
      </div>
    </div>
  );
}

export default SkillsPage;
