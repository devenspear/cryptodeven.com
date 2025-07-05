import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AnimateOnScroll } from '../animation/AnimateOnScroll';

export default function Hero() {
  // Use a state to handle client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="h-screen">
        {/* Empty section while loading */}
      </section>
    );
  }

  return (
    <section id="top" className="relative bg-gradient-to-br from-slate-50 to-white pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimateOnScroll type="fade-up" delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight sm:leading-tight lg:leading-tight">
              <span className="block pb-2">Crypto Doesn't Have to</span>
              <span className="block text-gradient pb-4">Be Confusing</span>
            </h1>
            <h2 className="mt-8 text-xl text-gray-600 sm:text-2xl lg:text-3xl font-normal leading-relaxed">
              Crypto clarity for absolute beginners
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={200}>
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-gray-600">
              From zero clue to crypto-confident. Plain-English guides, expert picks, and one weekly email that keeps you ahead.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={300}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#get-started"
                className="w-full sm:w-auto rounded-lg btn-gradient px-8 py-3 text-base font-semibold text-white shadow-soft hover:shadow-medium transform transition-all duration-200 text-center"
              >
                Get Started
              </Link>
              <Link
                href="#why"
                className="w-full sm:w-auto rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-soft hover:bg-gray-50 hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={400}>
            <div className="mt-20 flex justify-center">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-3 sm:space-y-0 text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No jargon
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Expert picks
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Weekly insights
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
