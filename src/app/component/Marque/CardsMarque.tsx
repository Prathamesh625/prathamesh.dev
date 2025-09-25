import React from "react";
import ReactjsIcon from "@/assets/svg/react-svgrepo-com.svg";
import Marquee from "react-fast-marquee";

import Image from "next/image";

function CardsMarquee() {
  return (
    <Marquee speed={50} delay={0} className="my-24">
      {[1, 2, 3, 4, 5, 6, 6, 7, 8].map((item) => (
        <div className="grid grid-cols-2 gap-10 min-h-56" key={item}>
          <div className="flex flex-col gap-5 col-span-1">
            <div className="h-full w-56">
              <span className="flex mx-5 flex-row gap-2 justify-center items-center h-full w-full bg-[#171717] border-1 border-gray-700 rounded-xl">
                <Image src={ReactjsIcon} alt="Reactjs" width={40} height={40} />
                <span>React</span>
              </span>
            </div>
            <div className="h-full w-56">
              <span className="flex mx-5  flex-row gap-2 justify-center items-center h-full w-full bg-[#171717] border-1 border-gray-700 rounded-xl">
                <Image src={ReactjsIcon} alt="Reactjs" width={40} height={40} />
                <span>React</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col col-span-1">
            <span className="flex flex-row gap-2 justify-center items-center  h-full w-full bg-[#171717] border-1 border-gray-700 rounded-xl">
              <Image src={ReactjsIcon} alt="Reactjs" width={40} height={40} />
              <span>React</span>
            </span>
          </div>
        </div>
      ))}
    </Marquee>
  );
}

export default CardsMarquee;
