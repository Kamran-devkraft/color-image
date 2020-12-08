import React, { useState } from "react";
import ColorBlock from "../components/color-block";
import Spacing from "../components/spacing";
import Styles from "../styles";
const Home = () => {
  const [margin, setMargin] = useState(0.4);
  const [currentPattern, setCurrentPattern] = useState(1);
  const changeMargin = newMargin => {
    setMargin(newMargin);
  };
  const shuffleColors = () => {
    setCurrentPattern(Math.floor(Math.random() * Math.floor(6)));
  };
  return (
    <div>
      <div style={Styles.container}>
        <h2>COLOUR GENERATED IMAGE</h2>
        <div style={Styles.spacingContainer}>
          <Spacing margin={margin} changeMargin={changeMargin} />
          <button onClick={shuffleColors}>Shuffle Colors</button>
        </div>
        <div style={Styles.imageContainer}>
          {Array.apply(null, { length: 32 }).map(function(e, r) {
            return Array.apply(null, { length: 32 }).map(function(e, g) {
              return Array.apply(null, { length: 32 }).map(function(e, b) {
                let color = "";
                switch (currentPattern) {
                  case 1:
                    color = (r + 1) * 8 + "," + (g + 1) * 8 + "," + (b + 1) * 8;
                    break;
                  case 2:
                    color = (r + 1) * 8 + "," + (b + 1) * 8 + "," + (g + 1) * 8;
                    break;
                  case 3:
                    color = (g + 1) * 8 + "," + (b + 1) * 8 + "," + (r + 1) * 8;
                    break;
                  case 4:
                    color = (g + 1) * 8 + "," + (r + 1) * 8 + "," + (b + 1) * 8;
                    break;
                  case 5:
                    color = (b + 1) * 8 + "," + (g + 1) * 8 + "," + (r + 1) * 8;
                    break;
                  case 6:
                    color = (b + 1) * 8 + "," + (r + 1) * 8 + "," + (g + 1) * 8;
                    break;
                  default:
                    color = (r + 1) * 8 + "," + (g + 1) * 8 + "," + (b + 1) * 8;
                }
                return <ColorBlock wait={1000} key={color} color={color} margin={margin} />;
              });
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
