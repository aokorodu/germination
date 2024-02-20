const Leaf = ({ x, y }) => {
  const angle = 90 + Math.round(Math.random() * 180);
  const delay = `${((1000 - y) / 1000) * 10 + 3}s`;
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(.75)`}>
      {/* <circle cx={x} cy={y} r="5" fill="green" /> */}
      <g transform="translate(-10, 0)">
        <path
          d="M10 1C4 8-7 37 10 37c20 0 8-27 0-36ZM10 7v27"
          fill="green"
          fillOpacity={0.4}
          transform="scale(0)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="0;1"
            dur="3s"
            begin={delay}
            fill="freeze"
          />
        </path>
      </g>
    </g>
  );
};

export default Leaf;
