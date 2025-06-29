import { motion } from 'framer-motion';
import { Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

const thoughtLeaders = [
  {
    name: 'Michael Saylor',
    role: 'Bitcoin Advocate',
    xHandle: '@saylor',
    xUrl: 'https://twitter.com/saylor',
    linkedinUrl: 'https://www.linkedin.com/in/michael-saylor-b7b3b5',
    website: 'https://www.michaelsaylor.com/',
    quote: 'Bitcoin is the apex property of the human race.',
  },
  {
    name: 'Jack Mallers',
    role: 'Founder & CEO, Strike',
    xHandle: '@jackmallers',
    xUrl: 'https://twitter.com/jackmallers',
    linkedinUrl: 'https://www.linkedin.com/in/jackmallers',
    website: 'https://strike.me/',
    quote: 'Gold needed trust — Bitcoin doesn\'t.',
  },
  {
    name: 'Cathie Wood',
    role: 'CEO & CIO, ARK Invest',
    xHandle: '@CathieDWood',
    xUrl: 'https://twitter.com/CathieDWood',
    linkedinUrl: 'https://www.linkedin.com/in/cathiewood',
    website: 'https://ark-invest.com/',
    quote: 'Bitcoin is the first global digital monetary system.',
  },
  {
    name: 'Robert Breedlove',
    role: 'Bitcoin Philosopher',
    xHandle: '@Breedlove22',
    xUrl: 'https://twitter.com/Breedlove22',
    linkedinUrl: 'https://www.linkedin.com/in/breedlove22',
    website: 'https://breedlove22.com/',
    quote: 'Bitcoin is the most important invention in the history of the world since the Internet.',
  },
  {
    name: 'Natalie Brunell',
    role: 'Bitcoin Journalist',
    xHandle: '@natbrunell',
    xUrl: 'https://twitter.com/natbrunell',
    linkedinUrl: 'https://www.linkedin.com/in/nataliebrunell',
    website: 'https://www.nataliebrunell.com/',
    quote: 'Bitcoin is the most important tool we have to separate money from the state.',
  },
  {
    name: 'Raoul Pal',
    role: 'CEO, Real Vision',
    xHandle: '@RaoulGMI',
    xUrl: 'https://twitter.com/RaoulGMI',
    linkedinUrl: 'https://www.linkedin.com/in/raoul-pal-0b0a3b6',
    website: 'https://www.realvision.com/',
    quote: 'Bitcoin is the most asymmetric trade of our lifetime.',
  },
  {
    name: 'Balaji Srinivasan',
    role: 'Investor & Technologist',
    xHandle: '@balajis',
    xUrl: 'https://twitter.com/balajis',
    linkedinUrl: 'https://www.linkedin.com/in/balajis',
    website: 'https://balajis.com/',
    quote: 'Bitcoin is the first digital currency that can\'t be shut down.',
  },
];

export default function ThoughtLeaders() {
  return (
    <section id="thought-leaders" className="bg-white dark:bg-gray-900 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Voices in the space
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Learn from the most influential thinkers in cryptocurrency
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {thoughtLeaders.map((leader, index) => (
            <motion.div
              key={leader.xHandle}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <span className="text-xl font-medium text-indigo-600 dark:text-indigo-400">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{leader.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{leader.role}</p>
                  </div>
                </div>
                <blockquote className="mt-4">
                  <p className="text-base text-gray-700 dark:text-gray-300 italic">"{leader.quote}"</p>
                </blockquote>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={leader.xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                    aria-label={`${leader.name} on X`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={leader.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                    aria-label={`${leader.name} on LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={leader.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                    aria-label={`${leader.name}'s website`}
                  >
                    <LinkIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 md:p-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-medium text-indigo-900 dark:text-indigo-100">Want to dive deeper?</h3>
              <p className="mt-2 text-sm text-indigo-800 dark:text-indigo-200">
                Follow these thought leaders for daily insights and analysis on cryptocurrency.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="https://twitter.com/CryptoDeven"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-300 dark:hover:bg-gray-700 transition-colors"
              >
                Follow us on X
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
