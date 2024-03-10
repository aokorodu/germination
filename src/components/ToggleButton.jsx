import { useState } from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = ({ random, callback }) => {
  const [selected, setSelected] = useState(random);
  return (
    <>
      <div className={styles.holder}>
        <div>choose colors</div>
        <svg
          width="60px"
          height="30px"
          viewBox="0 0 200 100"
          onClick={() => {
            setSelected(!selected);
            callback();
          }}
        >
          <rect
            x="0"
            y="0"
            width="200"
            height="100"
            fill="white"
            rx="50"
            ry="50"
          />
          <circle
            className={`${styles.svgbutton} ${
              selected ? styles.toggleOn : styles.toggleOff
            }`}
            cx={"50"}
            cy="50"
            r="45"
            fill="black"
            fillOpacity={0.5}
          />
        </svg>
        <div>random colors</div>
      </div>
    </>
  );
};

export default ToggleButton;
