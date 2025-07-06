import Image from 'next/image';
import { AnimateOnScroll } from '../animation/AnimateOnScroll';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll type="fade-up" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            About <span className="text-gradient">Deven</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll type="fade-up" delay={400}>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-medium">
              <div className="relative">
                <Image
                  src="/DevenHead2025.jpg"
                  alt="Deven Spear"
                  width={192}
                  height={192}
                  className="float-right ml-8 mb-6 w-48 h-auto rounded-lg shadow-medium object-cover"
                  quality={85}
                  loading="lazy"
                />
                <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                  <p>
                    For thirty years, Deven Spear has seen the future differently, building ventures at the intersection of fast-moving technology and deep human need. He bridges worlds—blending systems engineering with design thinking, and strategic analysis with artistry—to spot patterns of opportunity where others see chaos.
                  </p>
                  <p>
                    This unique perspective was shaped in the mid-1990s while experimenting with the foundations of Web 1.0 and informs his current work deciphering the third wave of disruption from AI and decentralized networks.
                  </p>
                  <p>
                    Ultimately, his entire career, spanning six ventures from software to Web3, has been defined by a single question: How can technology serve our deepest human needs?
                  </p>
                  <p>
                    Today, that question points unmistakably toward Bitcoin and blockchain—a global shift in trust architecture that empowers individuals to reclaim sovereignty over money, identity, and truth itself. Deven sees this moment as more than financial; it&apos;s civilizational. That&apos;s why he&apos;s committed to helping others cross the threshold from confusion to clarity—and from centralization to freedom.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8 clear-both">
                <a
                  href="https://www.deven.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 rounded-lg border border-gray-300 bg-white text-base font-semibold text-gray-900 shadow-soft hover:bg-gray-50 hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Learn more about Deven Spear
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>


      </div>
    </section>
  );
}
