'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  from?: string;
  via?: string;
  to?: string;
  className?: string;
}

export function GradientText({
  children,
  from = 'from-indigo-500',
  via = 'via-purple-500',
  to = 'to-pink-500',
  className = '',
}: GradientTextProps) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${from} ${via} ${to} ${className}`}
    >
      {children}
    </span>
  );
}

// Animated gradient text with floating effect
export function AnimatedGradientText({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 
                 transition-opacity duration-300"
        style={{
          filter: 'blur(8px)',
          transform: 'translateY(2px)',
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </div>
  );
}
