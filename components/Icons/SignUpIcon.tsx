import React from "react";

export const SignUpIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="846"
      height="493"
      {...props}
      viewBox="0 0 846 493"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_149_721)">
        <rect
          x="27"
          y="12"
          width="806"
          height="453"
          fill="url(#pattern0)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_149_721"
          x="0"
          y="0"
          width="846"
          height="493"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-7" dy="8" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_149_721"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_149_721"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#image0_149_721"
            transform="translate(0 -0.000413907) scale(0.000520833 0.000926692)"
          />
        </pattern>
        <image
          id="image0_149_721"
          width="1920"
          height="1080"
        />
      </defs>
    </svg>
  );
};

export default SignUpIcon;