import React from "react";

// Animated wind turbine (rotating blades) for the hero backdrop.
// Rendered faint behind the hero content.
const Turbine = ({ className = "", spin = "14s", scale = 1 }) => (
  <svg
    viewBox="0 0 200 400"
    className={className}
    style={{ transform: `scale(${scale})` }}
    aria-hidden="true"
  >
    {/* Tower */}
    <polygon points="96,110 104,110 110,400 90,400" fill="currentColor" />
    {/* Nacelle */}
    <rect x="90" y="100" width="22" height="14" rx="4" fill="currentColor" />
    {/* Rotating blades group */}
    <g
      style={{
        transformOrigin: "100px 107px",
        transformBox: "fill-box",
        animation: `jc-rotate ${spin} linear infinite`,
      }}
    >
      <g transform="translate(100 107)">
        <circle r="7" fill="currentColor" />
        {[0, 120, 240].map((deg) => (
          <path
            key={deg}
            d="M0,-4 C22,-40 34,-78 8,-96 C2,-70 2,-30 0,4 Z"
            fill="currentColor"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
    </g>
  </svg>
);

const WindTurbine = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large primary turbine, center-right */}
      <Turbine
        className="absolute text-emerald-900/[0.10] right-[14%] top-[6%] h-[96%] w-auto hidden md:block"
        spin="16s"
      />
      {/* Secondary smaller turbine */}
      <Turbine
        className="absolute text-emerald-900/[0.07] right-[3%] top-[26%] h-[62%] w-auto hidden lg:block"
        spin="11s"
      />
      {/* Mobile single turbine */}
      <Turbine
        className="absolute text-emerald-900/[0.08] right-[-6%] top-[8%] h-[70%] w-auto md:hidden"
        spin="16s"
      />
    </div>
  );
};

export default WindTurbine;
