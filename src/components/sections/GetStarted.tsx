import { AnimateOnScroll } from '../animation/AnimateOnScroll';

export default function GetStarted() {
  const steps = [
    {
      step: '1',
      title: 'Create Coinbase Account',
      description: 'Sign up for a trusted exchange to buy your first Bitcoin',
      time: '5 minutes',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      step: '2',
      title: 'Link Payment Method',
      description: 'Connect your bank account or debit card securely',
      time: '3 minutes',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      step: '3',
      title: 'Buy Bitcoin',
      description: 'Start small - even $25 gets you learning',
      time: '2 minutes',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      step: '4',
      title: 'Set Up Cold Storage',
      description: 'Get a hardware wallet for long-term security',
      time: '30 minutes',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      step: '5',
      title: 'Transfer to Wallet',
      description: 'Move your Bitcoin off the exchange for true ownership',
      time: '15 minutes',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

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
          {steps.map((step, index) => (
            <AnimateOnScroll key={index} type="fade-up" delay={100 * (index + 1)}>
              <div className="relative rounded-xl bg-white p-8 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="absolute -top-4 left-8">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg">
                      <div className="text-indigo-600">
                        {step.icon}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll type="fade-up" delay={600} className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Ready to take your first step into the future of money?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://coinbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-indigo-600 text-base font-semibold text-white shadow-soft hover:bg-indigo-500 hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start with Coinbase
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#resources"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-300 bg-white text-base font-semibold text-gray-900 shadow-soft hover:bg-gray-50 hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Learn More First
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
