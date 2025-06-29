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
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animationRef = useRef<number | null>(null);

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

    // Create new observer
    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold: threshold,
      rootMargin: '0px 0px -50px 0px' // Start animation when element is 50px from viewport
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
    'fade-up': 'fade-in-up',
    'fade-down': 'fade-in-down',
    'fade-left': 'fade-in-left',
    'fade-right': 'fade-in-right',
    'fade-in': 'opacity-0',
    'bitcoin-pulse': 'opacity-0',
    'float': 'opacity-0',
    'shine': 'opacity-0',
  };

  // Add specific animation classes when element is visible
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (type) {
      case 'bitcoin-pulse':
        return 'opacity-100 animate-bitcoin-pulse';
      case 'float':
        return 'opacity-100 animate-float';
      case 'shine':
        return 'opacity-100 animate-shine';
      default:
        return animationClasses[type];
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${className || ''} ${getAnimationClass()}`}
      style={{
        transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
