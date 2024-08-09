import React from "react";

interface ButtonProps {
  title?: string;
  from?: string;
  to?: string;
  color?: string;
  onClick?: () => void;
}
import "./ButtonCustom.css";
const ButtonCustom: React.FC<ButtonProps> = ({
  title,
  from,
  to,
  color,
  onClick,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
  };

  return (
    <div>
      <div
        className="relative send-button px-10 py-2.5 rounded-xl justify-center items-center gap-3 inline-flex"
        style={gradientStyle}
        onClick={onClick}
      >
        <div
          className={`w-full ${color} flex text-center text-base justify-center items-center font-bold font-Space Grotesk leading-normal`}
        >
          {title}
        </div>
        <span
          className={`arrow ${color} absolute right-5`}
          style={{ fontSize: "25px" }}
        >
          →
        </span>
      </div>
    </div>
  );
};

export default ButtonCustom;
