import React, { CSSProperties } from 'react';

const FullscreenOutlined = ({
  style,
  className,
  size = 12,
  color = '#666',
}: {
  style?: CSSProperties;
  className?: string;
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      style={style}
      className={className}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M670.165333 414.165333l135.338667-135.338666L896 369.322667V128h-241.322667l90.496 90.496-135.338666 135.338667z m75.008 391.338667L654.677333 896H896v-241.322667l-90.496 90.496-135.338667-135.338666-60.330666 60.330666z m-391.338666-195.669333l-135.338667 135.338666L128 654.677333V896h241.322667l-90.496-90.496 135.338666-135.338667zM278.826667 218.496L369.322667 128H128v241.322667l90.496-90.496 135.338667 135.338666 60.330666-60.330666z"></path>
    </svg>
  );
};

export default FullscreenOutlined;
