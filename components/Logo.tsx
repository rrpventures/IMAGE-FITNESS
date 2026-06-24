'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export default function Logo({ className = '', width = '100%', height = '100%' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 100"
      width={width}
      height={height}
      className={className}
      id="image-fitness-svg-logo"
    >
      <defs>
        {/* Blue/Azure Gradient matching the provided logo image */}
        <linearGradient id="logoBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d3a75" /> {/* Darker Navy Blue */}
          <stop offset="50%" stopColor="#2563eb" /> {/* Vibrant Blue */}
          <stop offset="100%" stopColor="#79c8f2" /> {/* Azure Sky Blue */}
        </linearGradient>
      </defs>

      {/* Stylized Leaping Athlete / Star Graphic on the Left */}
      <g id="logo-athlete-graphic">
        {/* Head */}
        <circle cx="36" cy="15" r="5" fill="#ffffff" opacity="0.9" id="athlete-head" />
        
        {/* Five-point dynamic athletic star body */}
        <path
          d="M 32,20 C 24,22 14,22 4,21 C 16,26 26,30 32,33 C 24,48 14,66 4,82 C 17,65 27,51 34,41 C 38,48 46,52 58,56 C 44,46 38,39 38,33 C 44,31 52,29 62,27 C 48,26 40,24 32,20 Z"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="0.8"
          opacity="0.18"
          id="athlete-body-main"
        />
        
        {/* Dynamic motion lines */}
        <path
          d="M 4,21 L 32,33 L 4,82"
          stroke="#ffffff"
          strokeWidth="1"
          fill="none"
          opacity="0.25"
          id="athlete-motion-left"
        />
        <path
          d="M 62,27 L 38,33 L 58,56"
          stroke="#ffffff"
          strokeWidth="1"
          fill="none"
          opacity="0.25"
          id="athlete-motion-right"
        />
      </g>

      {/* "image" Text */}
      <text
        x="52"
        y="54"
        fontFamily="var(--font-sans), 'Montserrat', 'Inter', sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="56"
        fill="url(#logoBlueGradient)"
        letterSpacing="-2.5"
        id="logo-text-image"
      >
        image
      </text>

      {/* "FITNESS" Text */}
      <text
        x="55"
        y="84"
        fontFamily="var(--font-sans), 'Montserrat', 'Inter', sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.2"
        letterSpacing="6"
        opacity="0.9"
        id="logo-text-fitness"
      >
        FITNESS
      </text>
    </svg>
  );
}
