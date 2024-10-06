import React from 'react';

const ColmarLogo = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 66 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="66" height="22" fill="url(#pattern-colmar)" />
      <defs>
        <pattern
          id="pattern-colmar"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_338_52446"
            transform="translate(-0.00154321) scale(0.00308642 0.00925926)"
          />
        </pattern>
        <image
          id="image0_338_52446"
          width="325"
          height="108"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default ColmarLogo;