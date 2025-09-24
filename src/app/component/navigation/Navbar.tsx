import React from "react";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="h-16 backdrop-blur-sm bg-background/95 border-b border-neutral-700 flex items-center px-6 lg:px-16 xl:px-20 justify-between">
        <div className="text-lg font-bold">Prathamesh.dev</div>
        <div className="flex justify-evenly gap-2 max-md:hidden">
          <Button
            size="small"
            text="Sign in"
            className="bg-neutral-800 border-neutral-700 hover:border-neutral-600"
          />
          <Button size="small" text="Start your project" className="bg-brand" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
