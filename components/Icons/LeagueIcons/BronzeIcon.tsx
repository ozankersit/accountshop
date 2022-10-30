import React from "react";

export const BronzeIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="17"
      {...props}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="16" height="16" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_92_581" transform="scale(0.0125)" />
        </pattern>
        <image
          id="image0_92_581"
          width="80"
          height="80"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default BronzeIcon;
