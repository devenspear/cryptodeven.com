import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { AnimateOnScroll } from '../animation/AnimateOnScroll';
import { AnimatedGradientText } from '../ui/GradientText';

export default function Hero() {
  // Use a state to handle client-side rendering
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="h-screen bg-white dark:bg-gray-900">
        {/* Empty section while loading */}
      </section>
    );
  }

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white/50 to-purple-50/50 dark:from-gray-900/50 dark:via-gray-900/50 dark:to-purple-900/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimateOnScroll type="fade-up" className="inline-block">
            <div className="group relative mb-4 inline-flex items-center overflow-hidden rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 transition-all duration-300 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:hover:bg-orange-900/50">
              <SparklesIcon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative z-10">New: Bitcoin 101 Guide Available</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={100} className="mt-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">CryptoDeven</span>
              <AnimatedGradientText className="block bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600">
                Bitcoin clarity for absolute beginners
              </AnimatedGradientText>
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={300} className="mt-10">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#get-started"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 dark:from-orange-600 dark:to-orange-700 dark:hover:shadow-orange-600/20 md:px-10 md:py-4 md:text-lg"
              >
                <span className="relative z-10 flex items-center">
                  <span>Get Started</span>
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-orange-700 dark:to-orange-800" />
              </Link>
              
              <Link
                href="#subscribe"
                className="group relative overflow-hidden rounded-lg border-2 border-orange-200 bg-white px-8 py-4 text-base font-medium text-orange-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-orange-300 hover:bg-orange-50 dark:border-orange-900 dark:bg-gray-800 dark:text-orange-300 dark:hover:bg-gray-700/80 md:px-10 md:py-4 md:text-lg"
              >
                <span className="relative z-10 flex items-center">
                  <span>Subscribe</span>
                  <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-100 text-xs text-orange-600 dark:bg-orange-900/50 dark:text-orange-300">
                    <span className="block h-1.5 w-1.5 animate-ping rounded-full bg-orange-500" />
                  </span>
                </span>
              </Link>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={400} className="mt-16">
            <div className="group relative">
              <a 
                href="#why" 
                className="group relative z-10 flex flex-col items-center text-orange-600 transition-all duration-300 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 mb-2 text-sm font-medium">
                  <span className="relative">
                    Scroll to learn more
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                </span>
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                  <ArrowDownIcon className="h-5 w-5 animate-bounce" />
                </div>
              </a>
              {/* Subtle hover effect */}
              <div 
                className="absolute inset-0 -z-0 rounded-full bg-gradient-to-br from-orange-50 to-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-orange-900/10 dark:to-purple-900/10"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
