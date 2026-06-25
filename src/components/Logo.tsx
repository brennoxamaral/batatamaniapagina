import React from "react";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark"; // 'light' is for light backgrounds (shows dark/colored logo), 'dark' is for dark backgrounds (shows light/white logo)
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", theme = "light", size = "md" }: LogoProps) {
  // Use the official vectorized logo. On dark backgrounds, we invert it to white for perfect contrast.
  const logoSrc = "/Logo Batata Mania Vetorizadas.png";

  const sizeMap = {
    sm: "w-16 md:w-20",
    md: "w-28 md:w-36",
    lg: "w-40 md:w-48",
  };

  return (
    <div id="batata-mania-logo-container" className={`flex items-center justify-center select-none ${className}`}>
      <img
        id="batata-mania-logo-img"
        src={logoSrc}
        alt="Batata Mania"
        className={`${sizeMap[size]} h-auto object-contain transition-all duration-300 ${
          theme === "dark" ? "brightness-0 invert" : ""
        }`}
        decoding="async"
        loading="eager"
      />
    </div>
  );
}

