import React from "react";
import Styles from "../styles";
const Spacing = props => {
  const updateMargin = isIncr => {
    if (isIncr) props.changeMargin(props.margin + 0.1);
    else props.changeMargin(props.margin - 0.1);
  };
  return (
    <div>
      <span style={Styles.subHeading}>Manage Colour Spacing</span>
      <button style={Styles.circleBtn} onClick={() => updateMargin(true)} disabled={props.margin >= 0.9}>
        +
      </button>
      <span>{props.margin.toFixed(1)}&nbsp;</span>
      <button style={Styles.circleBtn} onClick={() => updateMargin(false)} disabled={props.margin <= 0.1}>
        -
      </button>
    </div>
  );
};

export default Spacing;
