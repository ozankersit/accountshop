import React from "react";

export const SearchIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      {...props}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_407_445)">
        <path
          d="M4.25808 10.3441C3.28978 9.02279 2.85609 7.38459 3.04377 5.75725C3.23146 4.12991 4.02667 2.63344 5.27032 1.56723C6.51396 0.501022 8.11433 -0.0562959 9.75124 0.00677721C11.3882 0.0698504 12.9409 0.748663 14.0988 1.90741C15.2567 3.06615 15.9344 4.61938 15.9963 6.25633C16.0582 7.89329 15.4998 9.49326 14.4327 10.7361C13.3656 11.979 11.8685 12.7732 10.2411 12.9597C8.61359 13.1462 6.9757 12.7113 5.65508 11.7421H5.65608C5.62608 11.7821 5.59408 11.8201 5.55808 11.8571L1.70808 15.7071C1.52057 15.8947 1.2662 16.0002 1.00093 16.0003C0.735662 16.0004 0.48122 15.8951 0.293579 15.7076C0.105938 15.5201 0.000469208 15.2657 0.000375748 15.0005C0.000282288 14.7352 0.105572 14.4807 0.293079 14.2931L4.14308 10.4431C4.17883 10.4069 4.21728 10.3735 4.25808 10.3431V10.3441ZM4.00008 6.5001C4.00008 7.22237 4.14234 7.93757 4.41874 8.60486C4.69514 9.27215 5.10027 9.87847 5.61099 10.3892C6.12171 10.8999 6.72803 11.305 7.39532 11.5814C8.06261 11.8578 8.77781 12.0001 9.50008 12.0001C10.2223 12.0001 10.9375 11.8578 11.6048 11.5814C12.2721 11.305 12.8784 10.8999 13.3892 10.3892C13.8999 9.87847 14.305 9.27215 14.5814 8.60486C14.8578 7.93757 15.0001 7.22237 15.0001 6.5001C15.0001 5.04141 14.4206 3.64246 13.3892 2.61101C12.3577 1.57956 10.9588 1.0001 9.50008 1.0001C8.04139 1.0001 6.64244 1.57956 5.61099 2.61101C4.57954 3.64246 4.00008 5.04141 4.00008 6.5001Z"
          fill="#0F0F0F"
        />
      </g>
      <defs>
        <clipPath id="clip0_407_445">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="matrix(-1 0 0 1 16 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
