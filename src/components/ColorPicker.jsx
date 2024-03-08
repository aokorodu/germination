import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import styles from "./ColorPicker.module.scss";
import Swatch from "./Swatch";

const ColorPicker = ({ selectedColors, selectCallback, removeCallback }) => {
  const [currentColor, setCurrentColor] = useState("#aabbcc");
  const getSwatches = () => {
    const arr = [];
    selectedColors.forEach((c) => {
      arr.push(<Swatch color={c} callback={removeCallback} />);
    });

    return arr;
  };

  return (
    <>
      <div className={styles.holder}>
        <section className="small example">
          <HexColorPicker color={currentColor} onChange={setCurrentColor} />
        </section>
        <button
          onClick={() => {
            selectCallback(currentColor);
          }}
        >
          select color
        </button>
      </div>
      <div className="swatchHolder">{getSwatches()}</div>
    </>
  );
};

export default ColorPicker;
