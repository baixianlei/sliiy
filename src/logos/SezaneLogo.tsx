import React from 'react';

const SezaneLogo = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 55 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.786 9.39195H46.8334C47.0516 9.39195 47.2698 9.34805 47.488 9.34805C47.6626 9.30414 47.8808 9.30414 48.0554 9.26024C48.2736 9.21634 48.4481 9.21634 48.6663 9.12853C48.7536 9.08463 48.8845 9.08463 49.0155 9.08463C49.2337 9.04073 49.4955 9.04073 49.7574 8.99683C49.9756 8.95293 50.1938 8.95292 50.4556 8.90902C50.5866 8.90902 50.7611 8.86512 50.8921 8.82122L51.9395 8.5578C52.1577 8.5139 52.4195 8.47 52.6377 8.4261C52.8559 8.38219 53.0741 8.33829 53.2924 8.25049C53.5106 8.16268 53.7724 8.11878 53.9906 8.07488C54.2088 8.03097 54.3834 7.94317 54.558 7.85536C54.7325 7.76756 54.8198 7.81146 54.9071 7.98707C54.9507 8.07488 54.9944 8.16268 54.9944 8.29439C54.9944 8.4261 54.9071 8.5139 54.8198 8.60171C54.6452 8.68951 54.4707 8.73341 54.2961 8.77732C54.0343 8.82122 53.8161 8.86512 53.5542 8.90902C53.4233 8.90902 53.2924 8.95293 53.2051 8.99683C52.8559 9.08463 52.5068 9.12853 52.114 9.21634C51.503 9.34805 50.8921 9.43585 50.3247 9.65536C50.1502 9.69927 50.0192 9.78707 49.8447 9.83097C49.6265 9.91878 49.4519 9.96268 49.2337 10.0066C49.0155 10.0505 48.7973 10.0944 48.5791 10.0944C48.3172 10.1383 48.099 10.1822 47.8371 10.1822C47.7062 10.27 47.5317 10.1822 47.4007 10.27H47.3571C47.1825 10.27 46.9643 10.3139 46.7897 10.3139C46.6152 10.3139 46.4406 10.3139 46.266 10.3578C46.1788 10.4017 46.0478 10.3578 45.9606 10.4017C45.6551 10.4456 45.3932 10.4895 45.0877 10.4017C45.0004 10.3578 44.8695 10.3578 44.7386 10.3578C44.4767 10.3139 44.2149 10.27 43.953 10.1383C43.6475 9.96268 43.473 9.74317 43.3421 9.43585C43.2984 9.34805 43.2548 9.26024 43.2111 9.12853C43.1675 9.04073 43.1675 9.04073 43.0802 9.08463C42.862 9.17244 42.6001 9.26024 42.3819 9.39195C42.1201 9.52366 41.8582 9.56756 41.5964 9.65536C41.2909 9.74317 40.9854 9.78707 40.6799 9.83097C40.4617 9.87488 40.2435 9.91878 40.0253 9.83097C39.8071 9.74317 39.6325 9.65536 39.5016 9.47975C39.327 9.17244 39.2397 8.86512 39.1961 8.5578C39.1525 8.25049 39.1524 7.98707 39.1524 7.67975C39.1524 7.50414 39.1961 7.37244 39.2397 7.19683C39.2834 7.02122 39.327 6.88951 39.327 6.7139C39.327 6.6261 39.2834 6.58219 39.1961 6.58219C39.1088 6.58219 39.0215 6.6261 38.8906 6.67C38.716 6.7139 38.5415 6.84561 38.3669 6.97731C38.1923 7.10902 37.9741 7.28463 37.7996 7.41634C37.5377 7.63585 37.2759 7.85536 36.9704 8.07488C36.7085 8.29439 36.4467 8.47 36.1848 8.68951C35.8357 8.95292 35.4865 9.17244 35.1374 9.43585C35.0501 9.47975 34.9192 9.52366 34.8319 9.52366C34.6574 9.56756 34.5701 9.52366 34.4828 9.34805C34.3955 9.17244 34.3082 9.04073 34.2209 8.86512C34.1773 8.73341 34.1773 8.5578 34.1773 8.4261C34.1773 8.11878 34.3519 7.85536 34.4391 7.59195L34.8319 6.80171V6.7578C34.8319 6.7578 34.7883 6.7578 34.7883 6.80171L34.6137 6.97731C34.3955 7.19683 34.1773 7.37244 33.9591 7.54805C33.7845 7.72366 33.5663 7.85536 33.3917 8.03097C33.1735 8.20658 32.9553 8.33829 32.7808 8.5139L31.9952 9.04073C31.7334 9.21634 31.4279 9.39195 31.166 9.52366C30.9915 9.61146 30.8605 9.69927 30.686 9.78707C30.5114 9.87488 30.3368 9.91878 30.1623 9.87488C30.075 9.87488 29.9441 9.83097 29.9004 9.74317C29.6386 9.47975 29.464 9.21634 29.3767 8.86512C29.3331 8.68951 29.2894 8.5578 29.3767 8.38219V8.33829H29.3331C29.2021 8.4261 29.1149 8.5139 28.9839 8.60171C28.5039 8.95293 28.0238 9.26024 27.5001 9.52366C27.2819 9.61146 27.1073 9.65536 26.8891 9.56756C26.7582 9.52366 26.6273 9.43585 26.54 9.30414C26.3218 9.04073 26.1472 8.77731 25.9727 8.47C25.8854 8.38219 25.8854 8.38219 25.7981 8.4261C25.4926 8.60171 25.1871 8.77732 24.838 8.95292C24.6634 9.04073 24.4452 9.12853 24.227 9.21634C24.0088 9.30414 23.8342 9.39195 23.616 9.47975C23.1796 9.69927 22.7432 9.96268 22.3068 10.1822C22.0013 10.3578 21.7394 10.4895 21.4776 10.6651C21.4339 10.6651 21.4339 10.709 21.3903 10.7529C21.3466 10.7968 21.3466 10.7968 21.3903 10.8407C21.4339 10.8846 21.4339 10.9724 21.4776 11.0163C21.6521 11.2798 21.7831 11.5871 21.8703 11.8944C22.0013 12.3334 22.0013 12.7724 22.0013 13.2554C22.0013 13.6944 21.8703 14.1334 21.6958 14.5285C21.5212 14.8798 21.303 15.1871 21.0848 15.4944C20.8666 15.7578 20.6484 15.9773 20.3865 16.1968C20.0374 16.5041 19.6883 16.7676 19.2955 16.9871C18.8154 17.2505 18.2917 17.47 17.768 17.6895C17.5498 17.7773 17.3316 17.8212 17.1134 17.8212H16.5024C16.3278 17.8212 16.1533 17.7773 15.9787 17.7334C15.7605 17.6895 15.6296 17.5139 15.4987 17.3822C15.4114 17.2505 15.3241 17.1627 15.2368 17.0749C15.0186 16.8554 14.9313 16.6359 14.8877 16.3285C14.8877 16.2407 14.844 16.1968 14.844 16.109C14.844 15.8456 14.8877 15.6261 15.0186 15.3627C15.2368 14.9676 15.4987 14.5724 15.7605 14.1773C16.1096 13.6944 16.5024 13.2993 16.9388 12.9041C17.1134 12.7285 17.288 12.5968 17.4625 12.4651C17.6371 12.3334 17.768 12.2017 17.9426 12.07C18.2044 11.8505 18.4663 11.631 18.7281 11.4554C19.1209 11.148 19.5137 10.8846 19.9065 10.6651C19.9501 10.6651 19.9501 10.6212 19.9501 10.6212C20.0374 10.5334 20.0374 10.5334 19.9501 10.4895C19.8192 10.3578 19.7319 10.2261 19.6883 10.0505C19.6446 9.91878 19.601 9.78707 19.5573 9.61146C19.5137 9.43585 19.601 9.12853 19.8628 9.04073C20.1247 8.95293 20.4302 8.86512 20.692 8.73341C20.9975 8.60171 21.303 8.47 21.5649 8.25049C21.7831 8.07488 21.9576 7.85536 22.1322 7.63585C22.2195 7.50414 22.1758 7.46024 22.0886 7.37244C21.914 7.28463 21.7394 7.19683 21.5212 7.19683C20.8666 7.15292 20.3429 7.41634 19.8192 7.81146C19.5137 8.03097 19.2082 8.25049 18.8591 8.5139C18.5536 8.73341 18.2917 8.95292 17.9862 9.17244C17.4625 9.56756 16.8952 9.96268 16.2842 10.2261C15.8478 10.4017 15.455 10.5334 14.975 10.6212C14.8004 10.6651 14.6258 10.6651 14.4513 10.6651C14.233 10.6651 14.0148 10.5773 13.8403 10.4456C13.4911 10.2261 13.3166 9.87488 13.1856 9.52366C13.0984 9.30414 13.0547 9.08463 13.0111 8.86512C13.0111 8.82122 12.9674 8.77732 12.9674 8.73341C12.9238 8.68951 12.8802 8.64561 12.8365 8.64561C12.6619 8.64561 12.4874 8.64561 12.3565 8.68951C12.2692 8.73341 12.2255 8.77732 12.2255 8.86512V9.56756C12.2255 10.0066 12.1382 10.4456 11.9637 10.8846C11.7891 11.3237 11.5273 11.7188 11.2218 12.1139C10.9163 12.509 10.5671 12.7724 10.1307 12.948C9.82524 13.0798 9.51975 13.2115 9.21425 13.2993C8.99605 13.3432 8.77784 13.431 8.51599 13.3871C8.25414 13.3871 7.99229 13.2993 7.77408 13.1676C7.59951 13.0798 7.46859 12.9041 7.29402 12.7724C7.07581 12.6407 6.90125 12.4212 6.72668 12.2456L6.6394 12.1578C6.46483 11.9383 6.46483 11.7188 6.59575 11.4554C6.77032 11.1041 6.98853 10.7968 7.29402 10.5773C7.46859 10.4017 7.6868 10.27 7.905 10.1383C8.07957 10.0505 8.25414 9.91878 8.4287 9.78707C8.77784 9.56756 9.08333 9.39195 9.47611 9.26024C9.51975 9.26024 9.56339 9.21634 9.56339 9.21634C9.95616 8.99683 10.3926 8.82122 10.7854 8.64561C10.8726 8.60171 10.9599 8.5578 11.0908 8.5139C11.1781 8.47 11.1781 8.4261 11.1781 8.33829C11.1345 8.25049 11.1345 8.16268 11.0908 8.07488C10.9163 7.59195 10.7417 7.10902 10.5671 6.58219C10.4799 6.31878 10.3489 6.01146 10.2617 5.74805C10.0871 5.26512 9.91252 4.78219 9.7816 4.29927C9.7816 4.21146 9.73795 4.12366 9.73795 4.07975V3.94805C9.69431 3.94805 9.65067 3.99195 9.56339 4.03585C9.51975 4.07975 9.47611 4.07975 9.47611 4.12366C8.69055 4.9139 7.86136 5.70414 7.11945 6.53829C6.77032 6.88951 6.42119 7.28463 6.07205 7.63585C5.85384 7.89927 5.59199 8.07488 5.33014 8.33829C5.15558 8.5139 4.93737 8.68951 4.71916 8.82122C4.50095 8.99683 4.2391 9.17244 4.02089 9.39195C3.80269 9.56756 3.62812 9.69927 3.40991 9.87488C3.10442 10.0944 2.79893 10.3578 2.49344 10.5334C2.10066 10.7968 1.75153 11.0602 1.35875 11.3676C1.31511 11.4115 1.27147 11.4115 1.22783 11.4554C1.05326 11.5432 0.922335 11.631 0.704126 11.631C0.485918 11.631 0.311351 11.631 0.136784 11.5432H0.0931427C0.0495011 11.1919 0.00585938 11.148 0.00585938 11.1041C0.00585938 11.0602 0.0495011 11.0602 0.0931427 11.0163C0.311351 10.9285 0.485918 10.7529 0.660485 10.6212C0.878693 10.4456 1.05326 10.27 1.27147 10.1383C1.48968 9.96268 1.66424 9.78707 1.88245 9.65536C2.10066 9.47975 2.27523 9.34805 2.49344 9.17244C2.58072 9.08463 2.71164 8.99683 2.79893 8.90902C3.06078 8.64561 3.36627 8.33829 3.67176 8.11878C3.84633 7.98707 4.02089 7.81146 4.19546 7.67975C4.45731 7.46024 4.67552 7.24073 4.93737 7.06512C5.06829 6.97732 5.15558 6.84561 5.2865 6.7578C5.46107 6.58219 5.63564 6.45049 5.8102 6.27488C5.98477 6.09927 6.15934 5.92366 6.37755 5.79195L6.42119 5.74805C6.6394 5.52853 6.8576 5.35292 7.07581 5.13341C7.42495 4.78219 7.77408 4.43097 8.12321 4.12366C8.47235 3.81634 8.77784 3.50902 9.08333 3.20171C9.17061 3.1139 9.21425 3.07 9.2579 2.98219L9.38882 2.85049C9.7816 2.58707 10.0434 2.23585 10.2617 1.84073C10.3926 1.62122 10.5671 1.3578 10.7417 1.13829C11.0036 0.830974 11.2654 0.523657 11.5709 0.260242L11.7018 0.128535C11.8328 -0.00317278 11.9637 -0.00317278 12.0946 0.0846321C12.1819 0.172437 12.3128 0.216339 12.4001 0.304144L12.4437 0.348047C12.5747 0.435852 12.5747 0.435852 12.531 0.611461C12.4437 0.830974 12.3128 1.05049 12.1382 1.2261L11.6582 1.70902C11.3963 1.97244 11.1781 2.27975 11.0036 2.63097C10.8726 2.89439 10.7854 3.1578 10.7854 3.42122C10.7854 3.55292 10.7417 3.68463 10.7417 3.81634C10.7417 4.12366 10.829 4.43097 10.9163 4.73829C11.0472 5.04561 11.1345 5.39683 11.3091 5.70414C11.44 5.96756 11.5273 6.23097 11.6145 6.45049C11.7891 6.84561 11.92 7.28463 12.0946 7.72366C12.0946 7.76756 12.0946 7.76756 12.1382 7.81146C12.1819 7.89927 12.2692 7.94317 12.3128 7.89927C12.531 7.81146 12.7492 7.85536 12.9674 7.76756C13.142 7.72366 13.2729 7.67975 13.3602 7.50414C13.4911 7.28463 13.5784 7.10902 13.7093 6.88951C13.9276 6.49439 14.233 6.14317 14.5822 5.83585C14.8004 5.66024 15.0186 5.48463 15.2804 5.30902C15.455 5.22122 15.6732 5.08951 15.8914 5.04561C15.9787 5.00171 16.0224 5.0017 16.1096 5.0017C16.1533 4.9578 16.2406 5.00171 16.2842 5.04561C16.5024 5.22122 16.7206 5.39683 16.8515 5.66024C16.9825 5.87975 17.0261 6.14317 17.0261 6.40658C16.9825 6.6261 16.9388 6.84561 16.8079 7.02122C16.6333 7.24073 16.4588 7.37244 16.2406 7.50414C15.8478 7.72366 15.455 7.89927 15.0186 8.03097C14.7567 8.11878 14.5385 8.20658 14.2767 8.25049C14.1021 8.29439 14.0148 8.4261 14.0148 8.5578C13.9712 8.73341 13.9712 8.90902 13.9712 9.12853C13.9712 9.39195 14.1458 9.52366 14.4076 9.47975C15.1495 9.34805 15.8478 9.04073 16.5461 8.68951C16.8952 8.47 17.2443 8.25049 17.5498 8.03097C17.9862 7.72366 18.4663 7.37244 18.9027 7.06512C19.2518 6.84561 19.5573 6.58219 19.9065 6.36268C20.212 6.14317 20.5611 6.01146 20.9102 5.96756C21.3903 5.92366 21.8267 5.92366 22.2195 6.23097L22.3068 6.31878C22.4813 6.45049 22.5686 6.6261 22.6995 6.7578C22.8305 6.93341 22.9177 7.15292 22.9614 7.37244C23.005 7.63585 22.9177 7.85536 22.7868 8.07488C22.5686 8.4261 22.2631 8.73341 21.9576 8.99683C21.7831 9.17244 21.5212 9.30414 21.303 9.43585C21.2157 9.47975 21.0848 9.56756 21.0412 9.65536V9.69927C21.0412 9.74317 21.0848 9.69927 21.0848 9.69927L21.3466 9.56756C21.914 9.21634 22.525 8.90902 23.136 8.60171C23.616 8.38219 24.0961 8.07488 24.6198 7.85536C25.0998 7.63585 25.5799 7.37244 26.0599 7.15292C26.2345 7.06512 26.4527 6.93341 26.6273 6.84561C26.7582 6.7578 26.8455 6.67 26.9328 6.53829C27.0637 6.36268 27.1946 6.23097 27.3256 6.09927C27.5001 5.96756 27.631 5.83585 27.762 5.70414C28.1547 5.39683 28.5475 5.13341 28.9839 4.87C29.1585 4.78219 29.2894 4.69439 29.464 4.56268C29.7695 4.34317 30.075 4.21146 30.4241 4.07975C30.6423 4.03585 30.9042 3.94805 31.1224 3.90414C31.2097 3.90414 31.3406 3.86024 31.4279 3.86024C31.6461 3.86024 31.8206 3.94805 31.9952 4.07975C32.0825 4.16756 32.1261 4.25536 32.2134 4.29927C32.2571 4.29927 32.2571 4.34317 32.2571 4.34317C32.3443 4.56268 32.4316 4.78219 32.3007 5.0017C32.2571 5.13341 32.1698 5.26512 32.0825 5.35292C31.6461 5.79195 31.2969 6.27488 30.9478 6.7578C30.7296 7.10902 30.5114 7.46024 30.3805 7.85536C30.2932 8.07488 30.2059 8.29439 30.1623 8.5578C30.1623 8.64561 30.1186 8.77732 30.1186 8.86512C30.1186 8.90902 30.1186 8.95292 30.2059 8.90902C30.5114 8.73341 30.8605 8.60171 31.166 8.4261C31.4715 8.25049 31.777 8.03097 32.0825 7.85536C32.3443 7.72366 32.6498 7.54805 32.9117 7.37244C33.1299 7.24073 33.3481 7.06512 33.5227 6.88951L34.5701 5.96756C34.7446 5.79195 34.9192 5.66024 35.0938 5.48463C35.312 5.26512 35.5302 5.08951 35.7484 4.87C35.8357 4.78219 35.923 4.8261 35.9666 4.87C36.1848 5.00171 36.3594 5.17731 36.4467 5.39683C36.4903 5.48463 36.4467 5.57244 36.4467 5.66024C36.3594 5.87975 36.2285 6.09927 36.0975 6.31878C36.0975 6.36268 36.0539 6.40658 36.0102 6.45049C35.8793 6.7139 35.7048 7.02122 35.5738 7.28463C35.4429 7.50414 35.3556 7.72366 35.2247 7.98707C35.2247 8.03097 35.1811 8.07488 35.1811 8.11878V8.16268H35.2247C35.3556 8.03097 35.5302 7.98707 35.6611 7.89927C35.9666 7.67975 36.3157 7.46024 36.6212 7.19683C36.9267 6.97732 37.1886 6.7578 37.4941 6.53829C37.8432 6.31878 38.1487 6.05536 38.4978 5.83585C38.5851 5.74805 38.6724 5.70414 38.8033 5.61634C38.9342 5.52853 39.1088 5.48463 39.2834 5.52853C39.4579 5.57244 39.5889 5.66024 39.6762 5.79195C39.8071 5.96756 39.938 6.14317 39.9816 6.40658C40.0253 6.58219 40.0689 6.7139 40.0253 6.88951V7.02122C40.0253 7.28463 39.9816 7.54805 39.938 7.81146C39.8944 8.03097 39.8507 8.20658 39.8944 8.4261C39.8944 8.60171 40.0253 8.73341 40.1998 8.73341C40.3744 8.73341 40.549 8.68951 40.6799 8.64561C41.16 8.47 41.6837 8.38219 42.1637 8.25049C42.3819 8.16268 42.6001 8.11878 42.8184 8.03097C42.9493 7.98707 43.0366 7.94317 43.1675 7.85536C43.2548 7.81146 43.2984 7.72366 43.3421 7.63585C43.3857 7.50414 43.473 7.37244 43.5166 7.24073C43.6475 6.93341 43.8658 6.7139 44.084 6.45049C44.4767 6.01146 44.9568 5.70414 45.4369 5.39683C45.6987 5.22122 45.9606 5.08951 46.266 5.04561C46.397 5.00171 46.5279 4.9578 46.6588 4.9578C46.7461 4.9578 46.8334 4.9139 46.877 4.9139C47.0516 4.9139 47.1825 4.9139 47.3571 4.9578C47.4444 4.9578 47.488 5.04561 47.5317 5.13341C47.6626 5.26512 47.7062 5.44073 47.6189 5.61634C47.5753 5.70414 47.5317 5.79195 47.6189 5.87975V5.96756C47.5753 6.27488 47.488 6.58219 47.2262 6.7578C47.0952 6.84561 46.9643 6.93341 46.7897 7.02122C46.397 7.24073 46.0042 7.41634 45.6114 7.63585C45.2623 7.81146 44.8695 8.03097 44.5204 8.20658C44.3895 8.29439 44.2585 8.33829 44.084 8.38219C43.953 8.4261 43.8658 8.5139 43.7785 8.60171C43.7348 8.64561 43.7348 8.73341 43.7785 8.77732C43.8221 8.90902 43.953 8.99683 44.084 9.04073C44.2585 9.08463 44.4767 9.12853 44.6949 9.17244C45.0004 9.43585 45.4369 9.34805 45.786 9.39195V9.39195ZM21.4339 12.5968C21.4339 12.3334 21.4339 12.0261 21.3466 11.7627C21.2594 11.4554 21.1284 11.1919 20.9102 10.9724C20.8229 10.8846 20.8229 10.8846 20.7357 10.9724C20.6484 11.0163 20.5175 11.1041 20.4302 11.1919C19.9065 11.4993 19.4264 11.8066 18.9027 12.1139C18.5536 12.3334 18.2481 12.5968 17.9862 12.8602L17.288 13.5627C17.157 13.6944 17.0261 13.87 16.8952 14.0456L16.3715 14.7041C16.1096 15.0554 15.8478 15.4505 15.6732 15.8456C15.5859 16.0212 15.5423 16.2407 15.5859 16.4602C15.5859 16.548 15.6296 16.6359 15.7169 16.7237C15.8478 16.8993 16.0224 16.8554 16.1969 16.8993C16.2842 16.8993 16.3715 16.9432 16.4151 16.8993C16.5461 16.8554 16.677 16.8554 16.8079 16.8554C17.0698 16.8115 17.3316 16.7676 17.5935 16.6798C18.1172 16.548 18.5536 16.2846 19.0336 16.0212C19.4264 15.8017 19.8192 15.4944 20.1683 15.1871C20.5175 14.8798 20.8229 14.5724 21.0412 14.1773C21.1284 14.0017 21.2594 13.7822 21.303 13.6066C21.3903 13.2993 21.4339 12.948 21.4339 12.5968V12.5968ZM11.3091 9.08463V8.82122C11.3091 8.73341 11.2654 8.64561 11.2218 8.5578C11.1781 8.5139 11.1781 8.5139 11.1345 8.5139C10.9163 8.60171 10.7417 8.73341 10.5235 8.82122C10.3489 8.90902 10.1744 9.04073 9.9998 9.12853C9.86888 9.17244 9.73795 9.21634 9.65067 9.34805C9.43246 9.56756 9.21425 9.74317 8.9524 9.96268C8.77784 10.0944 8.60327 10.2261 8.47235 10.3578C8.29778 10.4895 8.12321 10.6651 7.99229 10.8846C7.86136 11.1041 7.73044 11.2798 7.59951 11.4554C7.42495 11.6749 7.42495 11.8944 7.51223 12.1578C7.55587 12.2456 7.64315 12.3334 7.73044 12.3334C7.905 12.3773 8.03593 12.3773 8.2105 12.3773C8.29778 12.3773 8.34142 12.3334 8.4287 12.3334C8.55963 12.3334 8.64691 12.2895 8.77784 12.2895C9.43246 12.07 9.9998 11.7627 10.4799 11.2798C10.7417 11.0163 10.9599 10.6651 11.0472 10.3139C11.3091 9.87488 11.3527 9.47975 11.3091 9.08463V9.08463ZM26.8019 8.5578C26.8019 8.5578 26.8019 8.60171 26.8019 8.5578C26.8019 8.68951 26.7582 8.77732 26.8455 8.82122C26.8891 8.86512 26.9328 8.77732 27.0201 8.73341C27.151 8.68951 27.2383 8.60171 27.3692 8.5578C27.4128 8.5139 27.4565 8.5139 27.5438 8.47C28.242 8.03097 28.9403 7.54805 29.5949 7.02122C29.8131 6.84561 29.9877 6.6261 30.1623 6.40658C30.3368 6.18707 30.5114 5.92366 30.6423 5.70414C30.7732 5.52853 30.8605 5.35292 30.9915 5.17731C31.0351 5.13341 31.0351 5.08951 31.0351 5.04561C31.0351 5.00171 30.9915 4.9578 30.9478 4.9578C30.8605 5.00171 30.7296 5.00171 30.6423 5.04561C30.4678 5.13341 30.2932 5.17731 30.1186 5.26512C29.7258 5.44073 29.3331 5.66024 28.9403 5.87975C28.5475 6.09927 28.242 6.40658 27.8929 6.7139C27.5874 6.97731 27.2819 7.28463 27.0637 7.63585C26.8891 7.94317 26.7582 8.20658 26.8019 8.5578V8.5578ZM46.6152 5.96756C46.2224 5.96756 45.9169 6.09927 45.6114 6.31878C45.3059 6.49439 45.0441 6.7139 44.7822 6.93341C44.564 7.10902 44.3895 7.28463 44.2149 7.46024L44.1712 7.50414H44.2149C44.3022 7.46024 44.3895 7.41634 44.4767 7.41634L45.3932 7.02122C45.7423 6.88951 46.0478 6.7139 46.3533 6.49439C46.5279 6.36268 46.6588 6.23097 46.8334 6.09927C46.877 6.05536 46.8334 6.05536 46.8334 6.01146C46.7897 5.96756 46.7025 5.96756 46.6152 5.96756V5.96756ZM14.8877 7.15292H14.9313C15.1932 7.02122 15.4114 6.88951 15.6296 6.7139C15.7605 6.6261 15.8478 6.49439 15.8914 6.36268C15.8914 6.31878 15.9351 6.31878 15.8914 6.27488C15.8914 6.23097 15.8478 6.27488 15.8041 6.27488C15.4114 6.45049 15.1059 6.7139 14.844 7.02122C14.844 7.06512 14.8004 7.06512 14.8004 7.10902C14.8877 7.10902 14.844 7.10902 14.8877 7.15292Z"
        fill="black"
      />
      <path
        d="M14.145 4.73834C13.9268 4.78224 13.7522 4.69444 13.5777 4.51883C13.534 4.47492 13.534 4.43102 13.5777 4.38712C13.6213 4.34322 13.6649 4.29931 13.7086 4.29931C13.8831 4.21151 14.1014 4.1237 14.2759 3.992C14.5814 3.81639 14.8869 3.64078 15.236 3.46517C15.367 3.37736 15.4979 3.33346 15.6288 3.24566C16.0216 3.02614 16.458 2.80663 16.8508 2.58712C17.1126 2.41151 17.4181 2.2798 17.68 2.14809C17.8109 2.06029 17.9418 2.01639 18.0727 1.92858C18.2037 1.84078 18.3782 1.84078 18.5092 1.79688C18.5964 1.79688 18.6837 1.84078 18.8147 1.84078C18.9019 1.88468 18.9456 1.88468 18.9456 2.01639V2.192C18.9456 2.2798 18.9019 2.36761 18.8147 2.45541C18.4655 2.71883 18.1164 2.93834 17.7673 3.20175C17.1999 3.55297 16.6326 3.90419 16.0216 4.21151C15.6288 4.38712 15.1924 4.56273 14.756 4.65053C14.5814 4.69444 14.3632 4.78224 14.145 4.73834V4.73834Z"
        fill="black"
      />
    </svg>
  );
};

export default SezaneLogo;