import React from 'react';

const IndexIcon = ({
  size = 12,
  ...props
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 160"
      {...props}
    >
      <path d="M116.5,69.8c-0.5,0-1-0.2-1.4-0.6l-26-25c-0.4-0.4-0.6-0.9-0.6-1.4l-0.1-4.6c-2.3-11.7,1.7-26.4,2.2-28.2    c0.1-0.3,0.2-0.6,0.5-0.9c0.4-0.5,1-0.7,1.6-0.7c0.6,0,1.2,0.3,1.5,0.8l32.9,46.7c0.5,0.7,0.5,1.8-0.1,2.5l-9,10.5    C117.7,69.5,117.1,69.7,116.5,69.8C116.6,69.8,116.5,69.8,116.5,69.8z M92.5,41.9l23.9,22.9l6.6-7.7L93.5,15.2    c-1.2,5.3-2.7,14.8-1.1,22.4c0,0.1,0,0.2,0,0.3L92.5,41.9z" />
      <path d="M11.5,69.8C11.5,69.8,11.4,69.8,11.5,69.8c-0.6,0-1.2-0.3-1.5-0.7L1,58.5c-0.6-0.7-0.6-1.7-0.1-2.5L33.8,9.3    c0.4-0.5,0.9-0.8,1.6-0.8c0.7,0,1.2,0.2,1.6,0.7c0.2,0.3,0.4,0.6,0.4,1c0.6,2,4.5,16.5,2.2,28.1l-0.1,4.6c0,0.5-0.2,1-0.6,1.4    l-26,24.9C12.5,69.6,12,69.8,11.5,69.8z M5,57.1l6.6,7.7l23.8-22.9l0.1-3.9c0-0.1,0-0.2,0-0.3c1.6-7.6,0-17.1-1.1-22.4L5,57.1z" />
      <path d="M52.2,5.4c-0.4,0-0.8-0.1-1.1-0.3c-0.5-0.3-0.8-0.9-0.9-1.5c0-0.1,0-0.2,0-0.2c0-1.1,0.9-2,2-2h0.1    c1,0,1.8,0.7,2,1.6c0.2,0.9-0.3,1.9-1.2,2.2L53,5.3C52.7,5.4,52.4,5.4,52.2,5.4z" />
      <path d="M90.8,126.6c-3.2,0-6.9-1-10.5-3.1c-6.3-3.7-10.2-9.7-9.4-14.6c0.1-0.9,0.1-2-0.2-3.3l-3.3-12.3    c0,0,0-0.1,0-0.1c-0.4-2.1-2-2.8-3.4-2.8h0c-1.4,0-3,0.7-3.4,2.8c0,0,0,0.1,0,0.1l-3.3,12.3c-0.3,1.3-0.3,2.4-0.2,3.3    c0.8,4.9-3.1,10.9-9.4,14.6c-7.7,4.5-16.2,4-19.2-1.1c-1.8-3.1-1.2-7.2,1.5-11c2.3-3.3,3.6-7.5,3.7-12L35.6,38c0-0.1,0-0.2,0-0.3    c2.3-11.3-2.1-26.4-2.1-26.6c-0.3-1,0.2-2,1.1-2.4l16.7-7.1c1-0.4,2.2,0,2.6,1.1c0.4,1,0,2.2-1.1,2.6l-15,6.4    c1.1,4.5,3.8,16.6,1.8,26.6l-1.9,61.2c-0.1,5.3-1.7,10.3-4.5,14.2c-1.8,2.5-2.3,5.1-1.3,6.7c1.8,3.1,8.1,3,13.7-0.3    c5.5-3.2,7.9-7.7,7.4-10.5c-0.2-1.4-0.2-3,0.2-4.8c0,0,0-0.1,0-0.1l3.3-12.3c0.7-3.6,3.7-6,7.3-6c0,0,0,0,0,0c3.7,0,6.6,2.4,7.3,6    l3.3,12.3c0,0,0,0.1,0,0.1c0.4,1.9,0.4,3.4,0.2,4.8c-0.4,2.8,2,7.3,7.4,10.5c5.6,3.3,11.9,3.4,13.7,0.3c1-1.7,0.5-4.2-1.3-6.7    c-2.8-4-4.3-8.9-4.5-14.2l-1.9-61.2c-2-10,0.6-22.1,1.8-26.6l-15-6.4c-1-0.4-1.5-1.6-1.1-2.6c0.4-1,1.6-1.5,2.6-1.1l16.7,7.1    c0.9,0.4,1.4,1.4,1.1,2.4c0,0.2-4.5,15.3-2.1,26.6c0,0.1,0,0.2,0,0.3l1.9,61.4c0.1,4.6,1.4,8.7,3.7,12c2.7,3.9,3.3,8,1.5,11    C97.9,125.2,94.6,126.6,90.8,126.6z" />
      <path d="M63.9,10.9c-7.2,0-12.9-2.8-13.7-6.6c0,0,0,0,0-0.1c-0.4-1,0-2.2,1-2.6l0.1,0c0.6-0.3,1.3-0.2,1.9,0.2    c0.6,0.4,0.9,1,0.9,1.6c0,1.2,3.5,3.5,9.8,3.5c6.1,0,9.8-2.3,9.8-3.5c0-0.7,0.3-1.3,0.9-1.7c0.6-0.4,1.3-0.4,1.9-0.2l0.2,0.1    c1,0.4,1.5,1.6,1.1,2.6c-0.1,0.2-0.1,0.3-0.2,0.4C76.4,8.3,71,10.9,63.9,10.9z" />
      <path d="M64,18.6c-7.1,0-12.9-6.8-12.9-15.1c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1c0,7.2,4.9,13.1,10.9,13.1    c6,0,10.9-5.9,10.9-13.1c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1C76.9,11.8,71.1,18.6,64,18.6z" />
      <path d="M43.6,111.1c-0.5,0-1-0.4-1-1c-2.3-87.9,20.3-93.3,21.2-93.5c0.5-0.1,1.1,0.2,1.2,0.8    c0.1,0.5-0.2,1.1-0.8,1.2c-0.3,0.1-21.9,6.1-19.6,91.5C44.6,110.6,44.1,111.1,43.6,111.1C43.6,111.1,43.6,111.1,43.6,111.1z" />
    </svg>
  );
};

export default IndexIcon;