import React from "react";

export const MasterIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
          <use xlinkHref="#image0_92_585" transform="scale(0.0125)" />
        </pattern>
        <image
          id="image0_92_585"
          width="80"
          height="80"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MasterIcon;
