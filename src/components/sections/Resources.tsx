import { motion } from 'framer-motion';
import { DocumentTextIcon, PlayCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const resources = {
  pdfs: [
    {
      name: 'Bitcoin Whitepaper',
      description: 'The original paper by Satoshi Nakamoto that started it all (9 pages)',
      href: 'https://bitcoin.org/bitcoin.pdf',
      icon: DocumentTextIcon,
    },
    {
      name: 'Crypto Myth Buster',
      description: 'Debunking common misconceptions about cryptocurrency',
      href: '#',
      icon: DocumentTextIcon,
    },
    {
      name: '2025 Adoption Report',
      description: 'Key insights into crypto adoption trends and predictions',
      href: '#',
      icon: DocumentTextIcon,
    },
  ],
  videos: [
    {
      name: 'Bitcoin in 5 Minutes',
      description: 'Quick animation explaining the basics of Bitcoin',
      href: 'https://www.youtube.com/watch?v=Gc2en3nHxA4',
      icon: PlayCircleIcon,
    },
    {
      name: 'Jack Mallers Keynote',
      description: 'Prague 2025 keynote on the future of Bitcoin payments',
      href: 'https://www.youtube.com/watch?v=example',
      icon: PlayCircleIcon,
    },
    {
      name: 'Michael Saylor on Digital Gold',
      description: 'Why Bitcoin is the new gold standard',
      href: 'https://www.youtube.com/watch?v=example2',
      icon: PlayCircleIcon,
    },
  ],
};

export default function Resources() {
  return (
    <section id="resources" className="bg-gray-50 dark:bg-gray-900 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Hand-picked resources
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Curated materials for every learning style
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-md">
                  <BookOpenIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">PDFs & Articles</h3>
              </div>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                  {resources.pdfs.map((resource, resourceIdx) => (
                    <li key={resourceIdx} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <resource.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {resource.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {resource.description}
                          </p>
                        </div>
                        <div>
                          <a
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-md">
                  <PlayCircleIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">Videos</h3>
              </div>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                  {resources.videos.map((resource, resourceIdx) => (
                    <li key={resourceIdx} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <resource.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {resource.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {resource.description}
                          </p>
                        </div>
                        <div>
                          <a
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-gray-600 text-sm leading-5 font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                          >
                            Watch
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600 dark:text-gray-300">
            Want more resources?{' '}
            <a href="#contact" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
              Get in touch
            </a>{' '}
            with your specific interests.
          </p>
        </div>
      </div>
    </section>
  );
}
