import * as React from "react";

function SvgVolumeOffSolid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="volume-off"
      className="volume-off-solid_svg__svg-inline--fa volume-off-solid_svg__fa-volume-off volume-off-solid_svg__fa-w-8"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M215 71l-89 89H24a24 24 0 00-24 24v144a24 24 0 0024 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"
      />
    </svg>
  );
}

export default SvgVolumeOffSolid;
