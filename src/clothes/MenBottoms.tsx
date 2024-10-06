import React from 'react';

const MenBottoms = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 130"
      {...props}
    >
      <path d="M106.2,127.5H73.6c-1,0-1.9-0.8-2-1.8L64,57.5l-7.7,68.2c-0.1,1-1,1.8-2,1.8H21.8c-0.6,0-1.1-0.2-1.5-0.7    c-0.4-0.4-0.6-1-0.5-1.6L35,11.4l0-8.9c0-0.5,0.2-1,0.6-1.4C36,0.7,36.5,0.5,37,0.5h54c1.1,0,2,0.9,2,2v8.9l15.2,113.8    c0.1,0.6-0.1,1.1-0.5,1.6C107.4,127.3,106.8,127.5,106.2,127.5z M75.4,123.5H104L89,11.8c0-0.1,0-0.2,0-0.3l0-7H39v7    c0,0.1,0,0.2,0,0.3L24,123.5h28.5L62,39.4c0.1-1,1-1.8,2-1.8c1,0,1.9,0.8,2,1.8L75.4,123.5z" />
      <path d="M54.4,12.5c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1v9C55.4,12.1,54.9,12.5,54.4,12.5z" />
      <path d="M73.6,12.5c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1v9C74.6,12.1,74.2,12.5,73.6,12.5z" />
      <path d="M64,40.2c-4.3,0-7.8-3.5-7.8-7.8V11.5c0-0.6,0.4-1,1-1H64c0.6,0,1,0.4,1,1v27.6C65,39.7,64.6,40.2,64,40.2z     M58.2,12.5v19.8c0,2.9,2.1,5.3,4.8,5.7V12.5H58.2z" />
      <path d="M93.3,28.3c-0.1,0-0.2,0-0.3,0c-17.5-5-16.1-16.8-16.1-16.9c0.1-0.5,0.6-0.9,1.1-0.9c0.5,0.1,0.9,0.6,0.9,1.1    c-0.1,0.4-1.1,10.2,14.7,14.7c0.5,0.2,0.8,0.7,0.7,1.2C94.2,28,93.8,28.3,93.3,28.3z" />
      <path d="M34.7,28.3c-0.4,0-0.8-0.3-1-0.7c-0.2-0.5,0.2-1.1,0.7-1.2c15.8-4.6,14.7-14.6,14.7-14.7    c-0.1-0.5,0.3-1,0.9-1.1c0.5-0.1,1.1,0.3,1.1,0.9c0,0.1,1.4,11.9-16.1,16.9C34.9,28.3,34.8,28.3,34.7,28.3z" />
      <path d="M91,12.5H37c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h54c0.6,0,1,0.4,1,1C92,12.1,91.5,12.5,91,12.5z" />
    </svg>
  );
};

export default MenBottoms;
