import React from 'react';

const WomenTops = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 130"
      {...props}
    >
      <path d="M101.4,120.3H26.6c-1.1,0-2-0.9-2-2V43.4l-6.3,5.5c-0.8,0.7-2.1,0.6-2.8-0.2L1,32c-0.7-0.8-0.6-2.1,0.2-2.8    l24.1-21c0.4-0.3,0.8-0.5,1.3-0.5h74.8c0.5,0,1,0.2,1.3,0.5l24.1,21c0.8,0.7,0.9,2,0.2,2.8l-14.5,16.7c-0.3,0.4-0.8,0.6-1.4,0.7    c-0.5,0-1.1-0.1-1.5-0.5l-6.3-5.5v74.9C103.4,119.4,102.5,120.3,101.4,120.3z M28.6,116.3h70.8V39c0-0.8,0.5-1.5,1.2-1.8    c0.7-0.3,1.6-0.2,2.1,0.3l8.1,7l11.9-13.6l-22-19.2H27.4l-22,19.2l11.9,13.6l8.1-7c0.6-0.5,1.4-0.6,2.1-0.3c0.7,0.3,1.2,1,1.2,1.8    V116.3z" />
      <path d="M64,32.2c-12.4,0-22.5-10.1-22.5-22.5c0-0.6,0.4-1,1-1h43.1c0.6,0,1,0.4,1,1C86.5,22.1,76.4,32.2,64,32.2z     M43.5,10.7C44,21.6,53,30.2,64,30.2s20-8.7,20.5-19.5H43.5z" />
      <path d="M71,91.5C71,91.5,71,91.5,71,91.5c-0.3,0-0.5-0.1-0.7-0.3c0,0-3.4-3.6-7-7.8c-0.4-0.4-0.3-1.1,0.1-1.4    c0.4-0.4,1.1-0.3,1.4,0.1c2.5,3,5,5.7,6.2,7c4.5-4.8,14.1-15.7,14.1-19.9c0-3.9-3.2-7.1-7.1-7.1c-2.5,0-4.9,1.4-6.2,3.6    c-0.3,0.5-0.9,0.6-1.4,0.4c-0.5-0.3-0.6-0.9-0.4-1.4c1.6-2.8,4.7-4.6,7.9-4.6c5,0,9.1,4.1,9.1,9.1c0,6-13.9,20.4-15.4,22    C71.5,91.4,71.2,91.5,71,91.5z" />
      <path d="M57,91.5C57,91.5,57,91.5,57,91.5c-0.3,0-0.5-0.1-0.7-0.3c-1.6-1.6-15.4-16.1-15.4-22c0-5,4.1-9.1,9.1-9.1    c2.7,0,5.3,1.2,7,3.3c1.7-2.1,4.3-3.3,7-3.3c5,0,9.1,4.1,9.1,9.1c0,6-13.9,20.4-15.4,22C57.6,91.4,57.3,91.5,57,91.5z M50,62    c-3.9,0-7.1,3.2-7.1,7.1c0,4.1,9.6,15.1,14.2,19.9c4.5-4.8,14.2-15.7,14.2-19.9c0-3.9-3.2-7.1-7.1-7.1c-2.5,0-4.9,1.4-6.2,3.6    c-0.4,0.6-1.4,0.6-1.7,0C54.9,63.4,52.5,62,50,62z" />
    </svg>
  );
};

export default WomenTops;