import React from 'react';

const StenstromsoutletLogo = ({
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
      viewBox="0 0 48 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_338_52969)">
        <path
          d="M18.3765 17.6172C18.3765 18.5189 17.8342 18.9859 17.1801 18.9859C16.4942 18.9859 16.0156 18.4545 16.0156 17.6655C16.0156 16.8443 16.5261 16.2969 17.212 16.2969C17.9299 16.2969 18.3765 16.8443 18.3765 17.6172ZM16.3825 17.6655C16.3825 18.2291 16.6856 18.7282 17.212 18.7282C17.7385 18.7282 18.0415 18.2452 18.0415 17.6494C18.0415 17.1342 17.7704 16.5867 17.212 16.5867C16.6537 16.5706 16.3825 17.0859 16.3825 17.6655Z"
          fill="black"
        />
        <path
          d="M19.9073 16.3438V17.8895C19.9073 18.4692 20.1625 18.7268 20.5134 18.7268C20.8963 18.7268 21.1356 18.4692 21.1356 17.8895V16.3438H21.4706V17.8573C21.4706 18.6624 21.0558 18.9844 20.4975 18.9844C19.9711 18.9844 19.5723 18.6785 19.5723 17.8734V16.3438H19.9073Z"
          fill="black"
        />
        <path
          d="M23.3051 16.618H22.5234V16.3281H24.4377V16.618H23.656V18.9366H23.321V16.618H23.3051Z"
          fill="black"
        />
        <path
          d="M25.4902 16.3438H25.8252V18.6624H26.9259V18.9522H25.4902V16.3438Z"
          fill="black"
        />
        <path
          d="M29.3986 17.7285H28.3936V18.6624H29.5102V18.9522H28.0586V16.3438H29.4464V16.6336H28.3936V17.4548H29.3986V17.7285Z"
          fill="black"
        />
        <path
          d="M31.2664 16.618H30.4688V16.3281H32.383V16.618H31.6014V18.9366H31.2664V16.618Z"
          fill="black"
        />
        <path
          d="M33.724 6.36252C33.724 6.36252 33.2773 6.70066 33.389 7.21591C33.405 7.26422 33.6921 7.65066 34.2185 7.16761C34.2185 7.16761 34.5854 6.79727 34.5376 6.42693C34.5376 6.42693 34.5216 6.02439 34.059 6.1371C33.9952 6.1532 33.724 6.36252 33.724 6.36252Z"
          fill="#003361"
        />
        <path
          d="M35.7813 6.40797C35.7813 6.40797 35.3984 6.81051 35.542 7.21306C35.5579 7.26136 35.7972 7.5995 36.3236 7.16475C36.3715 7.13255 36.5629 6.95543 36.6586 6.45628C36.6746 6.35967 36.7224 6.08594 36.2917 6.08594C36.1482 6.08594 35.9408 6.23085 35.7813 6.40797Z"
          fill="#003361"
        />
        <path
          d="M9.23721 2.07613C8.39175 1.65749 7.72176 1.57698 7.59414 1.56088C6.12655 1.39986 4.83442 1.88291 4.65895 1.94732C3.19135 2.51088 2.45755 3.42868 2.4097 3.47698C2.0428 3.89563 1.75566 4.52359 1.7078 4.6202C1.27709 5.61851 1.42066 6.55241 1.43661 6.66512C1.58018 7.58291 2.01089 8.00156 2.05875 8.04986C2.71279 8.69393 3.62206 8.61342 3.68587 8.61342C4.40371 8.59732 5.75965 7.98546 5.75965 7.98546C6.52535 7.66342 7.17939 7.14817 7.17939 7.14817C7.17939 7.14817 7.72176 6.31088 7.80152 6.16597C7.88128 6.03715 8.45556 5.15156 8.48746 5.10325C9.36483 3.79902 10.0029 2.99393 10.0667 2.91342C11.2631 1.46427 12.0448 0.90071 12.1086 0.852405C13.4964 -0.323019 14.4376 0.0312188 14.5333 0.0795239C14.645 0.143931 14.6609 0.288846 14.6609 0.369354C14.7248 0.70749 14.5174 1.11003 14.4536 1.23885C13.959 2.33376 13.2093 3.13885 13.2093 3.13885C12.2522 4.21766 11.1196 5.08715 11.0398 5.15156C9.69983 6.24647 8.80651 6.84224 8.80651 6.84224C8.80651 6.84224 8.34389 7.59902 8.28009 7.69563C8.21628 7.79224 7.37081 9.17698 7.307 9.28969C6.79654 10.1592 6.55725 10.4651 6.52535 10.5134C5.95107 11.3346 5.29703 11.8177 5.23323 11.866C3.79753 13.0092 2.4097 12.9931 2.36184 12.9931C0.958051 13.0414 0.383773 12.3812 0.351869 12.349C-0.0788388 11.9787 0.0168741 11.1092 0.0168741 11.0609C0.0168741 10.9965 0.112587 10.2558 0.974003 10.2558C1.83542 10.2558 1.69185 11.0287 1.6759 11.0931C1.62804 11.5278 1.10162 12.0592 1.02186 12.1397C0.942098 12.2202 0.926146 12.3007 0.942098 12.349C1.06972 12.8482 1.75566 12.8321 1.86732 12.8321C2.66493 12.8321 3.12754 12.6388 3.19135 12.6066C4.00491 12.2685 4.7068 11.3024 4.75466 11.238C5.50441 10.127 5.74369 9.69224 5.83941 9.53122C6.55725 8.30749 6.89225 7.67953 6.86034 7.69563C5.74369 8.30749 4.85037 8.53292 4.81847 8.54902C3.19135 9.03207 2.23422 8.72614 2.21827 8.71003C1.14948 8.46851 0.734721 7.56681 0.718768 7.55071C0.240204 6.58461 0.559247 5.39308 0.575199 5.28037C1.02186 3.39647 2.87231 2.38207 2.93612 2.34986C4.81847 1.28715 6.65297 1.28715 6.76463 1.28715C8.21628 1.27105 9.33293 1.94732 9.33293 1.94732C9.33293 1.94732 9.25317 2.09224 9.23721 2.07613ZM10.7367 5.18376C11.4865 4.6202 12.4117 3.6219 12.4595 3.57359C13.4007 2.52698 13.8474 1.80241 13.8474 1.80241C14.1505 1.28715 14.2143 0.916812 14.1345 0.868507C13.7357 0.659185 13.2412 1.01342 13.2412 1.01342C12.7786 1.23885 11.7736 2.39817 11.7417 2.43037C11.1834 3.01003 10.1784 4.49139 10.1784 4.49139C10.1305 4.5719 9.44459 5.61851 9.36483 5.73122C9.18936 5.98885 8.91817 6.4719 8.91817 6.4719C10.2901 5.538 10.4336 5.40919 10.7367 5.18376Z"
          fill="#003361"
        />
        <path
          d="M14.6611 2.44674H15.6182L14.358 4.37895L13.4965 5.71539H14.2622L14.023 6.06962H13.2094L12.3161 7.38996L11.3909 8.77471L10.4816 10.1595L9.4128 11.7535C9.4128 11.7535 9.14161 12.1239 9.14161 12.3493C9.14161 12.3976 9.22137 12.7679 9.7797 12.5103C9.85946 12.4781 10.2583 12.3815 11.2313 11.3993C11.2473 11.3832 11.5663 10.6103 11.9492 10.0467C11.9651 10.0145 12.5873 9.12895 13.2732 8.74251C13.3211 8.7264 13.9751 8.32386 14.693 8.32386C15.4108 8.32386 15.4108 8.82301 15.4108 8.82301C15.4108 8.82301 15.4587 9.17725 15.1396 9.57979C15.1237 9.5959 14.7249 10.1273 14.1665 10.3688C14.1506 10.3688 13.4965 10.6747 12.7149 10.6264C12.7149 10.6264 12.4597 10.9645 12.2204 11.5442C12.2044 11.5925 12.013 12.0595 12.1566 12.3493C12.1725 12.3654 12.3639 12.7035 12.7308 12.5103C12.8425 12.462 13.3689 12.1722 13.7677 11.834C13.7677 11.834 14.358 11.3349 14.8844 10.8357C15.0918 10.6425 15.6022 10.0789 16.0808 9.53149C16.0808 9.53149 16.7029 8.79081 16.8944 8.53318C16.9422 8.46878 17.1017 8.32386 17.357 8.32386C17.6282 8.32386 17.676 8.45268 17.676 8.45268C17.676 8.45268 17.7239 8.54929 17.7079 8.77471C17.7079 8.82301 17.692 9.11284 17.692 9.14505C17.692 9.17725 18.0908 8.90352 18.2024 8.83912C18.2024 8.83912 18.6969 8.51708 19.1596 8.37217C19.2234 8.35607 19.4467 8.30776 19.6381 8.30776C19.6381 8.30776 20.1645 8.30776 20.2922 8.662C20.2922 8.6781 20.356 8.91962 20.1007 9.37047C20.0848 9.40267 19.9093 9.70861 19.4946 10.3688C19.4946 10.3688 18.8884 11.2866 18.8405 11.3671C18.7927 11.4476 18.4258 12.0273 18.3779 12.1078C18.33 12.1883 18.2981 12.301 18.3939 12.3654C18.3939 12.3654 18.4896 12.4459 18.7289 12.2044C18.7289 12.2044 19.4307 11.5764 19.4946 11.512C19.4946 11.512 20.4836 10.6264 20.8824 10.24C21.2333 9.91793 21.6002 9.56369 21.8555 9.30607C22.0628 9.09674 22.5095 8.662 22.5095 8.662C22.5095 8.662 22.6531 8.06623 22.9402 7.84081C23.0359 7.7603 23.2593 7.66369 23.4985 7.7442C23.4985 7.7442 23.7538 7.82471 23.6581 8.14674C23.6421 8.17895 23.5464 8.42047 23.1316 8.56539C23.0838 8.58149 22.8286 8.6942 22.7807 8.7103C22.7807 8.7103 23.004 9.12895 23.1635 9.612C23.1795 9.6442 23.3709 10.1917 23.2912 10.7069C23.2912 10.7391 23.2274 11.045 23.1795 11.19C23.1795 11.19 23.5624 11.1739 23.9133 10.8679C23.9133 10.8679 24.36 10.4654 24.5833 10.2078C24.7747 9.99844 24.8545 9.88573 24.9502 9.75691C24.9821 9.72471 25.4288 9.03234 25.5564 8.83912C25.6521 8.7103 26.1626 7.90522 26.689 7.13234C26.7368 7.06793 27.4387 6.00522 27.4387 6.00522H26.5933L26.8644 5.65098H27.6621C27.6621 5.65098 28.3639 4.60437 28.6989 4.10522C28.7627 4.00861 29.8475 2.41454 29.8475 2.41454L30.8365 2.39844L30.1027 3.52556L28.7308 5.63488H29.5604L29.353 5.97301H28.5394L27.1037 8.11454L25.9073 9.90183C25.9073 9.90183 25.4766 10.5298 24.9502 11.351C24.8864 11.4637 24.4876 12.1239 24.6471 12.301C24.6471 12.301 24.8545 12.4942 25.4766 12.0434C25.5723 11.9789 25.9552 11.6891 26.354 11.3349C26.354 11.3349 27.0718 10.6586 27.4706 10.2078C27.6461 10.0145 28.1725 9.43488 28.4756 9.04844C28.6989 8.75861 28.8585 8.59759 28.9063 8.53318C28.9542 8.46878 29.1935 8.17895 29.4806 8.17895C29.8315 8.17895 29.8156 8.45268 29.8156 8.45268C29.8156 8.45268 29.7996 8.6781 29.7996 8.7264C29.7996 8.77471 29.7837 8.90352 29.8954 8.95183C30.0389 9.01623 30.342 8.662 30.5972 8.53318C30.8206 8.42047 31.1715 8.19505 31.7937 8.17895C31.7937 8.17895 32.5275 8.13064 32.6072 8.62979C32.6072 8.62979 33.0858 8.27556 33.8993 8.19505C33.9632 8.19505 34.7289 8.14674 34.9362 8.37217C34.9362 8.37217 35.0798 8.54929 35.0479 8.80691C35.0479 8.83912 35.016 9.03234 35.2553 9.00013C35.4946 8.96793 35.8136 8.85522 37.01 8.35606C37.1855 8.27556 37.4726 8.13064 37.68 8.24335C37.8874 8.35606 37.8236 8.98403 37.8236 9.04844C37.8236 9.04844 38.8764 8.22725 39.7059 8.21115C39.7059 8.21115 40.36 8.17895 40.344 8.58149C40.344 8.662 40.3281 8.79081 40.3919 8.85522C40.4238 8.90352 40.5035 8.82301 40.5833 8.77471C40.5833 8.77471 41.1257 8.29166 41.8276 8.22725C41.8754 8.22725 42.6252 8.13064 42.689 8.61369C42.689 8.61369 42.7687 8.88742 42.2742 9.6442C42.2742 9.6442 41.7318 10.5137 41.2852 11.1739C41.2373 11.2383 40.8385 11.8823 40.7907 11.9628C40.7428 12.0273 40.679 12.1722 40.7588 12.2688C40.8385 12.3493 41.0459 12.1883 41.0459 12.1883C41.0459 12.1883 41.5564 11.8179 42.0509 11.351C42.0509 11.351 42.9283 10.5781 43.4228 10.0789C43.5982 9.90183 44.6989 8.79081 44.7787 8.7103C44.8585 8.62979 45.002 8.45268 45.0499 8.29166C45.0658 8.21115 45.0499 7.95352 45.4008 7.67979C45.6242 7.50267 45.9592 7.59929 46.1027 7.7442C46.1346 7.7764 46.2304 7.88912 46.0389 8.13064C46.023 8.14674 45.7996 8.40437 45.2732 8.58149C45.2732 8.58149 45.5444 9.51539 45.5923 9.91793C45.6082 9.99844 45.7996 11.0128 45.353 11.7052C45.353 11.7052 46.007 12.3171 46.7089 12.5103C46.7568 12.5264 47.1237 12.623 47.2034 12.3171C47.2194 12.2527 47.1237 11.4637 47.666 11.4637C48.1925 11.4637 48.001 12.1561 48.001 12.1561C48.001 12.1561 47.8894 12.6391 47.2034 12.7196C47.1396 12.7196 46.677 12.7679 45.9273 12.2849C45.7837 12.1883 45.2573 11.8662 45.2573 11.8662C45.2573 11.8662 44.9223 12.3493 44.4278 12.5425C44.3799 12.5586 43.7737 12.8484 42.9602 12.6552C42.9283 12.6391 42.2583 12.4298 42.3699 11.7857C42.3699 11.7857 42.4656 11.0289 43.359 10.9645C43.4228 10.9645 43.7259 10.9323 44.348 11.1256C44.348 11.1256 45.0977 10.0789 44.9542 8.80691C44.9542 8.80691 43.8694 9.91793 43.4228 10.3527C43.3749 10.401 42.4816 11.2544 41.9073 11.7052C41.8595 11.7535 41.0619 12.462 40.679 12.6069C40.679 12.6069 40.2642 12.784 39.9133 12.6391C39.9133 12.6391 39.5783 12.462 39.7219 11.9789C39.7538 11.8823 39.9452 11.4959 40.7747 10.2722L41.3809 9.37047C41.3809 9.37047 41.6042 9.03234 41.4128 8.79081C41.4128 8.79081 41.2214 8.58149 40.7907 8.83912C40.7588 8.85522 40.4397 9.01623 39.9771 9.5959C39.9771 9.5959 39.3709 10.5459 38.8764 11.351C38.8764 11.351 38.334 12.1883 38.0309 12.6713H36.9781L38.35 10.5137L38.9721 9.51539C38.9721 9.51539 39.2912 9.04844 39.0678 8.79081C39.0359 8.74251 38.7328 8.61369 38.2064 9.06454C38.1426 9.11284 37.68 9.56369 37.1855 10.3527C37.1855 10.3527 36.6272 11.2061 35.686 12.6713H34.5693L36.8664 9.19335C36.8664 9.19335 37.0419 8.93573 36.9622 8.87132C36.9302 8.83912 36.8664 8.79081 36.5633 8.91962C36.5633 8.91962 35.1755 9.43488 35.0319 9.46708C35.0319 9.46708 34.8086 10.8035 33.5963 11.9145C33.5165 11.9789 32.6391 12.7518 31.6501 12.7679C31.5225 12.7679 30.6451 12.7518 30.5653 11.7052C30.5653 11.6408 30.4856 11.045 31.1077 10.1434C31.1715 10.0467 31.3949 9.77301 31.7298 9.38657H31.0918C31.0918 9.38657 31.2672 9.06454 31.1556 8.87132C31.1396 8.83912 30.9961 8.62979 30.5494 8.80691C30.5015 8.82301 30.007 9.06454 29.672 9.54759C29.6561 9.57979 28.7947 10.8518 28.1885 11.8018L27.5823 12.7196H26.4975L27.997 10.4332C27.997 10.4332 28.1087 10.24 28.0609 10.2078C27.997 10.1756 27.7897 10.3688 27.4706 10.7069C27.4706 10.7069 26.1626 12.1722 24.998 12.6874C24.998 12.6874 24.1047 13.09 23.7697 12.5425C23.7697 12.5425 23.5145 12.2044 24.1366 11.2383C24.1366 11.2383 23.7378 11.4315 23.1635 11.4798C23.1635 11.4798 22.6212 12.4942 21.664 12.8162C21.5843 12.8323 20.691 13.09 20.1805 12.7518C20.1805 12.7518 19.686 12.462 19.9731 11.9306C19.9731 11.9306 20.2762 11.3671 20.9941 11.2544C21.026 11.2544 21.4407 11.2061 22.015 11.2383C22.015 11.2383 22.3819 10.6264 22.4936 9.95013C22.4936 9.90183 22.6052 9.25776 22.5574 8.91962C22.5574 8.91962 22.0309 9.45098 21.6162 9.82132C21.6162 9.82132 20.5474 10.8679 20.3879 11.0289C20.2284 11.19 19.5105 11.8501 19.1117 12.1722C19 12.2527 18.3939 12.8645 17.8196 12.8645C17.8196 12.8645 17.1974 12.8484 17.341 12.3332C17.357 12.2688 17.3889 11.9306 18.4577 10.3205C18.4577 10.3205 19 9.48318 19.0319 9.40268C19.0638 9.32217 19.1436 9.09674 18.9362 8.91962C18.8884 8.88742 18.681 8.75861 18.1067 9.19335C18.011 9.25776 17.5803 9.6442 17.1177 10.3849C17.1017 10.4171 16.336 11.5764 15.5384 12.8001H14.4377L15.6979 10.9484L16.7348 9.40268C16.7348 9.40268 16.8146 9.25776 16.7508 9.20945C16.687 9.14505 16.4796 9.38657 16.4796 9.38657C16.4796 9.38657 15.7298 10.2078 15.5384 10.401C15.5384 10.401 14.5015 11.6247 13.3849 12.3815C13.337 12.4137 12.5075 13.0417 11.9013 12.8806C11.9013 12.8806 11.0559 12.8645 11.1675 11.7213C11.1675 11.7213 10.2742 12.6713 9.42875 12.8967C9.38089 12.9128 8.679 13.0256 8.32805 12.7518C8.32805 12.7518 8.08877 12.5264 8.37591 11.9467C8.37591 11.9467 8.56733 11.5281 8.50352 11.4637C8.43972 11.3993 7.24331 12.5586 6.03094 12.8967L5.85547 12.7679C5.85547 12.7679 7.41878 12.2044 8.98209 10.5298C8.99804 10.5137 9.54041 9.93403 10.003 9.20945C10.0509 9.12895 12.1885 6.03742 12.1885 6.03742H11.3271L11.5663 5.71539H12.3639L14.6611 2.44674ZM14.7408 9.6281C14.9163 9.40268 14.9801 9.17725 14.9801 9.17725C14.9801 9.17725 15.0758 8.90352 14.9322 8.75861C14.7887 8.62979 14.5015 8.77471 14.4696 8.79081C14.2303 8.93573 13.9273 9.19335 13.8794 9.22556C13.4168 9.6442 12.8585 10.4654 12.8585 10.4654C14.007 10.5137 14.7249 9.6442 14.7408 9.6281ZM20.2762 11.8823C20.1326 12.2366 20.5314 12.3332 20.6272 12.3332C21.3291 12.2688 21.9352 11.4476 21.9352 11.4476C20.6272 11.2705 20.3081 11.8018 20.2762 11.8823ZM34.346 8.61369C34.4417 8.45268 34.346 8.46878 34.346 8.46878C33.5803 8.58149 32.9263 9.20945 32.8944 9.24166C31.682 10.2883 31.5065 11.1578 31.5065 11.1578C31.2991 11.9628 31.7298 12.0917 31.7777 12.1078C32.2244 12.3171 32.8784 11.8823 33.1336 11.6891C34.33 10.8518 34.665 9.56369 34.665 9.56369C33.9153 9.37047 34.346 8.61369 34.346 8.61369ZM44.1725 11.3671C44.1725 11.3671 43.7099 11.0612 43.1516 11.19C43.0559 11.2061 42.4976 11.4315 42.5454 11.8823C42.5454 11.9145 42.673 12.3171 43.359 12.0273C43.4547 11.995 43.8535 11.8179 44.1725 11.3671Z"
          fill="#003361"
        />
      </g>
      <defs>
        <clipPath id="clip0_338_52969">
          <rect width="48" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StenstromsoutletLogo;