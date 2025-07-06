import { motion } from 'framer-motion';
import { ChartBarIcon, ArrowTrendingUpIcon, BoltIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: 'Crypto User Growth', value: '2x', description: 'Faster than early internet adoption' },
  { name: 'Institutional Investment', value: '$100B+', description: 'In crypto assets under management' },
  { name: 'Global Adoption', value: '10%', description: 'Of world population using crypto' },
];

export default function FastLane() {
  return (
    <section id="fast-lane" className="bg-white dark:bg-gray-900 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            The adoption curve is bending upward
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Crypto&apos;s user base is growing <span className="font-semibold text-indigo-600 dark:text-indigo-400">2× faster</span> than the early internet. 
            Wall Street has flipped bullish (BlackRock calls Bitcoin &ldquo;digital gold&rdquo;); governments are drafting pro-crypto rules. 
            Waiting gets riskier each year—learning now is the edge.
          </p>
        </div>

        <div className="mt-16">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-md">
                    {index === 0 && <ChartBarIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />}
                    {index === 1 && <ArrowTrendingUpIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />}
                    {index === 2 && <BoltIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />}
                  </div>
                  <div className="ml-5">
                    <dt className="text-lg font-medium text-gray-900 dark:text-white truncate">{stat.name}</dt>
                    <dd className="mt-1 flex items-baseline">
                      <div className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400">
                        {stat.value}
                      </div>
                    </dd>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block">Start your crypto journey today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-100">
                Join thousands of beginners who are taking control of their financial future with our simple, no-nonsense approach to crypto education.
              </p>
              <a
                href="#get-started"
                className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <div className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 h-full w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
