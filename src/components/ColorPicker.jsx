import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import styles from "./ColorPicker.module.scss";

const ColorPicker = ({ callback }) => {
  const [color, setColor] = useState("#aabbcc");
  return (
    <>
      <div className={styles.holder}>
        <section className="small example">
          <HexColorPicker color={color} onChange={setColor} />
        </section>
        <button
          onClick={() => {
            callback(color);
          }}
        >
          select color
        </button>
      </div>
    </>
  );
};

export default ColorPicker;
