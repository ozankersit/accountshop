import React from "react";

const DiamondIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="17"
      {...props}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect y="0.5" width="16" height="16" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_92_584" transform="scale(0.0125)" />
        </pattern>
        <image
          id="image0_92_584"
          width="80"
          height="80"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default DiamondIcon;
