import React from "react";
import { ButtonProps } from "../interfaces"; // Using relative path


const sizeClasses: Record<ButtonProps["size"], string> = {
  small: "px-2 py-1 text-xs",
  medium: "px-4 py-2 text-sm",
  large: "px-6 py-3 text-lg",
};

const shapeClasses: Record<ButtonProps["shape"], string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-600 transition`}
    >
      {title}
    </button>
  );
};

export default Button;
