import React from 'react';

const ChildrenProductSets = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 130"
      {...props}
    >
      <path d="M19.7,66.2c-0.3,0-0.7-0.1-1-0.3l-9-5.2C8.7,60.1,8.4,59,8.9,58L37.7,4.2c0.3-0.5,0.7-0.8,1.2-1    c0.5-0.2,1.1-0.1,1.5,0.2c0.5,0.3,0.8,0.8,1,1.3C43.1,11.3,44,18,44,24.8v3.8c0,0.4-0.1,0.7-0.3,1.1L21.4,65.3    C21,65.9,20.4,66.2,19.7,66.2z M13.4,58.2l5.7,3.3L40,28.1v-3.3c0-4.7-0.4-9.4-1.3-14L13.4,58.2z" />
      <path d="M108.3,66.2c-0.7,0-1.3-0.3-1.7-0.9L84.3,29.7C84.1,29.4,84,29,84,28.7v-3.9c0-6.7,0.9-13.5,2.5-20    c0.1-0.6,0.4-1.1,1-1.4c0.5-0.3,1-0.3,1.6-0.2c0.5,0.1,1,0.5,1.2,1L119.1,58c0.5,1,0.2,2.1-0.8,2.7l-9,5.2    C109,66.1,108.6,66.2,108.3,66.2z M88,28.1L109,61.5l5.7-3.3L89.3,10.9c-0.9,4.6-1.3,9.3-1.3,14V28.1z" />
      <path d="M86,70H42c-1.1,0-2-0.9-2-2V24.8c0-6.5-0.8-12.9-2.4-19.1c-0.1-0.5-0.1-1.1,0.2-1.5c0.3-0.5,0.7-0.8,1.3-0.9    l11.2-2.7c0.5-0.1,1.1,0,1.5,0.3c7.4,4.7,17,4.7,24.5,0c0.5-0.3,1-0.4,1.5-0.3L89,3.2c0.5,0.1,1,0.5,1.2,0.9    c0.3,0.5,0.4,1,0.2,1.5l0,0.1C88.8,12,88,18.4,88,24.8V68C88,69.1,87.1,70,86,70z M44,66h40V24.8c0-6.1,0.7-12.2,2.1-18.2l-8.4-2    c-8.4,5-18.9,5-27.3,0l-8.4,2c1.4,6,2.1,12.1,2.1,18.2V66z" />
      <path d="M83.1,127.5H70.9c-1,0-1.8-0.7-2-1.6L64,101.1l-4.9,24.8c-0.2,0.9-1,1.6-2,1.6H44.9c-1.1,0-2-0.9-2-2V68    c0-1.1,0.9-2,2-2h38.2c1.1,0,2,0.9,2,2v57.5C85.1,126.6,84.2,127.5,83.1,127.5z M72.5,123.5h8.6V70H46.9v53.5h8.6L62,90.4    c0.2-0.9,1-1.6,2-1.6c1,0,1.8,0.7,2,1.6L72.5,123.5z" />
      <path d="M24.6,57.3c-0.2,0-0.4,0-0.5-0.2l-9.4-5.9c-0.5-0.3-0.6-0.9-0.3-1.4c0.3-0.5,0.9-0.6,1.4-0.3l9.4,5.9    c0.5,0.3,0.6,0.9,0.3,1.4C25.3,57.2,25,57.3,24.6,57.3z" />
      <path d="M103.3,57.2c-0.3,0-0.7-0.2-0.8-0.5c-0.3-0.5-0.1-1.1,0.3-1.4l9.4-5.9c0.5-0.3,1.1-0.1,1.4,0.3    c0.3,0.5,0.1,1.1-0.3,1.4l-9.4,5.9C103.6,57.1,103.5,57.2,103.3,57.2z" />
    </svg>
  );
};

export default ChildrenProductSets;