import { AnimateOnScroll } from '../animation/AnimateOnScroll';
import BitcoinPrice from '../ui/BitcoinPrice';

export default function WhyCryptoDeven() {
  return (
    <section id="why" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll type="fade-up" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            <span className="text-gradient">Why now?</span> Bitcoin hits 10% adoption milestone
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We're at the tipping point. History shows that once a technology reaches 10% adoption, 
            mass adoption follows rapidly. Don't get left behind.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimateOnScroll type="fade-up" delay={100}>
            <div className="rounded-xl bg-white p-8 text-center shadow-medium transition-all duration-500 h-64 flex flex-col justify-between group">
              <div>
                <div className="mx-auto h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">10%</h3>
                <p className="text-lg font-semibold text-gray-900 mb-2">Current adoption rate</p>
              </div>
              <p className="text-sm text-gray-600">
                The critical mass threshold where exponential growth begins
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={200}>
            <div className="rounded-xl bg-white p-8 text-center shadow-medium transition-all duration-500 h-64 flex flex-col justify-between group">
              <div>
                <div className="mx-auto h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">$1.4T</h3>
                <p className="text-lg font-semibold text-gray-900 mb-2">Market capitalization</p>
              </div>
              <p className="text-sm text-gray-600">
                Larger than most countries' GDP, still growing rapidly
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll type="fade-up" delay={300}>
            <div className="rounded-xl bg-white p-8 text-center shadow-medium transition-all duration-500 h-64 flex flex-col justify-between group">
              <div>
                <div className="mx-auto h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">500M+</h3>
                <p className="text-lg font-semibold text-gray-900 mb-2">Global users</p>
              </div>
              <p className="text-sm text-gray-600">
                From early adopters to mainstream institutions
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <BitcoinPrice />

        <AnimateOnScroll type="fade-up" delay={400} className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            The window for early adoption is closing. Get educated before the next wave.
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center px-8 py-4 rounded-lg btn-gradient text-base font-semibold text-white shadow-soft hover:shadow-medium transform transition-all duration-200"
          >
            Start Learning Now
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
