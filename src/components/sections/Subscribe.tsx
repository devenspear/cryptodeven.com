import { motion } from 'framer-motion';
import { EnvelopeIcon, DocumentTextIcon, ChartBarIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Subscribe() {
  return (
    <section id="subscribe" className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Stay in the Loop
              </h2>
              <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
                Get our weekly newsletter with the latest insights and analysis.
              </p>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">FutureFast Dispatch — one email, every Friday</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <DocumentTextIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-gray-600 dark:text-gray-300">1 big idea explained simply</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChartBarIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-gray-600 dark:text-gray-300">1 key chart or quote</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <ArrowPathIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-gray-600 dark:text-gray-300">3 hand-picked links for deeper learning</p>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  No spam, no hype — unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 py-10 px-6 shadow rounded-lg sm:p-10">
              <div className="text-center">
                <EnvelopeIcon className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Subscribe to our newsletter</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Join our community of crypto learners and stay ahead of the curve.
                </p>
              </div>
              
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    name="privacy-policy"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded"
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    I agree to the{' '}
                    <a href="/privacy" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    Subscribe now
                  </button>
                </div>
              </form>
              
              <div className="mt-6">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
