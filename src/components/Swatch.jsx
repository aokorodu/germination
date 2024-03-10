import styles from "./Swatch.module.scss";

const Swatch = ({ color, callback }) => {
  return (
    <div
      className={styles.swatch}
      onClick={() => {
        callback(color);
      }}
      style={{ background: `${color}` }}
    >
      {/* <svg width="30" height="30" viewBox="0 0 30 30">
        <rect
          x="0"
          y="0"
          width="30"
          height="30"
          fill={color}
          stroke="#000"
          strokeWidth={1}
          rx={10}
          ry={10}
        />
      </svg> */}
    </div>
  );
};

export default Swatch;
