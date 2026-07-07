import React from 'react';

export default function Logo({ className = "w-16 h-16", showText = true }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        <defs>
          {/* Metallic Silver-Grey Medallion Gradient */}
          <radialGradient
            id="silverGrad"
            cx="50%"
            cy="50%"
            r="50%"
            fx="30%"
            fy="30%"
          >
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="35%" stopColor="#e2e8f0" />
            <stop offset="70%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </radialGradient>

          {/* Sleek shadow for logo elements */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer Medallion Circle */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="url(#silverGrad)"
          stroke="#94a3b8"
          strokeWidth="2"
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Stylized 'K' (Dark Blue, behind 'C') */}
        <path
          d="M 112 55 L 112 110 M 112 82 L 138 52 M 112 82 L 140 112"
          stroke="#0d2d54"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#logoShadow)"
        />

        {/* Stylized 'C' (Orange, wrapping cloche) */}
        <path
          d="M 125 58 A 30 30 0 1 0 120 108"
          stroke="#ff7a00"
          strokeWidth="15"
          strokeLinecap="round"
          filter="url(#logoShadow)"
        />

        {/* Orange Cloche / Serving Platter (Inside 'C') */}
        <g transform="translate(68, 70)" filter="url(#logoShadow)">
          {/* Base plate */}
          <path
            d="M 5 22 L 35 22"
            stroke="#ff7a00"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Dome lid */}
          <path
            d="M 8 20 A 12 12 0 0 1 32 20 Z"
            fill="#ff7a00"
          />
          {/* Handle */}
          <circle
            cx="20"
            cy="7"
            r="2"
            fill="#ff7a00"
          />
          {/* Steam lines */}
          <path
            d="M 16 2 Q 18 4 17 6 M 20 1 Q 22 3 21 5 M 24 2 Q 26 4 25 6"
            stroke="#ff7a00"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Tilted Blue Chef's Hat (Sitting on top of 'C') */}
        <g transform="translate(74, 18) rotate(-15)" filter="url(#logoShadow)">
          {/* Bottom band */}
          <rect
            x="8"
            y="20"
            width="24"
            height="4"
            rx="2"
            fill="#0d2d54"
          />
          {/* Main puffy hat curves */}
          <path
            d="M 8 20 C 4 14, 12 6, 16 11 C 20 4, 28 6, 28 12 C 34 10, 36 17, 32 20 Z"
            fill="#0d2d54"
          />
        </g>

        {/* Bottom Curved Branding Text Area */}
        <g filter="url(#logoShadow)">
          {/* "C.K RESTAURANT" */}
          <text
            x="100"
            y="142"
            textAnchor="middle"
            fill="#0d2d54"
            fontSize="14"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.05em"
          >
            C.K RESTAURANT
          </text>
          
          {/* "AND FAST FOOD" */}
          <text
            x="100"
            y="158"
            textAnchor="middle"
            fill="#ff7a00"
            fontSize="10"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.08em"
          >
            AND FAST FOOD
          </text>
        </g>
      </svg>
    </div>
  );
}
