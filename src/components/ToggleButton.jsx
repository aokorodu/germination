import { useState } from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = ({ label, callback }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => {
        setSelected(!selected);
        callback();
      }}
      className={`${styles.button} ${
        selected ? styles.selected : styles.deselected
      }`}
    >
      {label}
    </div>
  );
};

export default ToggleButton;
