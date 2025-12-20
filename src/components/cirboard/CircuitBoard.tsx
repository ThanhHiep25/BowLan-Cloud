'use client'
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface CircuitBoardProps {
  color?: string;
  opacity?: number;
  className?: string;
  animated?: boolean;
}

const CircuitBoard: React.FC<CircuitBoardProps> = ({ 
  color = "#f97316", // Default primary orange
  opacity = 0.1,
  className = "",
  animated = true
}) => {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;
  // Define circuit paths (traces)
  // Coordinates based on a 100x100 viewBox for scalability
  const paths = [
    // Top Left Complex
    "M 10 0 V 20 L 25 35 H 45",
    "M 0 15 H 15 L 25 25 V 50",
    
    // Center Area
    "M 45 35 V 60 L 35 70 H 10",
    "M 55 100 V 80 L 65 70 H 85",
    
    // Top Right
    "M 70 0 V 15 L 80 25 H 100",
    "M 85 35 L 95 25 V 0",
    
    // Bottom Right
    "M 100 60 H 80 L 70 70 V 100",
    "M 60 100 V 85 L 50 75 H 30",
    
    // Long connectors
    "M 30 0 V 10 H 60 V 0",
    "M 20 100 V 90 H 0"
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Define Glow Filter */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="trace-grad" x1="0%" y1="0%" x2="100%" y2="0%">
             <stop offset="0%" stopColor={color} stopOpacity="0" />
             <stop offset="50%" stopColor={color} stopOpacity="1" />
             <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {paths.map((d, i) => (
          <React.Fragment key={i}>
            {/* Base Trace (Static dim line) */}
            <path
              d={d}
              fill="none"
              stroke={color}
              strokeWidth="0.3"
              strokeOpacity={opacity}
              vectorEffect="non-scaling-stroke"
            />

            {/* Electricity Effect (animated only if allowed) */}
            {shouldAnimate && (
              <motion.path
                d={d}
                fill="none"
                stroke={`url(#trace-grad)`}
                strokeWidth="0.6"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 0.3, 0],
                  pathOffset: [0, 1, 1],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + ((i * 73) % 400) / 100,
                  repeat: Infinity,
                  ease: "linear",
                  delay: ((i * 53) % 500) / 100,
                  repeatDelay: ((i * 91) % 200) / 100
                }}
                style={{ filter: 'url(#glow)' }}
              />
            )}

            {/* Circuit Node/Dot at ends (optional, simplified for performance) */}
            <circle 
                cx={d.split(' ')[1]} 
                cy={d.split(' ')[2]} 
                r="0.4" 
                fill={color} 
                fillOpacity={opacity * 2} 
            />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default CircuitBoard;