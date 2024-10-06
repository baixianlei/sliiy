import React from 'react';

const CommonBodiesOverall = ({ size = 12, ...props }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 455 435"
      {...props}
    >
      <g>
        <g id="svg_20">
          <path
            id="svg_21"
            d="m428.99,109.36c-2.7422,-2.7422 -67.199,-67.816 -100.8,-91.113c-18.816,-12.992 -38.586,-21.391 -53.816,-11.648l0,0.00391c-30.312,13.418 -64.883,13.418 -95.199,0c-15.23,-9.8555 -35,-1.3984 -53.871,11.594c-32.703,23.348 -97.551,88.422 -100.3,91.164c-1.6523,1.6562 -2.5273,3.9375 -2.4062,6.2734l-17.922,13.215c-2.9844,2.168 -4.1914,6.0391 -2.9688,9.5195c7.375,23.121 19.043,44.645 34.387,63.449c2.5859,3.0469 6.957,3.8633 10.469,1.9609l19.207,-10.586l0.00391,0c2.0781,1.1445 4.5508,1.3281 6.7734,0.50391c15.02,-5.1797 29.105,-12.746 41.723,-22.398c-14.617,92.902 -13.441,167.11 3.4141,226.24c0.6875,2.5312 2.5078,4.5977 4.9297,5.6016l0,19.488c0.05468,4.0742 3.0312,7.5234 7.0547,8.1758c25.156,3.9766 50.781,3.9766 75.938,0c4.1055,-0.65625 7.1367,-4.1875 7.168,-8.3438l0,-19.656c1.9883,-0.8125 3.5938,-2.3555 4.4805,-4.3125c3.918,-8.7227 7.1758,-17.727 9.7422,-26.938c2.5625,9.2305 5.8203,18.254 9.7422,26.992c0.88672,1.957 2.4922,3.5 4.4805,4.3125l0,19.488c-0.04688,4.2109 3.0078,7.8164 7.168,8.457c25.156,3.9766 50.781,3.9766 75.938,0c4.0664,-0.66016 7.0547,-4.168 7.0547,-8.2891l0,-19.711c2.4219,-1.0039 4.2422,-3.0703 4.9297,-5.6016c16.801,-59.137 18.031,-133.34 3.4141,-226.24c12.617,9.6523 26.703,17.219 41.723,22.398c2.2227,0.82422 4.6953,0.64062 6.7734,-0.50391l19.207,10.586l0.0039,0c3.5117,1.9023 7.8828,1.0859 10.469,-1.9609c15.324,-18.816 26.988,-40.336 34.387,-63.449c1.2227,-3.4805 0.01563,-7.3516 -2.9688,-9.5195l-17.922,-13.215c0.02735,-2.2227 -0.83984,-4.3594 -2.4062,-5.9375l-0.00101,0.00029zm-157.19,-83.27c-3.5859,61.938 -85.625,61.938 -89.152,0c28.898,9.8555 60.25,9.8555 89.152,0zm-227.14,159.54c-10.664,-14.285 -19.051,-30.133 -24.863,-46.984l8.6797,-6.4414c6.8008,16.977 15.617,33.07 26.262,47.938l-10.0787,5.4874zm94.754,229.6l-0.00391,-10.137c18.816,1.707 37.746,1.707 56.562,0l0,10.023c-18.781,2.3242 -37.777,2.3242 -56.562,0l0.00391,0.114zm118.61,0l-0.00391,-10.195c18.816,1.707 37.746,1.707 56.562,0l0,10.082c-18.785,2.3047 -37.781,2.2852 -56.562,-0.05859l0.00391,0.17159zm75.707,-273.84c-2.3516,-3.1016 -6.5273,-4.1797 -10.086,-2.6055c-3.5625,1.5742 -5.5742,5.3867 -4.8633,9.2148c18.09,99.793 19.039,178.19 2.8008,239.46c-23.715,2.8555 -47.688,2.8555 -71.402,0c-10.734,-27.328 -15.766,-56.562 -14.785,-85.906c0,-4.6367 -3.7578,-8.3984 -8.3984,-8.3984s-8.3984,3.7617 -8.3984,8.3984c0.93359,29.305 -4.0977,58.492 -14.785,85.793c-23.715,2.8555 -47.688,2.8555 -71.402,0c-16.238,-61.266 -15.289,-139.66 2.8008,-239.46c0.71094,-3.8281 -1.3008,-7.6406 -4.8633,-9.2148c-3.5586,-1.5742 -7.7344,-0.49219 -10.086,2.6094c-12.566,15.586 -29.109,27.484 -47.883,34.438c-13.59,-17.648 -24.289,-37.344 -31.695,-58.352c14.391,-14.336 67.199,-66.137 94.527,-85.512c15.512,-10.863 25.48,-13.047 30.633,-12.77c-3.4141,37.297 25.367,70.785 61.152,70.508c35.785,-0.28125 64.512,-33.211 61.098,-70.395c5.1523,-0.28125 15.121,1.9023 30.688,12.77c27.551,19.375 80.137,71.121 94.527,85.512c-7.4062,21.008 -18.105,40.703 -31.695,58.352c-18.773,-6.9531 -35.316,-18.855 -47.883,-34.441l-0.0012,-0.0009zm75.602,44.238l-9.9688,-5.6016l0,0.00391c10.637,-14.875 19.453,-30.965 26.266,-47.934l8.5664,6.5508c-5.8125,16.852 -14.199,32.699 -24.863,46.984l-0.0006,-0.00311z"
          />
          <path
            id="svg_22"
            d="m227,115.91c-4.1914,0 -7.9688,2.5273 -9.5703,6.3984c-1.6055,3.8711 -0.71875,8.3242 2.2461,11.289c2.9609,2.9648 7.418,3.8477 11.289,2.2461c3.8711,-1.6055 6.3945,-5.3828 6.3945,-9.5703c0,-5.7227 -4.6367,-10.363 -10.359,-10.363l-0.0003,-0.0002z"
          />
          <path
            id="svg_23"
            d="m227,175.66c-4.1914,0 -7.9688,2.5234 -9.5703,6.3945c-1.6055,3.8711 -0.71875,8.3281 2.2461,11.293c2.9609,2.9609 7.418,3.8477 11.289,2.2422c3.8711,-1.6016 6.3945,-5.3789 6.3945,-9.5703c0,-2.7461 -1.0898,-5.3828 -3.0352,-7.3242c-1.9414,-1.9453 -4.5781,-3.0352 -7.3242,-3.0352l0.0001,0z"
          />
          <path
            id="svg_24"
            d="m227,235.41c-4.168,0.00391 -7.9336,2.5039 -9.5469,6.3477c-1.6172,3.8438 -0.76953,8.2812 2.1445,11.262c2.918,2.9805 7.3359,3.9219 11.215,2.3867c3.875,-1.5312 6.457,-5.2422 6.5469,-9.4102c0.0625,-2.7852 -1.0039,-5.4805 -2.9531,-7.4727c-1.9492,-1.9883 -4.6211,-3.1133 -7.4062,-3.1133l-0.0002,-0.0002z"
          />
        </g>
      </g>
    </svg>
  );
};

export default CommonBodiesOverall;