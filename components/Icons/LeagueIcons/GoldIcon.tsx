import React from "react";

export const GoldIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
          <use href="#image0_92_583" transform="scale(0.0125)" />
        </pattern>
        <image
          id="image0_92_583"
          width="80"
          height="80"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default GoldIcon;
