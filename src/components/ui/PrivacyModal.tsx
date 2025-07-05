'use client';

import { useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
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
            <span className="text-2xl mr-3">🔒</span>
            <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Close privacy policy"
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
              CryptoDeven.com ("we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy describes how we collect, use, and safeguard your information when you visit our website.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Information We Collect</h3>
            <p className="mb-4">
              <strong>Personal Information:</strong> We may collect personal information such as your name and email address when you subscribe or contact us.
            </p>
            <p className="mb-6">
              <strong>Non-Personal Information:</strong> Includes browser type, device, pages visited, and other usage data collected via cookies and analytics tools.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>To provide educational content, updates, and site improvements</li>
              <li>To respond to user inquiries or technical support requests</li>
              <li>To understand website usage and optimize user experience</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Sharing of Information</h3>
            <p className="mb-6">
              We do not sell or rent your personal information. We may share information with third-party service providers only as necessary to operate the website (e.g., email marketing tools or analytics platforms).
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Cookies & Tracking</h3>
            <p className="mb-6">
              We use cookies and similar technologies to enhance user experience and track website analytics. You may disable cookies in your browser settings.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Data Security</h3>
            <p className="mb-6">
              We implement industry-standard safeguards to protect your information. However, no method of internet transmission is 100% secure.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Your Rights</h3>
            <p className="mb-6">
              You may request access to, update, or delete your personal information by contacting us at hello@cryptodeven.com.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Third-Party Links</h3>
            <p className="mb-6">
              CryptoDeven.com may include links to external sites not governed by this policy. We are not responsible for the content or privacy practices of those sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 