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
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For thirty years, Deven Spear has seen the future differently, building ventures at the intersection of fast-moving technology and deep human need. He bridges worlds—blending systems engineering with design thinking, and strategic analysis with artistry—to spot patterns of opportunity where others see chaos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                This unique perspective was shaped in the mid-1990s while experimenting with the foundations of Web 1.0 and informs his current work deciphering the third wave of disruption from AI and decentralized networks.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ultimately, his entire career, spanning six ventures from software to Web3, has been defined by a single question: How can technology serve our deepest human needs?
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-flex items-center px-8 py-3 rounded-lg border border-gray-300 bg-white text-base font-semibold text-gray-900 shadow-soft hover:bg-gray-50 hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Learn more about Deven Spear
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll type="fade-up" delay={500}>
          <div className="mt-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-medium">
              <p className="text-gray-600">
                Have questions? Reach out at{' '}
                <a href="mailto:hello@cryptodeven.com" className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors">
                  hello@cryptodeven.com
                </a>
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
