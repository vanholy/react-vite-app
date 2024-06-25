import React from "react";

interface Props {
  children: string;
  //color?: string; //se non metto color usa default "primary"
  color?: "primary" | "secondary" | "danger";
  onClick: (item: string) => void;
}

const Button2 = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={() => onClick(color)}>
      {children}
    </button>
  );
};

export default Button2;
