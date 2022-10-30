import React from "react";

const GmIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
          <use xlinkHref="#image0_92_586" transform="scale(0.0125)" />
        </pattern>
        <image
          id="image0_92_586"
          width="80"
          height="80"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default GmIcon;
