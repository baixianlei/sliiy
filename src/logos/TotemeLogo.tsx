import React from 'react';

const TotemeLogo = ({
  width,
  height = 50,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.69 56.69"
    >
      <g>
        <title>Totême</title>
        <path d="M1.58 29.11h5.08v20.84h43.37V29.11h5.08v25.98H1.58V29.11zM42.75 8.34h5.7V27.5h-5.7V8.34zm-5.28 20.77h10.98v8.75H37.47v-8.75zm0 10.35h10.98v8.88H37.47v-8.88zm-7.82-11.95c4.66-.65 8.25-4.69 8.25-9.59 0-4.88-3.56-8.91-8.19-9.58h11.31V27.5H29.65zm-8.72 4.35l6.45 12.62h1.94l6.45-12.62v16.48H20.93V31.86zm14.35-2.75l-6.94 13.56-6.94-13.56h13.88zM28.35 9.85c4.38 0 7.94 3.61 7.94 8.07 0 4.46-3.56 8.07-7.94 8.07-4.39 0-7.94-3.61-7.94-8.07 0-4.45 3.55-8.07 7.94-8.07M15.64 27.51V8.34h11.34c-4.63.67-8.19 4.7-8.19 9.58 0 4.9 3.59 8.94 8.25 9.59h-11.4zM8.24 8.34h5.67V27.5H8.24V8.34zm10.99 40.01H8.24v-8.88h10.99v8.88zM8.24 29.11h10.99v8.75H8.24v-8.75zM1.58 1.6h53.53v25.91h-5.08V6.75H6.66v20.76H1.58V1.6zM0 56.69h56.69V0H0v56.69z" />
      </g>
    </svg>
  );
};

export default TotemeLogo;
