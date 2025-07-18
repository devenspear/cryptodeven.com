import Link from 'next/link';
import { AnimateOnScroll } from '../animation/AnimateOnScroll';

export default function Hero() {
  return (
    <section id="top" className="relative bg-gradient-to-br from-slate-50 to-white pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimateOnScroll type="fade-up" delay={100}>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight sm:leading-tight lg:leading-tight">
              <span className="block pb-2">Crypto Doesn&apos;t Have to</span>
              <span className="block text-gradient pb-4">Be Confusing</span>
            </h1>
            <h2 className="mt-8 text-xl text-gray-600 sm:text-2xl lg:text-3xl font-normal leading-relaxed">
              Crypto clarity for absolute beginners
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={200}>
            <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-gray-600">
              From zero clue to crypto-confident. Plain-English guides, expert picks, and curated, trustworthy resources to help you start smart and stay secure.
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
          

        </div>
      </div>
    </section>
  );
}
