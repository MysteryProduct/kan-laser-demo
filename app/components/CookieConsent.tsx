"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const storedConsent = localStorage.getItem("cookie-consent");
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
    } else {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (consent !== null) {
      // Send consent status to Google Analytics
      if (consent) {
        window.gtag?.("consent", "update", {
          analytics_storage: "granted",
        });
      } else {
        window.gtag?.("consent", "update", {
          analytics_storage: "denied",
        });
      }
    }
  }, [consent]);

  const handleAccept = () => {
    setConsent(true);
    localStorage.setItem("cookie-consent", JSON.stringify(true));
    setIsVisible(false);
  };

  const handleReject = () => {
    setConsent(false);
    localStorage.setItem("cookie-consent", JSON.stringify(false));
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Cookie & Privacy Notice
            </h3>
            <p className="text-sm text-gray-600">
              We use cookies and Google Analytics to understand how you use our website and improve your experience. 
              By clicking "Accept", you agree to our use of cookies and analytics tools. You can manage your preferences anytime.
            </p>
            {/* <a 
              href="#" 
              className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-2 inline-block"
            >
              Learn more about our privacy policy
            </a> */}
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 transition"
            aria-label="Close consent banner"
          >
            <X size={20} />
          </button>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition text-sm"
          >
            Accept All
          </button>
          <button
            onClick={handleReject}
            className="flex-1 sm:flex-none px-6 py-2 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition text-sm"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
