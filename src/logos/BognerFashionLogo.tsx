import React from 'react';

const BognerFashionLogo = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 40"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Artboard</title>
      <g
        id="Artboard"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <image
          id="Bogner-Logo.svg"
          x="1"
          y="0"
          width="138.613333"
          height="23"
          xlinkHref="data:image/png;base64,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"
        />
        <text
          id="Fashion"
          fontFamily="NunitoSans-Regular, Nunito Sans"
          fontSize="14"
          fontWeight="normal"
          letterSpacing="-0.35"
          fill="#000000"
        >
          <tspan x="44.984" y="37">
            Fashion
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default BognerFashionLogo;
