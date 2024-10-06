import React from 'react';

const DidriksonsLogo = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 69 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_338_52456)">
        <path
          d="M16.0879 2.88281H18.327C20.2255 2.88281 21.4911 4.0971 21.4911 5.859C21.4911 7.5971 20.2011 8.81138 18.327 8.81138H16.0879V2.88281ZM18.327 7.88281C19.6413 7.88281 20.3958 6.95424 20.3958 5.83519C20.3958 4.69234 19.6657 3.78757 18.327 3.78757H17.1345V7.88281H18.327Z"
          fill="black"
        />
        <path
          d="M22.6836 2.88281H23.7545V8.81138H22.6836V2.88281Z"
          fill="black"
        />
        <path
          d="M25.1172 2.88281H27.3563C29.2548 2.88281 30.5204 4.0971 30.5204 5.859C30.5204 7.5971 29.2304 8.81138 27.3563 8.81138H25.1172V2.88281ZM27.3563 7.88281C28.6706 7.88281 29.4251 6.95424 29.4251 5.83519C29.4251 4.69234 28.695 3.78757 27.3563 3.78757H26.1637V7.88281H27.3563Z"
          fill="black"
        />
        <path
          d="M33.7581 6.5971H32.7115V8.81138H31.6406V2.88281H34.2935C35.4861 2.88281 36.265 3.64472 36.265 4.73996C36.265 5.78757 35.5591 6.359 34.829 6.47805L36.3136 8.81138H35.0967L33.7581 6.5971ZM34.1475 3.78757H32.6872V5.66853H34.1475C34.756 5.66853 35.1941 5.28757 35.1941 4.71615C35.1941 4.16853 34.756 3.78757 34.1475 3.78757Z"
          fill="black"
        />
        <path
          d="M37.4336 2.88281H38.5045V8.81138H37.4336V2.88281Z"
          fill="black"
        />
        <path
          d="M41.497 6.31138L40.9615 6.90662V8.78757H39.8906V2.88281H40.9615V5.71615L43.3224 2.88281H44.6367L42.1785 5.66853L44.807 8.78757H43.4928L41.497 6.31138Z"
          fill="black"
        />
        <path
          d="M45.7082 7.17039C46.122 7.59896 46.7791 7.97991 47.631 7.97991C48.5072 7.97991 48.8479 7.55134 48.8479 7.17039C48.8479 6.64658 48.2151 6.47991 47.4606 6.28943C46.4627 6.05134 45.3188 5.76562 45.3188 4.50372C45.3188 3.52753 46.195 2.76562 47.5336 2.76562C48.4828 2.76562 49.2373 3.05134 49.7971 3.59896L49.1887 4.36086C48.7262 3.90848 48.0691 3.6942 47.4363 3.6942C46.8035 3.6942 46.414 3.97991 46.414 4.43229C46.414 4.88467 47.0225 5.05134 47.7527 5.21801C48.7506 5.4561 49.9431 5.76562 49.9431 7.05134C49.9431 8.02753 49.2373 8.88467 47.6066 8.88467C46.4871 8.88467 45.6839 8.50372 45.1484 7.93229L45.7082 7.17039Z"
          fill="black"
        />
        <path
          d="M53.7394 2.78906C55.5648 2.78906 56.8304 4.07478 56.8304 5.86049C56.8304 7.6224 55.5405 8.93192 53.7394 8.93192C51.914 8.93192 50.6484 7.6462 50.6484 5.86049C50.6484 4.07478 51.9384 2.78906 53.7394 2.78906ZM53.7394 3.69382C52.5225 3.69382 51.7437 4.59859 51.7437 5.83668C51.7437 7.05097 52.5225 7.97954 53.7394 7.97954C54.9564 7.97954 55.7352 7.05097 55.7352 5.83668C55.7595 4.6224 54.9564 3.69382 53.7394 3.69382Z"
          fill="black"
        />
        <path
          d="M59.0221 4.47805V8.78757H57.9512V2.88281H59.0464L62.1374 7.07329V2.88281H63.2083V8.81138H62.1861L59.0221 4.47805Z"
          fill="black"
        />
        <path
          d="M64.7903 7.17039C65.204 7.59896 65.8612 7.97991 66.713 7.97991C67.5892 7.97991 67.9299 7.55134 67.9299 7.17039C67.9299 6.64658 67.2971 6.47991 66.5426 6.28943C65.5448 6.05134 64.4008 5.76562 64.4008 4.50372C64.4008 3.52753 65.277 2.76562 66.6157 2.76562C67.5649 2.76562 68.3194 3.05134 68.8791 3.59896L68.2707 4.36086C67.8082 3.90848 67.1511 3.6942 66.5183 3.6942C65.8855 3.6942 65.4961 3.97991 65.4961 4.43229C65.4961 4.88467 66.1045 5.05134 66.8347 5.21801C67.8326 5.4561 69.0252 5.76562 69.0252 7.05134C69.0252 8.02753 68.3194 8.88467 66.6887 8.88467C65.5691 8.88467 64.7659 8.50372 64.2305 7.93229L64.7903 7.17039Z"
          fill="black"
        />
        <path
          d="M6.86349 0C6.64444 0 0 0 0 0V12C0 12 6.69312 12 6.86349 12C7.03386 12 7.25291 11.9524 7.44762 11.7619C7.64233 11.5952 12.4614 6.61905 12.6561 6.42857C12.8751 6.21429 12.8751 5.78571 12.6317 5.54762C12.3884 5.30952 7.71534 0.523809 7.4963 0.309524C7.30159 0.0952381 7.10688 0 6.86349 0ZM1.77672 10.9762L9.2 3.52381C9.2 3.52381 11.2688 5.64286 11.3661 5.71429C11.4635 5.80952 11.4878 5.90476 11.4878 6C11.4878 6.09524 11.4635 6.19048 11.3661 6.28571C11.2688 6.38095 6.91217 10.8095 6.86349 10.8571C6.81482 10.9048 6.7418 10.9524 6.54709 10.9524C6.44974 10.9762 1.77672 10.9762 1.77672 10.9762ZM5.96296 5.28571L1.77672 1.02381C1.77672 1.02381 6.44974 1.02381 6.59577 1.02381C6.71746 1.02381 6.83915 1.09524 6.88783 1.14286C6.93651 1.19048 8.46984 2.7619 8.46984 2.7619L5.96296 5.28571ZM5.2328 6.02381L1.04656 10.2381V1.78571L5.2328 6.02381Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_338_52456">
          <rect width="69" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DidriksonsLogo;