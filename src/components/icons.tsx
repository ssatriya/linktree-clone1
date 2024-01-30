"use client";

import type { LucideProps } from "lucide-react";

type IconsType = {
  [key: string]: (props: LucideProps) => JSX.Element;
};

export const Icons: IconsType = {
  share: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      aria-labelledby=" "
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1C11.8954 1 11 1.89543 11 3C11 4.10457 11.8954 5 13 5C14.1046 5 15 4.10457 15 3C15 1.89543 14.1046 1 13 1ZM10 3C10 1.34315 11.3431 0 13 0C14.6569 0 16 1.34315 16 3C16 4.65685 14.6569 6 13 6C12.0052 6 11.1235 5.51578 10.5777 4.77018L5.87008 7.12398C5.95456 7.4011 6 7.69524 6 8C6 8.30476 5.95456 8.5989 5.87008 8.87602L10.5777 11.2298C11.1235 10.4842 12.0052 10 13 10C14.6569 10 16 11.3431 16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 12.6952 10.0454 12.4011 10.1299 12.124L5.42233 9.77018C4.87654 10.5158 3.99482 11 3 11C1.34315 11 0 9.65685 0 8C0 6.34315 1.34315 5 3 5C3.99481 5 4.87653 5.48422 5.42233 6.22982L10.1299 3.87602C10.0454 3.5989 10 3.30476 10 3ZM3 6C1.89543 6 1 6.89543 1 8C1 9.10457 1.89543 10 3 10C4.10457 10 5 9.10457 5 8C5 6.89543 4.10457 6 3 6ZM11 13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13C15 14.1046 14.1046 15 13 15C11.8954 15 11 14.1046 11 13Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  lightning: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="true"
      aria-labelledby=" "
    >
      <path
        d="M8.5 0.499756V6.49976H13L7.5 15.4998V9.49976H3L8.5 0.499756Z"
        fill="currentColor"
      ></path>
      <path
        d="M8.5 0.499756H9L8.07336 0.239031L8.5 0.499756ZM8.5 6.49976H8L8.5 6.99976V6.49976ZM13 6.49976L13.4266 6.76048L13 5.99976V6.49976ZM7.5 15.4998H7L7.92664 15.7605L7.5 15.4998ZM7.5 9.49976H8L7.5 8.99976V9.49976ZM3 9.49976L2.57336 9.23903L3 9.99976V9.49976ZM8 0.499756V6.49976H9V0.499756H8ZM8.5 6.99976H13V5.99976H8.5V6.99976ZM12.5734 6.23903L7.07336 15.239L7.92664 15.7605L13.4266 6.76048L12.5734 6.23903ZM8 15.4998V9.49976H7V15.4998H8ZM7.5 8.99976H3V9.99976H7.5V8.99976ZM3.42664 9.76048L8.92664 0.760481L8.07336 0.239031L2.57336 9.23903L3.42664 9.76048Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  arrowDown: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid83_title ltclid83_desc"
    >
      <title id="ltclid83_title">Chevron</title>
      <desc id="ltclid83_desc">Chevron pointing down</desc>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.70711 4L2.06066 4.35355L7.70711 10L13.3536 4.35355L13.7071 4L14.4142 4.70711L14.0607 5.06066L8.06066 11.0607H7.35355L1.35355 5.06066L1 4.70711L1.70711 4Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  user: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid93_title "
    >
      <title id="ltclid93_title">Contact</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.63535e-05 0.499998L0.500077 0L15.5 1.97887e-05L16 0.50002V15.5L15.5 16H0.500003L2.6226e-06 15.5L7.63535e-05 0.499998ZM1.00007 1L1.00001 15H15V1.00002L1.00007 1ZM8 2.99878C6.89543 2.99878 6 3.89421 6 4.99878C6 6.10335 6.89543 6.99878 8 6.99878C9.10457 6.99878 10 6.10335 10 4.99878C10 3.89421 9.10457 2.99878 8 2.99878ZM5 4.99878C5 3.34192 6.34315 1.99878 8 1.99878C9.65685 1.99878 11 3.34192 11 4.99878C11 6.65563 9.65685 7.99878 8 7.99878C6.34315 7.99878 5 6.65563 5 4.99878ZM3.5 9L3 9.5V14H4V10H12V14H13V9.5L12.5 9H3.5Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  dollarRounded: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid94_title "
    >
      <title id="ltclid94_title">Coin</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.998901C4.13401 0.998901 1 4.13291 1 7.9989C1 11.8649 4.13401 14.9989 8 14.9989C11.866 14.9989 15 11.8649 15 7.9989C15 4.13291 11.866 0.998901 8 0.998901ZM0 7.9989C0 3.58062 3.58172 -0.00109863 8 -0.00109863C12.4183 -0.00109863 16 3.58062 16 7.9989C16 12.4172 12.4183 15.9989 8 15.9989C3.58172 15.9989 0 12.4172 0 7.9989ZM6.03959 5.50295C6.38117 5.17764 6.83945 4.9989 7.3125 4.9989H7.5V4.77163V3.4989V2.9989H8.5V3.4989V4.77163V4.9989H8.6875H8.69778L8.70804 4.99932C9.06419 5.01397 9.40983 5.12978 9.70035 5.33473L10.1089 5.62296L9.53245 6.44008L9.12389 6.15185C8.99575 6.06146 8.84005 6.00735 8.67607 5.9989H7.3125C7.08935 5.9989 6.87996 6.08355 6.72925 6.22709C6.57937 6.36983 6.5 6.55808 6.5 6.7489C6.5 6.93972 6.57937 7.12797 6.72925 7.27072C6.87996 7.41425 7.08935 7.4989 7.3125 7.4989H8.6875C9.16055 7.4989 9.61883 7.67764 9.96041 8.00295C10.3028 8.32905 10.5 8.77668 10.5 9.2489C10.5 9.72112 10.3028 10.1688 9.96041 10.4949C9.61883 10.8202 9.16055 10.9989 8.6875 10.9989H8.5V12.4989V12.9989H7.5V12.4989V10.9989H7.3125H7.30222L7.29196 10.9985C6.93581 10.9838 6.59017 10.868 6.29965 10.6631L5.89109 10.3748L6.46755 9.55772L6.87611 9.84595C7.00425 9.93635 7.15995 9.99045 7.32393 9.9989H8.6875C8.91065 9.9989 9.12004 9.91425 9.27075 9.77072C9.42063 9.62797 9.5 9.43972 9.5 9.2489C9.5 9.05808 9.42063 8.86983 9.27075 8.72709C9.12004 8.58355 8.91065 8.4989 8.6875 8.4989H7.3125C6.83945 8.4989 6.38117 8.32016 6.03959 7.99485C5.69719 7.66876 5.5 7.22112 5.5 6.7489C5.5 6.27668 5.69719 5.82905 6.03959 5.50295Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  warning: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid95_title "
    >
      <title id="ltclid95_title">Warning</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.999756C4.13401 0.999756 1 4.13376 1 7.99976C1 11.8657 4.13401 14.9998 8 14.9998C11.866 14.9998 15 11.8657 15 7.99976C15 4.13376 11.866 0.999756 8 0.999756ZM0 7.99976C0 3.58148 3.58172 -0.000244141 8 -0.000244141C12.4183 -0.000244141 16 3.58148 16 7.99976C16 12.418 12.4183 15.9998 8 15.9998C3.58172 15.9998 0 12.418 0 7.99976ZM7.5 8.99951V3.99999H8.5V8.99951H7.5ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  message: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid98_title "
    >
      <title id="ltclid98_title">Chat</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 0L5 0.5V4H0.5L0 4.5V15.5L0.868577 15.8379L3.46995 13H10.5L11 12.5V9H12.6825L15.1988 10.8991L16 10.5V0.5L15.5 0H5.5ZM10 9H5.5L5 8.5V5H1V14.2146L2.88142 12.1621L3.25 12H10V9ZM12.85 8H6V1H15V9.49622L13.1512 8.10091L12.85 8Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  switch: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid99_title "
    >
      <title id="ltclid99_title">Reset</title>
      <path d="M1.5 13V9.5H5" stroke="currentColor"></path>
      <path d="M14.5 3L14.5 6.5L11 6.5" stroke="currentColor"></path>
      <path
        d="M14 8C14 11.3137 11.3137 14 8 14C5.91303 14 4.07492 12.9345 3 11.3178M2 8C2 4.68629 4.68629 2 8 2C10.087 2 11.9251 3.06551 13 4.68221"
        stroke="currentColor"
      ></path>
    </svg>
  ),
  signOut: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid100_title "
    >
      <title id="ltclid100_title">Log Out</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 0h8l.5.5v15l-.5.5H5v-1h8V1H5V0h.5ZM2.707 7.5l3.147-3.146L6.207 4 5.5 3.293l-.354.353-4 4v.708l4 4 .354.353.707-.707-.353-.354L2.707 8.5h7.46v-1h-7.46Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  linktreeLogoType: (props: LucideProps) => (
    <svg
      height="100%"
      viewBox="0 0 80 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Linktree Logo</title>
      <desc>Linktree Logo Symbol and Word Mark</desc>
      <path
        d="M0 1.72687H2.25964V13.6313H8.50582V15.7244H0V1.72687ZM10.7287 1.72687C10.9121 1.72444 11.0941 1.75816 11.2644 1.82609C11.4348 1.89402 11.59 1.99484 11.7214 2.12278C11.8528 2.25073 11.9576 2.4033 12.03 2.57178C12.1024 2.74026 12.1409 2.92135 12.1433 3.1047C12.1433 3.47987 11.9943 3.83967 11.729 4.10496C11.4637 4.37024 11.1039 4.51928 10.7287 4.51928C10.3536 4.51928 9.99375 4.37024 9.72847 4.10496C9.46318 3.83967 9.31415 3.47987 9.31415 3.1047C9.31491 2.92087 9.3523 2.73903 9.42412 2.56981C9.49594 2.40058 9.60076 2.24736 9.73245 2.11909C9.86414 1.99082 10.0201 1.89008 10.1911 1.82273C10.3622 1.75539 10.5449 1.7228 10.7287 1.72687ZM9.62645 5.63991H11.7942V15.7244H9.62645V5.63991ZM13.0618 5.63991H15.2296V7.03612C15.8714 5.97059 16.9737 5.36435 18.425 5.36435C20.7765 5.36435 22.2462 7.20146 22.2462 10.1225V15.7244H20.0784V10.3062C20.0784 8.41395 19.2517 7.34843 17.7587 7.34843C16.1249 7.34843 15.2247 8.46906 15.2247 10.4899V15.7244H13.057L13.0618 5.63991ZM23.3852 1.72687H25.553V10.5817L29.5946 5.63991H32.3135L27.9963 10.692L32.3135 15.7244H29.5946L25.553 10.8022V15.7244H23.3852V1.72687ZM33.1586 3.07408H35.3631V5.64604H37.9351V7.44641H35.3631V12.6442C35.3631 13.3068 35.7673 13.7109 36.3919 13.7109H37.8445V15.7305H36.098C34.2058 15.7305 33.1586 14.6099 33.1586 12.6271V3.07408ZM38.8904 5.64604H41.0582V6.89527C41.5909 5.93998 42.4911 5.37047 43.5934 5.37047C43.8478 5.35888 44.1024 5.38993 44.3466 5.46233V7.48315C44.0813 7.42486 43.8097 7.40017 43.5383 7.40966C41.94 7.40966 41.0582 8.75688 41.0582 11.0655V15.7305H38.8904V5.64604ZM49.4158 5.37047C51.804 5.37047 54.3944 6.82179 54.3944 10.9185V11.2125H46.6234C46.79 13.0116 47.8359 14.0037 49.5811 14.0037C50.8304 14.0037 51.8959 13.3239 52.1347 12.3882H54.3393C54.1188 14.4078 52.0245 16.0061 49.5811 16.0061C46.4581 16.0061 44.4936 13.9669 44.4936 10.6797C44.4936 7.75259 46.3858 5.36435 49.4158 5.36435V5.37047ZM52.0796 9.41211C51.7673 8.16288 50.7936 7.37292 49.4158 7.37292C48.0931 7.37292 47.1574 8.18125 46.79 9.41211H52.0796ZM60.2731 5.37047C62.6614 5.37047 65.2517 6.82179 65.2517 10.9185V11.2125H57.4807C57.646 13.0116 58.6932 14.0037 60.4385 14.0037C61.6877 14.0037 62.7532 13.3239 62.992 12.3882H65.1966C64.9761 14.4078 62.8818 16.0061 60.4385 16.0061C57.3154 16.0061 55.3497 13.9669 55.3497 10.6797C55.3497 7.75259 57.2419 5.36435 60.2731 5.36435V5.37047ZM62.9369 9.41211C62.6246 8.16288 61.651 7.37292 60.2731 7.37292C58.9504 7.37292 58.0135 8.18125 57.646 9.41211H62.9369Z"
        fill="#000000"
      ></path>
      <path
        d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z"
        fill="#43E660"
      ></path>
    </svg>
  ),
  arrowLeft: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="true"
      aria-labelledby=" "
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.70711 4L2.06066 4.35355L7.70711 10L13.3536 4.35355L13.7071 4L14.4142 4.70711L14.0607 5.06066L8.06066 11.0607H7.35355L1.35355 5.06066L1 4.70711L1.70711 4Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  user2: (props: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid47_title "
    >
      <title id="ltclid47_title">Profile</title>
      <g clip-path="url(#clip0_1661_31625)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 6.00024C7 3.23882 9.23858 1.00024 12 1.00024C14.7614 1.00024 17 3.23882 17 6.00024C17 8.76167 14.7614 11.0002 12 11.0002C9.23858 11.0002 7 8.76167 7 6.00024ZM12 0.000244141C8.68629 0.000244141 6 2.68654 6 6.00024C6 9.31395 8.68629 12.0002 12 12.0002C15.3137 12.0002 18 9.31395 18 6.00024C18 2.68654 15.3137 0.000244141 12 0.000244141ZM3.5 15.5002L3 16.0002V24.0002H4V16.5002H20V24.0002H21V16.0002L20.5 15.5002H3.5Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1661_31625">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.000244141)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  signIn: (props: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid48_title "
    >
      <title id="ltclid48_title">Login</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2187 1.05566H21.7743L22.2743 1.55566V21.7779L21.7743 22.2779H10.2187H9.71875V21.2779H10.2187H21.2743V2.05566L10.2187 2.05566H9.71875V1.05566H10.2187ZM14.5556 12.1668L1 12.1664L1.00003 11.1664L14.5556 11.1668L14.7932 11.1668L9.86867 6.24223L9.51511 5.88867L10.2222 5.18157L10.5758 5.53512L16.3536 11.3129V12.02L10.5758 17.7978L10.2222 18.1513L9.51511 17.4442L9.86867 17.0907L14.7926 12.1668L14.5556 12.1668ZM15.0556 11.9038L15.2929 11.6665L15.0556 11.4291L15.0556 11.9038Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  switch2: (props: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid49_title "
    >
      <title id="ltclid49_title">Switch</title>
      <g clip-path="url(#clip0_3621_75128)">
        <path
          d="M3 17H8L9.67 14.614M13.33 9.387L15 7H21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M18 4L21 7L18 10"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M3 7H8L15 17H21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M18 20L21 17L18 14"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3621_75128">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  threeDots: (props: LucideProps) => (
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        fill="black"
        stroke="black"
        d="M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z"
      ></path>
      <path
        fill="black"
        stroke="black"
        d="M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z"
      ></path>
      <path
        fill="black"
        stroke="black"
        d="M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z"
      ></path>
    </svg>
  ),
  previewPhone: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415 852">
      <path
        d="M351 0H64A64 64 0 0 0 0 64v724a64 64 0 0 0 64 64h287a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64zm44 788a44 44 0 0 1-44 44H64a44 44 0 0 1-44-44V64a44 44 0 0 1 44-44h287a44 44 0 0 1 44 44z"
        data-name="Layer 1"
      />
    </svg>
  ),
  linktreeLogo: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
      height="100%"
    >
      <title>Linktree Logo</title>
      <desc>Linktree Logo Symbol</desc>
      <path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z"></path>
    </svg>
  ),
  linksIcon: (props: LucideProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid0_title "
    >
      <title id="ltclid0_title">Links</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2H0V1h16v1ZM0 5.5.5 5h15l.5.5v5l-.5.5H.5l-.5-.5v-5ZM1 6v4h14V6H1Zm-1 9h16v-1H0v1Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  appearanceIcon: (props: LucideProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid1_title "
    >
      <title id="ltclid1_title">Appearance</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.008 1a5.009 5.009 0 1 0 0 10.018v1A6.009 6.009 0 1 1 6.008 0v1Zm5.01 5.009A5.009 5.009 0 0 0 6.008 1V0a6.009 6.009 0 0 1 6.01 6.009h-1Zm-4.01.5-.5.5V15.5l.5.5H15.5l.5-.5V7.008l-.5-.5H7.007Zm.5 8.492V7.508H15v7.493H7.507Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  analyticsIcon: (props: LucideProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid2_title "
    >
      <title id="ltclid2_title">Analytics</title>
      <path
        clipRule="evenodd"
        d="m11 1-1 1v2h-4l-1 1v2h-4l-1 1v6l1 1h4l.5-.5.5.5h4l.5-.5.5.5h4l1-1v-12l-1-1zm0 13h1 2 1v-1-10-1h-1-2-1v1 2 8zm-1-9h-1-2-1v1 2 5 1h1 2 1v-1-7zm-6 3h1v1 4 1h-1-2-1v-1-4-1h1z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  ),
  settingsIcon: (props: LucideProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid3_title "
    >
      <title id="ltclid3_title">Settings</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4607 13.9951L4.53809 13.9951L1.07677 7.99995L4.53809 2.00476L11.4607 2.00476L14.9221 7.99995L11.4607 13.9951ZM0.0664062 8.24995L3.81641 14.7451L4.24942 14.9951L11.7494 14.9951L12.1824 14.7451L15.9324 8.24995V7.74995L12.1824 1.25476L11.7494 1.00476H4.24942L3.81641 1.25476L0.0664062 7.74995V8.24995ZM5.99923 7.99973C5.99923 6.89516 6.89466 5.99973 7.99923 5.99973C9.1038 5.99973 9.99923 6.89516 9.99923 7.99973C9.99923 9.1043 9.1038 9.99973 7.99923 9.99973C6.89466 9.99973 5.99923 9.1043 5.99923 7.99973ZM7.99923 4.99973C6.34238 4.99973 4.99923 6.34288 4.99923 7.99973C4.99923 9.65659 6.34238 10.9997 7.99923 10.9997C9.65609 10.9997 10.9992 9.65659 10.9992 7.99973C10.9992 6.34288 9.65609 4.99973 7.99923 4.99973Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  plusIcon: (props: LucideProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      aria-labelledby=" "
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 8.5V16H8.5V8.5H16V7.5H8.5V0H7.5V7.5H0V8.5H7.5Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  headerIcon: (props: LucideProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 -0.000244141H0V0.999755L0.5 0.999756L15.4999 0.999775L15.9999 0.999776L15.9999 -0.000224382L15.4999 -0.000225008L0.5 -0.000244141ZM0.500074 3.99976L7.37309e-05 4.49975L0 15.4998L0.5 15.9998H15.5L16 15.4998V4.49977L15.5 3.99977L0.500074 3.99976ZM1 14.9998L1.00007 4.99976L15 4.99977V14.9998H1Z"
        fill="black"
      ></path>
    </svg>
  ),
  searchIcon: (props: LucideProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      aria-labelledby=" "
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6.49976C1 3.46219 3.46243 0.999756 6.5 0.999756C9.53757 0.999756 12 3.46219 12 6.49976C12 9.53732 9.53757 11.9998 6.5 11.9998C3.46243 11.9998 1 9.53732 1 6.49976ZM6.5 -0.000244141C2.91015 -0.000244141 0 2.9099 0 6.49976C0 10.0896 2.91015 12.9998 6.5 12.9998C8.11495 12.9998 9.59234 12.4108 10.7291 11.436L14.6464 15.3533L15 15.7069L15.7071 14.9998L15.3536 14.6462L11.4362 10.7289C12.411 9.59209 13 8.1147 13 6.49976C13 2.9099 10.0899 -0.000244141 6.5 -0.000244141Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  pencilIcon: (props: LucideProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      aria-labelledby=" "
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14V11.7071L9.5 4.20708L11.7929 6.49998L4.29289 14H2ZM12.5 5.79287L13.7929 4.49998L11.5 2.20708L10.2071 3.49998L12.5 5.79287ZM11.1464 1.14642L1.14645 11.1464L1 11.5V14.5L1.5 15H4.5L4.85355 14.8535L14.8536 4.85353V4.14642L11.8536 1.14642H11.1464Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
};
