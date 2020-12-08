import React from "react";
const ColorBlock = props => {
  return <span style={{ width: "2px", height: "2px", background: `rgb(${props.color})`, margin: props.margin }}></span>;
};

export default ColorBlock;
