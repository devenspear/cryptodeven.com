import { motion } from 'framer-motion';
import { CheckCircleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    id: 1,
    name: 'Create a Coinbase account',
    description: 'Sign up → verify ID → enable 2-factor authentication.',
    href: 'https://www.coinbase.com/signup',
  },
  {
    id: 2,
    name: 'Link payment method',
    description: 'Bank transfer (low fee, 1-3 days) or debit card (instant, higher fee).',
  },
  {
    id: 3,
    name: 'Buy Bitcoin',
    description: 'Any amount works—Bitcoin is divisible to 8 decimal places.',
  },
  {
    id: 4,
    name: 'Set up cold storage',
    description: 'Order a Ledger Nano S Plus or Trezor Model T → write down the 24-word seed.',
    links: [
      { name: 'Buy Ledger', href: 'https://shop.ledger.com/' },
      { name: 'Buy Trezor', href: 'https://trezor.io/' },
    ],
  },
  {
    id: 5,
    name: 'Withdraw to your wallet',
    description: 'Send a $5 test, confirm, then move the rest. Congratulations!',
  },
];

export default function GetStarted() {
  return (
    <section id="get-started" className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get Started
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Own your first Bitcoin and move it to safe storage in ≈ 15 minutes.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-12">
            {steps.map((step, stepIdx) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stepIdx * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      {step.href ? (
                        <a 
                          href={step.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {step.id}. {step.name}
                          <ArrowTopRightOnSquareIcon className="ml-1.5 h-4 w-4 flex-shrink-0" />
                        </a>
                      ) : (
                        <span>{step.id}. {step.name}</span>
                      )}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                    {step.links && (
                      <div className="mt-2 flex flex-wrap gap-3">
                        {step.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
                          >
                            {link.name}
                            <ArrowTopRightOnSquareIcon className="ml-1 h-3.5 w-3.5 flex-shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 md:p-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                <span className="font-medium">Bookmark this section</span> for reference; it's all you need to take control of sound money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
