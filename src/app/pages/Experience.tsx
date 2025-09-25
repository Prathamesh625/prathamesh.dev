import React from "react";
import CustomCard from "../component/Card/CustomCard";

function Experience() {
  return (
    <div className=" min-h-screen text-2xl font-medium text-center max-md:text-sm px-40 max-md:px-10">
      <h1 className="text-center my-20">Experience && Education</h1>
      <div className="flex flex-col my-10 relative">
        <div className="flex w-10 justify-start h-10 -left-[1.1rem] rounded-sm absolute -top-10 bg-neutral-600"></div>
        <CustomCard />
        <CustomCard />
      </div>
      <div className="flex flex-col my-10 mt-20 relative">
        <div className="flex w-10 justify-start h-10 -left-[1.1rem] rounded-sm absolute -top-10 bg-neutral-600"></div>
        <CustomCard />
        {/* <CustomCard /> */}
      </div>
    </div>
  );
}

export default Experience;
