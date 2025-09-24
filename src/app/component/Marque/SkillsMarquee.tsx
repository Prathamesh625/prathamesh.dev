import React from "react";
import ReactjsIcon from "@/assets/svg/react-svgrepo-com.svg";
import NodejsIcon from "@/assets/svg/nodejs-logo-svgrepo-com.svg";
import ExpressJsIcon from "@/assets/svg/Express.svg";
import PostgressIcon from "@/assets/svg/PostgresSQL.svg";
import Marquee from "react-fast-marquee";

import Image from "next/image";

function SkillsMarquee() {
  return (
    <Marquee speed={50} delay={0} className="my-24">
      <span className="flex mx-5 flex-row gap-2 items-center">
        <Image src={ReactjsIcon} alt="Reactjs" width={40} height={40} />
        <span>React</span>
      </span>
      <span className="flex mx-5 flex-row gap-2 items-center">
        <Image src={NodejsIcon} alt="Reactjs" width={40} height={40} />
        <span>React</span>
      </span>
      <span className="flex mx-5 flex-row gap-2 items-center">
        <Image src={ExpressJsIcon} alt="Reactjs" width={40} height={40} />
        <span>ExpressJs</span>
      </span>
      <span className="flex mx-5 flex-row gap-2 items-center">
        <Image src={PostgressIcon} alt="Reactjs" width={40} height={40} />
        <span>Postgress</span>
      </span>
      <span className="flex mx-5 flex-row gap-2 items-center">
        <Image src={PostgressIcon} alt="Reactjs" width={40} height={40} />
        <span>Postgress</span>
      </span>
      <span className="flex mx-5 flex-row gap-2 items-center">
        <Image src={PostgressIcon} alt="Reactjs" width={40} height={40} />
        <span>Postgress</span>
      </span>
    </Marquee>
  );
}

export default SkillsMarquee;
