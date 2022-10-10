import { FC } from "react";

export const LolCardIcon: FC = () => {
  return (
    <>
      <svg
        width="640"
        height="381"
        viewBox="0 0 640 381"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_469_124)">
          <rect width="640" height="381" rx="7" fill="white" />
          <rect
            x="-325"
            y="-101"
            width="1009"
            height="568"
            fill="url(#pattern0)"
          />
          <rect width="640" height="382" fill="url(#paint0_linear_469_124)" />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="translate(-0.00038542) scale(0.000390926 0.000694444)" />
          </pattern>
          <linearGradient
            id="paint0_linear_469_124"
            x1="320"
            y1="0"
            x2="320"
            y2="382"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="1" stop-opacity="0.86" />
          </linearGradient>
          <clipPath id="clip0_469_124">
            <rect width="640" height="381" rx="7" fill="white" />
          </clipPath>
          <image id="image0_469_124" width="2560" height="1440" />
        </defs>
      </svg>
    </>
  );
};

export default LolCardIcon;
