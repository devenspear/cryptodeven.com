import { motion } from 'framer-motion';
import { CheckCircleIcon, LightBulbIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'No Jargon',
    description: 'If you can send an email, you can understand Bitcoin here.',
    icon: LightBulbIcon,
  },
  {
    name: 'Trusted Sources',
    description: 'We curate PDFs, videos, and quotes from industry leaders and Wall Street analysts.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Weekly Guidance',
    description: 'One concise newsletter keeps you moving forward.',
    icon: ArrowPathIcon,
  },
];

export default function WhyCryptoDeven() {
  return (
    <section id="why" className="bg-white dark:bg-gray-900 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Why CryptoDeven?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Crypto adoption just crossed <span className="font-semibold text-indigo-600 dark:text-indigo-400">10% of the world</span> — 
            the same tipping-point where the internet exploded in the '90s. Early learners captured the upside then; 
            crypto offers a similar window now.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 md:p-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-indigo-800 dark:text-indigo-200">
                CryptoDeven fixes that with three promises:
              </h3>
              <div className="mt-4">
                <ul role="list" className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mt-0.5" aria-hidden="true" />
                      <span className="ml-2 text-gray-700 dark:text-gray-300">
                        <span className="font-medium">{feature.name}:</span> {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
