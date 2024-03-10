import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import styles from "./ColorPicker.module.scss";
import Swatch from "./Swatch";

const ColorPicker = ({
  selectedColors,
  selectCallback,
  removeCallback,
  clearCallback,
}) => {
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
        <div
          className={styles.button}
          onClick={() => {
            clearCallback();
          }}
        >
          clear
        </div>
        <section className="small example">
          <HexColorPicker color={currentColor} onChange={setCurrentColor} />
        </section>
        <div
          className={styles.button}
          onClick={() => {
            selectCallback(currentColor);
          }}
        >
          select color
        </div>
      </div>
      <div className="swatchHolder">{getSwatches()}</div>
    </>
  );
};

export default ColorPicker;
