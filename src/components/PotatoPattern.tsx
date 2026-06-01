import React from "react";

export default function PotatoPattern() {
  return (
    <div
      id="potato-pattern-bg"
      className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
      style={{ backgroundColor: "#F2EBE3" }}
    >
      <svg
        id="potato-pattern-svg"
        className="absolute inset-0 w-full h-full opacity-65"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Define a custom repeating pattern of hand-drawn vector potatoes */}
          <pattern
            id="potato-illustrations"
            x="0"
            y="0"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            {/* Potato Design 1: Large organic round potato */}
            <g transform="translate(15, 15) rotate(12) scale(0.7)">
              <path
                d="M15,45 C12,30 25,12 55,14 C85,16 95,32 90,55 C85,78 65,85 45,80 C25,75 20,65 15,45 Z"
                fill="#4B3621"
                opacity="0.08"
              />
              {/* Potato dots */}
              <circle cx="32" cy="30" r="1.5" fill="#4B3621" opacity="0.12" />
              <circle cx="68" cy="28" r="1.2" fill="#4B3621" opacity="0.12" />
              <circle cx="48" cy="58" r="1.5" fill="#4B3621" opacity="0.12" />
              <circle cx="75" cy="48" r="1.8" fill="#4B3621" opacity="0.12" />
              {/* Soft sketch lines */}
              <path
                d="M20,45 Q28,40 35,46"
                stroke="#4B3621"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
                opacity="0.06"
              />
            </g>

            {/* Potato Design 2: Medium elongated potato */}
            <g transform="translate(100, 95) rotate(-35) scale(0.55)">
              <path
                d="M10,35 C8,20 25,5 55,8 C85,11 100,24 95,44 C90,64 68,75 42,70 C24,66 12,55 10,35 Z"
                fill="#4B3621"
                opacity="0.07"
              />
              <circle cx="28" cy="24" r="1.2" fill="#4B3621" opacity="0.12" />
              <circle cx="62" cy="25" r="1.5" fill="#4B3621" opacity="0.12" />
              <circle cx="50" cy="52" r="1.2" fill="#4B3621" opacity="0.12" />
              <circle cx="78" cy="45" r="1.5" fill="#4B3621" opacity="0.12" />
            </g>

            {/* Potato Design 3: Small cute potato sprout */}
            <g transform="translate(120, 20) rotate(55) scale(0.4)">
              <path
                d="M20,40 C15,25 35,10 60,15 C85,20 80,45 70,60 C60,75 35,70 25,60 C15,50 25,45 20,40 Z"
                fill="#4B3621"
                opacity="0.06"
              />
              <circle cx="35" cy="30" r="1" fill="#4B3621" opacity="0.12" />
              <circle cx="52" cy="44" r="1.2" fill="#4B3621" opacity="0.12" />
            </g>

            {/* Potato Design 4: Tiny horizontal baby potato */}
            <g transform="translate(30, 115) rotate(-15) scale(0.35)">
              <path
                d="M15,30 C12,18 30,10 50,12 C70,14 78,25 72,40 C66,55 45,55 30,48 C18,42 18,36 15,30 Z"
                fill="#4B3621"
                opacity="0.05"
              />
              <circle cx="34" cy="24" r="1" fill="#4B3621" opacity="0.1" />
              <circle cx="58" cy="28" r="1" fill="#4B3621" opacity="0.1" />
            </g>
          </pattern>
        </defs>

        {/* Fill the background canvas with the illustrated potato pattern */}
        <rect width="100%" height="100%" fill="url(#potato-illustrations)" />
      </svg>
    </div>
  );
}
