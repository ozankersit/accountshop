import React from "react";

const IronIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
          <use href="#image0_121_83" transform="scale(0.0125)" />
        </pattern>
        <image
          id="image0_121_83"
          width="80"
          height="80"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default IronIcon;
