import Image from "next/image";
import React from "react";

interface ITagTypes {
  text: string;
  icon: string;
}

function Tags(props: ITagTypes) {
  return (
    <div className="flex justify-center items-center gap-2  p-5 max-md:py-4 max-md:px-3">
      <Image src={props.icon} alt="Github" className="w-15" />
    </div>
  );
}

export default Tags;
