import { useRef, useEffect } from "react";

import styles from "./Vine.module.scss";
import cx from "classnames";
import Leaf from "./MyLeaf.jsx";

const Vine = ({ points, flowerColor }) => {
  const pathPoints = points;
  const pathRef = useRef(null);
  const animRef = useRef(null);
  const leafHolderRef = useRef(null);
  const animationDelay = 1;
  const c = flowerColor;

  useEffect(() => {
    drawPath();
  });

  const maxY = pathPoints.length;
  const maxScale = 1 + Math.random() * 2;

  const getColor = () => {
    if (c != "random") return c;

    const h = Math.round(Math.random() * 360);
    const s = 50 + Math.round(Math.random() * 50);
    const l = 40 + Math.round(Math.random() * 50);

    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  const drawPath = () => {
    let str = "M";
    pathPoints.forEach((pt) => {
      str = `${str} ${Math.round(pt.x)},${pt.y} L`;
    });

    pathRef.current.setAttribute("d", str);
    animRef.current.setAttribute("path", str);
  };

  const getRotationValues = () => {
    let str = "0; ";
    const num = 2;
    for (let i = 0; i < num; i++) {
      const val = Math.round(Math.random() * 360);
      str = `${str} ${val};`;
    }

    return str;
  };

  const getFlower = () => {
    const rand = Math.round(Math.random() * 10);
    let id = "#ball";
    if (rand < 2) {
      id = "#ball";
    } else if (rand < 8) {
      id = "#flower";
    } else {
      id = "#flower_2";
    }
    //const flower = Math.random() > 0.3 ? "#flower_2" : "#ball";
    return id;
  };

  const getLeaves = () => {
    const arr = [];
    const num = 1 + Math.round(Math.random());
    for (let i = 0; i < num; i++) {
      const pt =
        pathPoints[
          Math.floor(Math.random() * Math.round(pathPoints.length * 0.7))
        ];
      const xpos = pt.x;
      const ypos = pt.y;
      arr.push(<Leaf key={ypos} x={xpos} y={ypos} />);
    }

    return arr;
  };

  return (
    <>
      <path
        className={cx(styles.vine, styles.on)}
        ref={pathRef}
        d=""
        stroke="black"
        strokeWidth={2}
        strokeOpacity={0.1}
        fill="none"
        pathLength={100}
        strokeDasharray={[100, 100]}
        strokeDashoffset={100}
      />
      <g ref={leafHolderRef}>{getLeaves()}</g>
      <use
        href={getFlower()}
        x="0"
        y="0"
        fill={getColor()}
        stroke="none"
        fillOpacity={0.6}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          begin={`${animationDelay}s`}
          dur="10s"
          additive="sum"
          fill="freeze"
          values={getRotationValues()}
          keyTimes="0; .5; 1"
          calcMode="spline"
          keySplines=".4 0 .5 1; .4 0 .5 1"
        ></animateTransform>
        <animateTransform
          attributeName="transform"
          type="scale"
          values={`0; ${maxScale}`}
          begin={`${animationDelay}s`}
          dur="10s"
          additive="sum"
          fill="freeze"
        ></animateTransform>
        <animateMotion
          ref={animRef}
          // rotate="auto"
          dur="10s"
          begin={`${animationDelay}s`}
          path=""
          fill="freeze"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.42, 0.0, 0.58, 1.0"
          keyPoints="0;1"
        />
      </use>
    </>
  );
};

export default Vine;
