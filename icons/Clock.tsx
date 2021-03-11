import * as React from "react";

function SvgClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      {...props}
    >
      <defs>
        <linearGradient id="clock_svg__a">
          <stop offset={0} stopColor="#2000ee" />
          <stop offset={1} stopColor="#ff00f3" />
        </linearGradient>
        <linearGradient
          xlinkHref="#clock_svg__a"
          id="clock_svg__b"
          x1={5.069}
          y1={1002.362}
          x2={94.931}
          y2={1002.362}
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <g
        stroke="url(#clock_svg__b)"
        fill="none"
        strokeWidth={2}
        transform="translate(0 -952.362)"
      >
        <path d="M77.754 974.858l-7.403 7.787M88.332 1002.367l-9.848.051M77.946 1029.735l-7.786-7.403M30.329 1022.283l-7.26 7.644M22.148 1002.38l-10.542.025M30.521 982.31l-7.644-7.26M60.19 965.227l-.952 4.68M41.63 1034.496l-1.002 4.866M31.37 1035.567l2.13-4.275M67.226 973.462l2.227-4.44M17.284 1021.59l3.983-2.638M79.389 985.732l4.15-2.731M13.419 1012.358l4.53-1.516M82.688 993.797l4.715-1.565M60.474 1039.286l-1.515-4.53M41.913 970.017l-1.564-4.715M69.705 1035.421l-2.636-3.983M33.849 973.316l-2.732-4.15M83.684 1021.336l-4.275-2.132M21.578 985.48l-4.44-2.228M13.343 992.514l4.681.952M82.613 1011.074l4.865 1.003M50.382 1041.198l.059-10.744M50.443 974.129l-.062-10.542" />
        <circle cx={50} cy={1002.362} r={38.235} />
        <path d="M48.151 999.818l-12.684-21.97-.187-.77.54.566 12.685 21.97.218.75zM51.642 1003.519l20.68 10.322.751.104-.507-.481-20.679-10.323-.73-.137z" />
        <circle r={2.819} cy={1002.362} cx={50} />
        <circle cx={50} cy={1002.362} r={1.636} />
        <circle r={0.896} cy={1002.362} cx={50} />
        <circle r={43.931} cy={1002.362} cx={50} />
      </g>
    </svg>
  );
}

export default SvgClock;
