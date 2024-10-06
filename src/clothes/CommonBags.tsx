import React from 'react';

const CommonBags = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 8.5 8"
      {...props}
    >
      <g transform="translate(0,-288.53332)">
        <path
          d="m 6.2429202,289.91269 -1.757095,0.47245 a 0.26458329,0.26458329 0 1 1 -0.0687,-0.25551 l 1.7571011,-0.47245 a 0.66145815,0.66145815 0 0 1 0.7405061,0.97648 l -0.9289363,1.5645 a 0.26458329,0.26458329 0 1 1 -0.2274999,-0.13508 l 0.9289359,-1.5645 a 0.39687484,0.39687484 0 0 0 -0.44431,-0.58589 z"
          fill="#000000"
          stroke="none"
        />
        <path
          d="m 5.4978292,290.25002 -0.1747451,0.19439 0.162795,0.21466 0.481126,-0.5352 z"
          fill="#000000"
          stroke="none"
        />
        <path
          d="m 5.9470251,291.4861 -0.854696,-1.12705 -0.2758239,0.0742 0.9847008,1.29848 z"
          fill="#000000"
          stroke="none"
        />
        <path
          d="m 6.1463701,292.18684 0.145819,-0.24559 0.475728,0.62733 -3.3105249,2.95889 -2.92822495,-3.86131 3.74226295,-2.38959 0.475728,0.62733 -0.2758171,0.0742 -0.263244,-0.34712 -3.29480885,2.10387 2.58161895,3.40427 2.9147069,-2.60511 z"
          fill="#000000"
          stroke="none"
        />
        <path
          d="m 2.7424032,294.80359 -0.384842,-0.50747 -0.143985,0.31678 z"
          fill="#000000"
          stroke="none"
        />
        <path
          d="m 6.6996212,292.25958 0.2474508,0.32631 v 0 a 0.26458329,0.26458329 0 0 0 0.133015,-0.49864 l -0.05532,-1.37957 -0.2480461,0.41775 0.03899,0.97242 a 0.26458329,0.26458329 0 0 0 -0.1158081,0.16147 z"
          fill="#000000"
          stroke="none"
        />
        <path
          d="m 6.5671872,291.47811 0.09232,0.0333 0.011441,0.28538 -0.2413119,-0.087 z"
          fill="#000000"
          stroke="none"
        />
        <path
          d="m 4.1946142,295.04599 -0.224224,0.2004 2.8019089,1.01035 1.1652009,-4.2845 -0.740632,-0.26707 0.011451,0.28539 0.409819,0.14778 -1.025878,3.77221 z"
          fill="#000000"
          stroke="none"
        />
      </g>
    </svg>
  );
};

export default CommonBags;