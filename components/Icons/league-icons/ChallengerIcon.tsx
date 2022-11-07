import React from "react";

export const ChallengerIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
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
          <use xlinkHref="#image0_92_587" transform="scale(0.0125)" />
        </pattern>
        <image
          id="image0_92_587"
          width="80"
          height="80"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default ChallengerIcon;
