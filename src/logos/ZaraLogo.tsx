import React from 'react';

const ZaraLogo = ({
  width,
  height = 45,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.8227 0.0108182L38.8972 16.4971L41 16.4977V16.6161H34.3071V16.4977H36.2775L34.28 11.0763H30.2254V11.0784L30.2471 11.1415C30.409 11.62 30.4894 12.1213 30.4844 12.6261V14.6583C30.4844 15.7037 30.9485 16.7632 31.8346 16.7632C32.3549 16.7632 32.7702 16.5809 33.2647 16.1308L33.3352 16.1961C32.7981 16.7601 32.1477 17 31.1724 17C30.4363 17 29.8064 16.8238 29.2995 16.4767L29.2035 16.4081C28.5363 15.9061 28.1033 15.0858 27.917 13.9694L27.8871 13.7892L27.8561 13.5165L27.853 13.4696L26.7351 16.4962H28.3214V16.6149H25.0025V16.4962H26.6059L27.8331 13.1725V13.1654C27.8199 12.9693 27.8122 12.7728 27.8098 12.5763V11.1257C27.8098 9.34227 26.4773 8.31918 24.1537 8.31918H21.8698V16.4971H23.8486V16.6155H16.1146V16.4971H18.0853L16.0878 11.0757H10.5445L8.56558 16.4371L8.6482 16.4235C11.2467 15.9778 12.4416 14.0043 12.4578 11.9263H12.5783V16.6155H0L9.33682 0.675364H5.58221C2.47056 0.675364 1.06227 3.0668 1.04053 5.45082H0.920326V0.556364H12.2537L12.1848 0.675364L2.91845 16.4971H7.79342C7.91455 16.4971 8.03507 16.4912 8.15652 16.4817C8.23727 16.4761 8.31865 16.4681 8.40127 16.4579L8.43078 16.4548L14.5062 0H14.6264L14.6305 0.0108182L19.4042 12.9667V0.675364H17.4387V0.554818H24.203C27.4542 0.554818 29.7238 2.21525 29.7238 4.59402C29.7238 6.32864 28.1692 7.76838 25.8567 8.17793L25.4321 8.23171L25.8598 8.27498C27.2622 8.43478 28.3757 8.86411 29.165 9.5506L29.1703 9.55555L32.6984 0H32.8183L32.8227 0.0108182V0.0108182ZM30.1664 10.9279L30.1782 10.957H34.235L31.5101 3.56104L29.2672 9.64085L29.2793 9.65229L29.3933 9.7648C29.7233 10.0997 29.9857 10.4944 30.1664 10.9276V10.9279ZM21.8713 8.20018V0.675364H23.6141C25.9424 0.675364 27.1718 2.03969 27.1718 4.61936C27.1718 7.36316 26.4661 8.20018 24.1537 8.20018H21.8713V8.20018ZM13.3194 3.56104L10.5886 10.9573H16.0444L13.3194 3.56073V3.56104Z"
        fill="black"
      />
    </svg>
  );
};

export default ZaraLogo;