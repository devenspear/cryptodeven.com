'use client';

import { useEffect } from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-4xl max-h-[90vh] overflow-hidden mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <span className="text-2xl mr-3">📜</span>
            <h2 className="text-2xl font-bold text-gray-900">Terms of Use</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Close terms of use"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <p className="text-sm text-gray-600 mb-6">
            <strong>Effective Date:</strong> July 4, 2025
          </p>

          <div className="prose prose-gray max-w-none">
            <p className="mb-6">
              By accessing or using CryptoDeven.com, you agree to the following terms and conditions. Please read them carefully.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Informational Purposes Only</h3>
            <p className="mb-4">
              All content provided on CryptoDeven.com is for educational and informational purposes only. The content is not intended to be financial, investment, legal, or professional advice of any kind. Always consult a qualified financial advisor before making financial decisions.
            </p>
            <p className="mb-6 font-semibold text-red-600">
              Nothing on this website constitutes financial advice. Use at your own discretion.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. No Warranties</h3>
            <p className="mb-6">
              We make no guarantees about the accuracy, completeness, or reliability of any information on the site. All content is provided &ldquo;as is&rdquo; without warranties of any kind.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. User Responsibility</h3>
            <p className="mb-6">
              By using this site, you agree that you are solely responsible for your actions and any consequences resulting from your use of the information. CryptoDeven.com is not liable for any losses or damages resulting from the use or misuse of content.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Intellectual Property</h3>
            <p className="mb-6">
              All logos, text, and design elements on CryptoDeven.com are the intellectual property of CryptoDeven.com unless otherwise noted. Reproduction without permission is prohibited.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Changes to Terms</h3>
            <p className="mb-6">
              We reserve the right to modify or update these Terms at any time. Continued use of the website after changes constitutes your acceptance of the new Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 