import React from "react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    
  const [selectedLike, setSelectedLike] = useState(false);

  function toggle() {
    setSelectedLike(!selectedLike);
    onClick();
  }

  if (selectedLike) return <FaHeart onClick={toggle} size={100}></FaHeart>;
  else return <FaRegHeart onClick={toggle} size={100}></FaRegHeart>;
};

export default Like;
