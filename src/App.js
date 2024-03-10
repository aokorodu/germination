import "./App.css";
import { useEffect, useState } from "react";
import Vine from "./components/Vine";
import Perlin from "perlin.js";
import ColorPicker from "./components/ColorPicker";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [chooseColorMode, setChooseColorMode] = useState(false);
  const [randomColors, setRandomColors] = useState(true);
  const [colors, setColors] = useState([]);
  const [germinating, setGermination] = useState(false);
  useEffect(() => {});
  const numberOfVines = 5 + Math.round(Math.random() * 55);
  const defX = 500;

  const getTodaysDate = () => {
    const d = new Date();
    const date = d.getDate();
    const year = d.getFullYear();
    const month = d.getMonth();

    return `zuubaDigital ~ ${month + 1}.${date}.${year}`;
  };

  const generatePerlinePoints = () => {
    const curveDenominator = 300 + Math.round(Math.random() * 600);
    Perlin.seed(Math.random());
    let startX = defX;
    const maxY = 300 + Math.round(Math.random() * 550);
    let range = 0;
    const arr = [];
    const rangeIncrement = 1 + Math.random() * 3;
    for (let i = 0; i < maxY; i = i + 10) {
      const ypos = 1000 - i;
      const dx = Perlin.simplex2(defX, ypos / curveDenominator) * range;
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

  const getColor = () => {
    const num = colors.length;

    if (randomColors | (num == 0)) return "random";
    const ind = Math.floor(Math.random() * num);
    return colors[ind];
  };

  const toggleColorMode = () => {
    setRandomColors(!randomColors);
  };

  const removeSwatch = (c) => {
    const newArr = colors.filter((color) => {
      return color != c;
    });
    setColors(newArr);
  };

  const clearSwatches = () => {
    setColors([]);
  };

  const getVines = () => {
    const arr = [];

    for (let i = 0; i < numberOfVines; i++) {
      const pts = generatePerlinePoints();
      arr.push(<Vine points={pts} flowerColor={getColor()} />);
    }

    return arr;
  };

  return (
    <div className="App">
      <div className="svgholder">
        {germinating && (
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="clippy">
                <circle cx="500" cy="500" r="500" fill="none" />
              </clipPath>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3"
                  floodColor="white"
                  floodOpacity="1"
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
              <g id="flower_2">
                <g transform="translate(-20 -20)">
                  <path
                    fillOpacity="1"
                    d="M40 19.8293C40 22.2084 28.2995 25.267 20 24.6744L20 15.2491C28.0333 14.0488 40 17.4503 40 19.8293Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M0 19.6688C3.11977e-07 17.2897 11.7005 14.6565 20 15.2491V24.6701C11.9667 25.8703 -3.11977e-07 22.0479 0 19.6688Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M19.8293 0C22.2084 0 25.267 11.7005 24.6744 20L15.2491 20C14.0488 11.9667 17.4503 0 19.8293 0Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M19.6688 40C17.2897 40 14.6565 28.2995 15.2491 20H24.6701C25.8703 28.0333 22.0479 40 19.6688 40Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M30.5555 31.3708C29.2683 32.658 21.2829 27.9823 17.113 23.1712L22.2126 18.0716C27.2085 21.7686 31.8427 30.0836 30.5555 31.3708Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M9.00026 9.64184C10.2875 8.35464 18.0428 13.2605 22.2126 18.0716L17.1154 23.1688C12.1195 19.4718 7.71306 10.929 9.00026 9.64184Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M30.3708 9.72874C31.658 11.0159 26.9823 19.0014 22.1712 23.1713L17.0716 18.0716C20.7686 13.0758 29.0836 8.44154 30.3708 9.72874Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M8.64186 31.284C7.35466 29.9968 12.2605 22.2415 17.0716 18.0716L22.1689 23.1689C18.4719 28.1647 9.92906 32.5712 8.64186 31.284Z"
                  />

                  <circle cx="20" cy="20" r="5" fill="white" fillOpacity=".1" />
                </g>
              </g>
              <radialGradient
                id="paint0_radial_1150_1431"
                cx="0"
                cy="1000"
                r="1000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3c342f" />
                <stop offset="1" stopColor="#1f1c1a" />
              </radialGradient>
              <radialGradient id="glow">
                <stop offset="0%" stopColor="red" />
                <stop offset="100%" stopColor="blue" />
              </radialGradient>

              <g id="ball">
                <circle cx="0" cy="0" r="4" fill="white" />
              </g>
            </defs>
            <circle
              cx="500"
              cy="500"
              r="498"
              fill="url(#paint0_radial_1150_1431)"
            />
            <g className="vineholder" clipPath="url(#clippy)">
              {getVines()}
            </g>
            <text
              className="loadingText"
              x="500"
              y="500"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#7d7167"
              fillOpacity={0.8}
              fontSize={50}
            >
              building flowers...
            </text>
            <circle
              cx="500"
              cy="500"
              r="498"
              stroke="black"
              strokeWidth={4}
              strokeOpacity={1}
              fill="none"
            />
          </svg>
        )}
        {!germinating && (
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="clippy">
                <circle cx="500" cy="500" r="500" fill="none" />
              </clipPath>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="3"
                  floodColor="white"
                  floodOpacity="1"
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
              <g id="flower_2">
                <g transform="translate(-20 -20)">
                  <path
                    fillOpacity="1"
                    d="M40 19.8293C40 22.2084 28.2995 25.267 20 24.6744L20 15.2491C28.0333 14.0488 40 17.4503 40 19.8293Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M0 19.6688C3.11977e-07 17.2897 11.7005 14.6565 20 15.2491V24.6701C11.9667 25.8703 -3.11977e-07 22.0479 0 19.6688Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M19.8293 0C22.2084 0 25.267 11.7005 24.6744 20L15.2491 20C14.0488 11.9667 17.4503 0 19.8293 0Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M19.6688 40C17.2897 40 14.6565 28.2995 15.2491 20H24.6701C25.8703 28.0333 22.0479 40 19.6688 40Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M30.5555 31.3708C29.2683 32.658 21.2829 27.9823 17.113 23.1712L22.2126 18.0716C27.2085 21.7686 31.8427 30.0836 30.5555 31.3708Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M9.00026 9.64184C10.2875 8.35464 18.0428 13.2605 22.2126 18.0716L17.1154 23.1688C12.1195 19.4718 7.71306 10.929 9.00026 9.64184Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M30.3708 9.72874C31.658 11.0159 26.9823 19.0014 22.1712 23.1713L17.0716 18.0716C20.7686 13.0758 29.0836 8.44154 30.3708 9.72874Z"
                  />
                  <path
                    fillOpacity="1"
                    d="M8.64186 31.284C7.35466 29.9968 12.2605 22.2415 17.0716 18.0716L22.1689 23.1689C18.4719 28.1647 9.92906 32.5712 8.64186 31.284Z"
                  />

                  <circle cx="20" cy="20" r="5" fill="white" fillOpacity=".1" />
                </g>
              </g>
              <radialGradient
                id="paint0_radial_1150_1431"
                cx="0"
                cy="1000"
                r="1000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3c342f" />
                <stop offset="1" stopColor="#1f1c1a" />
              </radialGradient>
              <radialGradient id="glow">
                <stop offset="0%" stopColor="red" />
                <stop offset="100%" stopColor="blue" />
              </radialGradient>

              <g id="ball">
                <circle cx="0" cy="0" r="4" fill="white" />
              </g>
            </defs>
            <circle
              cx="500"
              cy="500"
              r="498"
              fill="url(#paint0_radial_1150_1431)"
            />
            <text
              x="500"
              y="500"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#7d7167"
              fillOpacity={0.8}
              fontSize={50}
            >
              ~ you know what to do ~
            </text>
            <circle
              cx="500"
              cy="500"
              r="498"
              stroke="black"
              strokeWidth={4}
              strokeOpacity={1}
              fill="none"
            />
          </svg>
        )}
      </div>
      <div id="controls">
        <div
          id="growButton"
          className="controlButton"
          onClick={() => {
            setGermination(!germinating);
          }}
        >
          {germinating ? "clear" : "grow"}
        </div>
        <div
          id="choose-color-button"
          className="controlButton"
          onClick={() => {
            setChooseColorMode(!chooseColorMode);
          }}
        >
          color mode
        </div>
      </div>
      {chooseColorMode && (
        <div className={"pickerHolder"}>
          <div
            className="closeButton"
            onClick={() => {
              setChooseColorMode(false);
            }}
          >
            <svg width="30px" height="30px" viewBox="0 0 100 100">
              <line
                x1={0}
                y1={0}
                x2={50}
                y2={50}
                stroke="white"
                strokeWidth={10}
              />
              <line
                x1={50}
                y1={0}
                x2={0}
                y2={50}
                stroke="white"
                strokeWidth={10}
              />
            </svg>
          </div>
          <ToggleButton
            random={randomColors}
            label={randomColors ? "random color mode" : "choose colors"}
            callback={toggleColorMode}
          />
          {!randomColors && (
            <ColorPicker
              selectedColors={colors}
              removeCallback={(c) => {
                removeSwatch(c);
              }}
              selectCallback={(c) => {
                console.log("callback", c);
                setColors((oldColors) => [...oldColors, c]);
              }}
              clearCallback={() => {
                clearSwatches();
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
