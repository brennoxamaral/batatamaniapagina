import React from "react";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark"; // 'light' is for light backgrounds (shows brown), 'dark' is for dark backgrounds (shows off-white)
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", theme = "light", size = "md" }: LogoProps) {
  const mainColor = theme === "light" ? "#4B3621" : "#F2EBE3"; // Brown vs Off-white
  const accentColor = "#E1AD01"; // Mustard yellow

  const dimMap = {
    sm: "w-28 h-10",
    md: "w-48 h-16",
    lg: "w-64 h-22",
  };

  return (
    <div id="batata-mania-logo-container" className={`inline-flex items-center justify-center select-none ${dimMap[size]} ${className}`}>
      <svg
        id="batata-mania-logo-svg"
        viewBox="0 0 240 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Decorative steaming potato icon */}
        <g id="logo-icon-group" transform="translate(10, 10)">
          {/* Steam puffs */}
          <path
            d="M20 12 C22 8, 25 8, 24 4 C23 2, 21 2, 19 4 C18 6, 19 9, 20 12 Z"
            fill={accentColor}
            opacity="0.8"
          />
          <path
            d="M32 15 C34 10, 37 10, 36 5 C35 3, 33 3, 31 5 C29 7, 31 11, 32 15 Z"
            fill={accentColor}
            opacity="0.6"
          />
          
          {/* Potato Body */}
          <path
            d="M5 38 C3 28, 12 18, 28 20 C44 22, 54 30, 52 42 C50 54, 38 56, 24 54 C12 52, 7 48, 5 38 Z"
            fill={theme === "light" ? mainColor : accentColor}
          />
          
          {/* Sliced Open Melting Butter Center */}
          <path
            d="M18 36 C25 32, 35 32, 40 38 C42 42, 36 48, 28 48 C18 48, 14 42, 18 36 Z"
            fill={theme === "light" ? accentColor : "#F2EBE3"}
          />
          <path
            d="M24 38 C28 36, 32 36, 34 40 C35 42, 32 44, 28 44 C24 44, 22 42, 24 38 Z"
            fill="#FFFFFF"
          />
          
          {/* Face: Happy closed eyes */}
          <path
            d="M13 32 Q15 30, 17 32"
            stroke={theme === "light" ? "#F2EBE3" : "#4B3621"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M41 33 Q43 31, 45 33"
            stroke={theme === "light" ? "#F2EBE3" : "#4B3621"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Smiling mouth */}
          <path
            d="M25 43 Q28 47, 31 43"
            stroke={theme === "light" ? "#F2EBE3" : "#4B3621"}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Dots on potato */}
          <circle cx="9" cy="30" r="1" fill={theme === "light" ? "#F2EBE3" : "#4B3621"} opacity="0.6" />
          <circle cx="47" cy="48" r="1" fill={theme === "light" ? "#F2EBE3" : "#4B3621"} opacity="0.6" />
          <circle cx="49" cy="28" r="1.2" fill={theme === "light" ? "#F2EBE3" : "#4B3621"} opacity="0.6" />
        </g>

        {/* Brand Text */}
        <g id="logo-text-group" transform="translate(72, 12)">
          {/* "BATATA" */}
          <text
            x="0"
            y="28"
            fill={mainColor}
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="26"
            letterSpacing="1"
          >
            BATATA
          </text>
          
          {/* "MANIA" */}
          <text
            x="0"
            y="52"
            fill={accentColor}
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="900"
            fontSize="24"
            letterSpacing="3"
          >
            MANIA
          </text>

          {/* Delivery tag */}
          <rect
            x="96"
            y="36"
            width="58"
            height="16"
            rx="8"
            fill={theme === "light" ? mainColor : "#F2EBE3"}
            opacity="0.9"
          />
          <text
            x="125"
            y="47"
            textAnchor="middle"
            fill={theme === "light" ? "#F2EBE3" : "#4B3621"}
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="700"
            fontSize="8"
            letterSpacing="0.5"
          >
            DELIVERY
          </text>
        </g>
      </svg>
    </div>
  );
}
