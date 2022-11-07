import React from "react";

export const PlatIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
          <use xlinkHref="#image0_92_578" transform="scale(0.0125)" />
        </pattern>
        <image
          id="image0_92_578"
          width="80"
          height="80"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default PlatIcon;
