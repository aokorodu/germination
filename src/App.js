import "./App.css";
import { useEffect } from "react";
import Vine from "./components/Vine";
import Perlin from "perlin.js";

function App() {
  useEffect(() => {});
  const numberOfVines = 10 + Math.round(Math.random() * 30);
  const defX = 500;

  const generatePerlinePoints = () => {
    Perlin.seed(Math.random());
    let startX = defX;
    const maxY = 200 + Math.round(Math.random() * 650);
    let range = 0;
    const arr = [];
    const rangeIncrement = 0.1 + Math.random() * 0.3;
    for (let i = 0; i < maxY; i++) {
      const ypos = 1000 - i;
      const dx = Perlin.simplex2(defX, ypos / 300) * range;
      const xpos = startX + dx;
      const pt = {
        x: Math.round(xpos),
        y: ypos,
      };

      arr.push(pt);

      range += rangeIncrement;
    }

    return arr;
  };

  const getVines = () => {
    const arr = [];

    for (let i = 0; i < numberOfVines; i++) {
      const pts = generatePerlinePoints();
      arr.push(<Vine points={pts} />);
    }

    return arr;
  };

  return (
    <div className="App">
      <svg width="500" height="500" viewBox="0 0 1000 1000">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="3"
              flood-color="white"
              flood-opacity="1"
            />
          </filter>
          <g id="flower">
            <g transform="translate(-35 -35)">
              <path d="M34.7603 0C27.4531 9.79162 16.572 34.8515 34.7603 34.8515C52.8456 34.8515 42.0675 13.4427 34.7603 0Z" />
              <path d="M34.7149 69.8492C42.169 60.1693 53.4269 35.2769 35.2407 35.0017C17.1575 34.7279 27.6114 56.2974 34.7149 69.8492Z" />
              <path d="M34.7603 0C27.4531 9.79162 16.572 34.8515 34.7603 34.8515C52.8456 34.8515 42.0675 13.4427 34.7603 0Z" />
              <path d="M34.7149 69.8492C42.169 60.1693 53.4269 35.2769 35.2407 35.0017C17.1575 34.7279 27.6114 56.2974 34.7149 69.8492Z" />
              <path d="M0.0564831 35.0356C9.79001 42.4139 34.7456 53.4637 34.8487 35.245C34.9512 17.1295 13.5178 27.797 0.0564831 35.0356Z" />
              <path d="M69.7883 35.4888C60.1683 27.9658 35.384 16.5438 35.0031 34.7588C34.6243 52.8706 56.2181 42.5252 69.7883 35.4888Z" />
            </g>
            <circle cx="0" cy="0" r="6" fill="white" fillOpacity={0.3} />
          </g>
          <g id="ball">
            <circle cx="0" cy="0" r="3" fill="white" fillOpacity={0.8} />
          </g>
          <radialGradient
            id="paint0_radial_1150_1431"
            cx="0"
            cy="1000"
            r="1000"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#535353" />
            <stop offset="1" stop-color="#222222" />
          </radialGradient>
        </defs>

        <rect
          width="1000"
          height="1000"
          stroke="grey"
          fill="url(#paint0_radial_1150_1431)"
        />
        <text
          className="titleText"
          x="30"
          y="970"
          textAnchor="start"
          dominantBaseline={"baseline"}
          fill="white"
          fontSize={40}
        >
          zuubaDigital
        </text>
        <text
          className="dateText"
          x="970"
          y="970"
          textAnchor="end"
          dominantBaseline={"baseline"}
          fill="white"
          fontSize={30}
        >
          02.20.2024
        </text>
        <g className="vineholder">{getVines()}</g>
      </svg>
    </div>
  );
}

export default App;
