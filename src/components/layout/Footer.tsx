'use client';

import Link from 'next/link';
import { useState } from 'react';
import PrivacyModal from '../ui/PrivacyModal';
import TermsModal from '../ui/TermsModal';

const navigation = {
  main: [
    { name: 'Why Crypto', href: '#why' },
    { name: 'Get Started', href: '#get-started' },
    { name: 'Resources', href: '#resources' },
    { name: 'Experts', href: '#thought-leaders' },
    { name: 'About', href: '#contact' },
  ],
};

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link
                  href={item.href}
                  className="text-base text-gray-500 hover:text-bitcoin-600 dark:text-gray-400 dark:hover:text-bitcoin-400 transition-colors"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} CryptoDeven · Built for learners, not traders
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-bitcoin-600 dark:hover:text-bitcoin-400 transition-colors"
            >
              Privacy
            </button>
            <span>•</span>
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-bitcoin-600 dark:hover:text-bitcoin-400 transition-colors"
            >
              Terms
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
      <TermsModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      />
    </>
  );
}
