'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../../context/ThemeContext';
import { ThemeToggle } from '../ThemeToggle';

const navigation = [
  { name: 'Why CryptoDeven', href: '#why' },
  { name: 'Get Started', href: '#get-started' },
  { name: 'Resources', href: '#resources' },
  { name: 'Thought Leaders', href: '#thought-leaders' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-padding ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center touch-friendly">
              <Image
                src="/cryptodeven_icon.png"
                alt="CryptoDeven"
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10"
                priority
                quality={90}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="#why"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors touch-friendly"
              >
                Why Crypto
              </Link>
              <Link
                href="#get-started"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors touch-friendly"
              >
                Get Started
              </Link>
              <Link
                href="#resources"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors touch-friendly"
              >
                Resources
              </Link>
              <Link
                href="#thought-leaders"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors touch-friendly"
              >
                Experts
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors touch-friendly"
              >
                About
              </Link>
              <Link
                href="#get-started"
                className="ml-4 rounded-lg btn-gradient px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all duration-200 touch-friendly"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
                          <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 touch-friendly"
                aria-label="Toggle mobile menu"
              >
              <span className="sr-only">
                {isMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-medium border border-gray-100">
              <Link
                href="#why"
                className="text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium transition-colors touch-friendly"
                onClick={closeMenu}
              >
                Why Crypto
              </Link>
              <Link
                href="#get-started"
                className="text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium transition-colors touch-friendly"
                onClick={closeMenu}
              >
                Get Started
              </Link>
              <Link
                href="#resources"
                className="text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium transition-colors touch-friendly"
                onClick={closeMenu}
              >
                Resources
              </Link>
              <Link
                href="#thought-leaders"
                className="text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium transition-colors touch-friendly"
                onClick={closeMenu}
              >
                Experts
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900 block px-3 py-3 text-base font-medium transition-colors touch-friendly"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="#get-started"
                className="block mt-4 mx-3 rounded-lg btn-gradient px-4 py-3 text-base font-semibold text-white shadow-soft transition-all duration-200 text-center touch-friendly"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
