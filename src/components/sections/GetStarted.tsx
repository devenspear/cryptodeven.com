import { AnimateOnScroll } from '../animation/AnimateOnScroll';
import { useState } from 'react';

export default function GetStarted() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const steps = [
    {
      step: '1',
      title: 'Create Coinbase Account',
      description: 'Sign up for a trusted exchange to buy your first Bitcoin',
      time: '5 minutes',
      isOptional: false,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      detailTitle: "🔷 Step 1: Create Coinbase Account",
      detailContent: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Getting started is as easy as signing up. Coinbase is the most beginner-friendly crypto platform in the U.S., trusted by over 100 million users. It's fully regulated, secure, and easy to navigate.
          </p>
          <div className="space-y-2">
            <div className="flex items-center text-green-600">
              <span className="mr-2">✅</span>
              <span>Upload a photo ID</span>
            </div>
            <div className="flex items-center text-green-600">
              <span className="mr-2">✅</span>
              <span>Set up two-factor authentication (2FA)</span>
            </div>
            <div className="flex items-center text-green-600">
              <span className="mr-2">✅</span>
              <span>You're ready to explore crypto</span>
            </div>
          </div>
        </div>
      )
    },
    {
      step: '2',
      title: 'Link Payment Method',
      description: 'Connect your bank account or debit card securely',
      time: '3 minutes',
      isOptional: false,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      detailTitle: "🔷 Step 2: Link Payment Method",
      detailContent: (
        <div className="space-y-4">
          <p className="text-gray-600">
            To buy your first Bitcoin, you'll need to connect a bank account, debit card, or Apple Pay.
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-blue-500 mr-2">🔹</span>
              <div>
                <span className="font-medium">Bank transfer (ACH):</span>
                <span className="text-gray-600"> Lower fees, but takes 1–3 days</span>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-blue-500 mr-2">🔹</span>
              <div>
                <span className="font-medium">Debit card:</span>
                <span className="text-gray-600"> Instant but higher fees</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600">
            All your info is encrypted and secure. Coinbase works with major banks and processors across the U.S.
          </p>
        </div>
      )
    },
    {
      step: '3',
      title: 'Buy Bitcoin',
      description: 'Start small - even $25 gets you learning',
      time: '2 minutes',
      isOptional: false,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      detailTitle: "🔷 Step 3: Buy Bitcoin",
      detailContent: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Start small — even $10 buys you a piece of the future.
          </p>
          <p className="text-gray-600">
            Buying Bitcoin is as simple as clicking "Buy" on your dashboard. Choose how much to invest, confirm your payment method, and you're done.
          </p>
          <div className="space-y-2">
            <div className="flex items-center text-green-600">
              <span className="mr-2">✅</span>
              <span>No need to buy a full coin</span>
            </div>
            <div className="flex items-center text-green-600">
              <span className="mr-2">✅</span>
              <span>Bitcoin is divisible into satoshis (fractions)</span>
            </div>
          </div>
        </div>
      )
    },
    {
      step: '4',
      title: 'Set Up Cold Storage',
      description: 'Get a hardware wallet for long-term security',
      time: '30 minutes',
      isOptional: true,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      detailTitle: "🔷 Step 4: Set Up Cold Storage (Optional)",
      detailContent: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Cold storage means keeping your Bitcoin offline, protected from hackers. This step provides additional security for long-term holdings.
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="text-gray-700 mr-2">🔒</span>
              <span>Use a hardware wallet like Ledger Nano or Trezor</span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-700 mr-2">🔑</span>
              <span>Write down your 24-word recovery phrase and store it safely (not online!)</span>
            </div>
          </div>
          <p className="text-gray-600">
            This is how you truly own your crypto — no one can access your funds without that phrase.
          </p>
        </div>
      )
    },
    {
      step: '5',
      title: 'Transfer to Wallet',
      description: 'Move your Bitcoin off the exchange for true ownership',
      time: '15 minutes',
      isOptional: true,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      detailTitle: "🔷 Step 5: Transfer to Wallet (Optional)",
      detailContent: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Time to move your Bitcoin off the exchange and into your own wallet — your digital safe. This provides additional security and true ownership.
          </p>
          <div className="space-y-2">
            <div className="flex items-center text-green-600">
              <span className="mr-2">✅</span>
              <span>Start with a small "test" transaction ($5–10)</span>
            </div>
            <div className="flex items-center text-green-600">
              <span className="mr-2">✅</span>
              <span>Confirm the address</span>
            </div>
            <div className="flex items-center text-green-600">
              <span className="mr-2">✅</span>
              <span>Then move the rest securely</span>
            </div>
          </div>
          <p className="text-gray-600">
            This gives you full control, removes third-party risk, and prepares you for long-term storage.
          </p>
        </div>
      )
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Handle mobile touch vs desktop hover
  const handleCardInteraction = (index: number, isMobile: boolean) => {
    if (isMobile) {
      toggleCard(index);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section id="get-started" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll type="fade-up" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Your <span className="text-gradient">5-Step</span> Bitcoin Journey
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            From complete beginner to confident Bitcoin owner in under an hour
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.slice(0, 3).map((step, index) => (
            <AnimateOnScroll key={index} type="fade-up" delay={100 * (index + 1)}>
              <div 
                className={`relative rounded-xl bg-white p-6 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer h-full flex flex-col ${
                  expandedCard === index ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => toggleCard(index)}
                onMouseEnter={() => window.innerWidth >= 1024 && setExpandedCard(index)}
                onMouseLeave={() => window.innerWidth >= 1024 && setExpandedCard(null)}
              >
                <div className="absolute -top-4 left-8">
                  <div className="flex items-center justify-center w-8 h-8 btn-gradient text-white rounded-full text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                {expandedCard === index ? (
                  // Expanded view
                  <div className="pt-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{step.detailTitle}</h3>
                    {step.detailContent}
                  </div>
                ) : (
                  // Default view
                  <div className="pt-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                        <div className="text-indigo-600">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {step.time}
                        </span>
                        {step.isOptional && (
                          <span className="text-xs text-blue-600 mt-1 font-medium">
                            Optional
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 flex-1">{step.description}</p>
                    <div className="mt-4 text-sm text-indigo-600 font-medium">
                      <span className="hidden lg:inline">Hover or click for details →</span>
                      <span className="lg:hidden">Tap for details →</span>
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Centered cards 4 and 5 */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {steps.slice(3).map((step, index) => (
            <AnimateOnScroll key={index + 3} type="fade-up" delay={100 * (index + 4)}>
              <div 
                className={`relative rounded-xl bg-white p-6 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer h-full flex flex-col ${
                  expandedCard === index + 3 ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => toggleCard(index + 3)}
                onMouseEnter={() => window.innerWidth >= 1024 && setExpandedCard(index + 3)}
                onMouseLeave={() => window.innerWidth >= 1024 && setExpandedCard(null)}
              >
                <div className="absolute -top-4 left-8">
                  <div className="flex items-center justify-center w-8 h-8 btn-gradient text-white rounded-full text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                {expandedCard === index + 3 ? (
                  // Expanded view
                  <div className="pt-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{step.detailTitle}</h3>
                    {step.detailContent}
                  </div>
                ) : (
                  // Default view
                  <div className="pt-4 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                        <div className="text-indigo-600">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {step.time}
                        </span>
                        {step.isOptional && (
                          <span className="text-xs text-blue-600 mt-1 font-medium">
                            Optional
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 flex-1">{step.description}</p>
                    <div className="mt-4 text-sm text-indigo-600 font-medium">
                      <span className="hidden lg:inline">Hover or click for details →</span>
                      <span className="lg:hidden">Tap for details →</span>
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll type="fade-up" delay={600} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 sm:p-8 border border-indigo-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Ready to take your first step into the future of money?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg btn-gradient text-base font-semibold text-white shadow-soft hover:shadow-medium transform transition-all duration-200"
              >
                → Start with Coinbase
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#resources"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg border border-gray-300 bg-white text-base font-semibold text-gray-900 shadow-soft hover:bg-gray-50 hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-200"
              >
                → Learn More First
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
