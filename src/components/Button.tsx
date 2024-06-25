import React from "react";

interface Props {
  children: string;
  //color?: string; //se non metto color usa default "primary"
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
