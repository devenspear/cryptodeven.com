'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'fade-in'
  | 'bitcoin-pulse'
  | 'float'
  | 'shine';

interface AnimateOnScrollProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  type = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animationRef = useRef<number | null>(null);

  // Preload content immediately
  useEffect(() => {
    setIsPreloaded(true);
  }, []);

  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Cleanup any pending animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animation triggering
          animationRef.current = requestAnimationFrame(() => {
            setIsVisible(true);
            // Stop observing after animation starts
            if (elementRef.current && observerRef.current) {
              observerRef.current.unobserve(elementRef.current);
            }
          });
        }
      });
    };

    // Create new observer with mobile-optimized settings
    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold: threshold,
      rootMargin: '0px 0px -20px 0px' // Start animation when element is 20px from viewport (more responsive)
    });

    // Start observing
    const currentElement = elementRef.current;
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [type, delay, threshold]);

  // Map animation types to their corresponding classes
  const animationClasses: Record<AnimationType, string> = {
    'fade-up': 'transform translate-y-4',
    'fade-down': 'transform -translate-y-4',
    'fade-left': 'transform translate-x-4',
    'fade-right': 'transform -translate-x-4',
    'fade-in': 'opacity-90',
    'bitcoin-pulse': 'opacity-90',
    'float': 'opacity-90',
    'shine': 'opacity-90',
  };

  // Add specific animation classes when element is visible
  const getAnimationClass = () => {
    // Content is always visible, but animations enhance the experience
    if (!isPreloaded) return 'opacity-100'; // Fallback for no-JS
    
    if (!isVisible) {
      // Before scrolling into view - subtle initial state
      switch (type) {
        case 'bitcoin-pulse':
        case 'float':
        case 'shine':
          return 'opacity-90';
        default:
          return animationClasses[type];
      }
    }
    
    // When scrolled into view - enhanced animations
    switch (type) {
      case 'bitcoin-pulse':
        return 'opacity-100 animate-bitcoin-pulse';
      case 'float':
        return 'opacity-100 animate-float';
      case 'shine':
        return 'opacity-100 animate-shine';
      case 'fade-up':
        return 'transform translate-y-0 opacity-100';
      case 'fade-down':
        return 'transform translate-y-0 opacity-100';
      case 'fade-left':
        return 'transform translate-x-0 opacity-100';
      case 'fade-right':
        return 'transform translate-x-0 opacity-100';
      default:
        return 'opacity-100';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${className || ''} ${getAnimationClass()}`}
      style={{
        transition: `opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        // Ensure content is always visible for accessibility and SEO
        minHeight: 'fit-content',
      }}
    >
      {children}
    </div>
  );
}
