import Image from "next/image";
import React from "react";

type IButtonTypes = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  size: "small" | "medium" | "large";
  icon?: string;
};

const Button: React.FC<IButtonTypes> = (props) => {
  return (
    <button
      className={`${
        props.size === "medium" ? "text-sm" : "text-xs leading-none"
      }  px-3 py-[7px] font-medium rounded-md ease-out duration-200 border-[1px] gap-2 flex items-center ${
        props.className
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.icon && (
        <Image src={props.icon} width={20} height={20} alt="react-svg" />
      )}
      {props.text}
    </button>
  );
};

export default Button;
