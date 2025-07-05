import { AnimateOnScroll } from '../animation/AnimateOnScroll';

const platforms = [
  {
    platform: "Coinbase",
    bestFor: "Complete beginners",
    features: "User-friendly interface, educational content, mobile app",
    easeOfUse: "Excellent",
    stars: "⭐⭐⭐⭐⭐",
    getStarted: "coinbase.com",
    color: "bg-blue-500",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700"
  },
  {
    platform: "Kraken",
    bestFor: "Intermediate users",
    features: "Advanced trading, lower fees, strong security",
    easeOfUse: "Good",
    stars: "⭐⭐⭐⭐",
    getStarted: "kraken.com",
    color: "bg-purple-500",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700"
  },
  {
    platform: "Gemini",
    bestFor: "Security-focused",
    features: "Regulated, insurance coverage, clean interface",
    easeOfUse: "Very Good",
    stars: "⭐⭐⭐⭐⭐",
    getStarted: "gemini.com",
    color: "bg-green-500",
    bgColor: "bg-green-100",
    textColor: "text-green-700"
  },
  {
    platform: "Swan Bitcoin",
    bestFor: "Bitcoin-only investors",
    features: "Dollar-cost averaging, Bitcoin focus, low fees",
    easeOfUse: "Good",
    stars: "⭐⭐⭐⭐",
    getStarted: "swanbitcoin.com",
    color: "bg-orange-500",
    bgColor: "bg-orange-100",
    textColor: "text-orange-700"
  },
  {
    platform: "Crypto.com",
    bestFor: "Rewards seekers",
    features: "Cashback rewards, wide coin selection, debit card",
    easeOfUse: "Good",
    stars: "⭐⭐⭐⭐",
    getStarted: "crypto.com",
    color: "bg-indigo-500",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-700"
  }
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll type="fade-up" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            <span className="text-gradient">Platform</span> Comparison
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Choose the right crypto platform for your needs and experience level
          </p>
        </AnimateOnScroll>

        {/* Desktop Table View */}
        <div className="mt-16 hidden lg:block">
          <AnimateOnScroll type="fade-up" delay={100}>
            <div className="overflow-hidden rounded-xl bg-white shadow-medium">
              {/* Header */}
              <div className="bg-gray-50 px-8 py-6">
                <div className="grid grid-cols-5 gap-8 text-base font-semibold text-gray-900">
                  <div>Platform</div>
                  <div>Best For</div>
                  <div>Notable Features</div>
                  <div className="text-center">Ease of Use</div>
                  <div className="text-center">Get Started</div>
                </div>
              </div>
              
              {/* Rows */}
              <div className="divide-y divide-gray-200">
                {platforms.map((platform, index) => (
                  <AnimateOnScroll key={platform.platform} type="fade-up" delay={150 + index * 50}>
                    <div className="px-8 py-8 hover:bg-gray-50 transition-colors duration-200">
                      <div className="grid grid-cols-5 gap-8 items-start">
                        {/* Platform */}
                        <div className="flex items-center">
                          <div className={`w-4 h-4 ${platform.color} rounded-full mr-4`}></div>
                          <div>
                            <div className="font-semibold text-gray-900 text-lg">{platform.platform}</div>
                          </div>
                        </div>
                        
                        {/* Best For */}
                        <div className="text-base text-gray-600">
                          {platform.bestFor}
                        </div>
                        
                        {/* Features */}
                        <div className="text-base text-gray-600">
                          {platform.features}
                        </div>
                        
                        {/* Ease of Use */}
                        <div className="text-center">
                          <div className="text-xl mb-2">{platform.stars}</div>
                          <div className="text-base font-medium text-gray-900">({platform.easeOfUse})</div>
                        </div>
                        
                        {/* Get Started */}
                        <div className="text-center">
                          <a
                            href={`https://${platform.getStarted}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center px-6 py-3 rounded-lg ${platform.bgColor} ${platform.textColor} text-base font-medium hover:shadow-soft transition-all duration-200 hover:-translate-y-0.5`}
                          >
                            Visit Site
                            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Mobile Card View */}
        <div className="mt-16 lg:hidden">
          <div className="space-y-6">
            {platforms.map((platform, index) => (
              <AnimateOnScroll key={platform.platform} type="fade-up" delay={100 + index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className={`w-5 h-5 ${platform.color} rounded-full mr-4`}></div>
                    <h3 className="text-2xl font-bold text-gray-900">{platform.platform}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <div className="text-base font-medium text-gray-500 mb-2">Best For</div>
                      <div className="text-lg text-gray-900">{platform.bestFor}</div>
                    </div>
                    
                    <div>
                      <div className="text-base font-medium text-gray-500 mb-2">Notable Features</div>
                      <div className="text-base text-gray-600">{platform.features}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-base font-medium text-gray-500 mb-2">Ease of Use</div>
                        <div className="flex items-center">
                          <span className="text-xl mr-3">{platform.stars}</span>
                          <span className="text-base font-medium text-gray-900">({platform.easeOfUse})</span>
                        </div>
                      </div>
                      
                      <a
                        href={`https://${platform.getStarted}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 rounded-lg ${platform.bgColor} ${platform.textColor} text-base font-medium hover:shadow-soft transition-all duration-200 hover:-translate-y-0.5`}
                      >
                        Visit Site
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 