import React from 'react';

const LockFilled = ({
  size = 12,
  color = '#666',
  ...props
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M768 341.333333h-42.666667V256c0-119.466667-93.866667-213.333333-213.333333-213.333333S298.666667 136.533333 298.666667 256v85.333333H256c-46.933333 0-85.333333 38.4-85.333333 85.333334v426.666666c0 46.933333 38.4 85.333333 85.333333 85.333334h512c46.933333 0 85.333333-38.4 85.333333-85.333334V426.666667c0-46.933333-38.4-85.333333-85.333333-85.333334z m-256 384c-46.933333 0-85.333333-38.4-85.333333-85.333333s38.4-85.333333 85.333333-85.333333 85.333333 38.4 85.333333 85.333333-38.4 85.333333-85.333333 85.333333z m132.266667-384H379.733333V256c0-72.533333 59.733333-132.266667 132.266667-132.266667 72.533333 0 132.266667 59.733333 132.266667 132.266667v85.333333z" />
    </svg>
  );
};

export default LockFilled;
