'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice via cookie
        const hasConsent = document.cookie.split('; ').find(row => row.startsWith('sbn_cookie_consent='));

        if (!hasConsent) {
            // Delay appearance for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        // Set cookie for 365 days
        const expires = new Date();
        expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000));
        document.cookie = `sbn_cookie_consent=accepted;expires=${expires.toUTCString()};path=/`;
        setIsVisible(false);
    };

    const handlePreferences = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[340px] z-[9999]"
                >
                    <div className="bg-white rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.12)] border border-slate-200 p-5">
                        <div className="text-slate-600 text-[13px] leading-relaxed mb-5">
                            <p className="mb-3">
                                We use cookies to enhance your experience, analyze site traffic, and serve tailored advertisements.
                            </p>
                            <p>
                                By clicking "Accept," you agree to our use of cookies as detailed in our <a href="/privacy-policy" className="text-blue-600 hover:underline font-medium">Cookie Policy</a>.
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-[#0B1F33] text-white text-[13px] font-bold py-2.5 rounded transition-colors hover:bg-black"
                            >
                                Accept
                            </button>
                            <button
                                onClick={handlePreferences}
                                className="flex-1 bg-white text-slate-700 border border-slate-300 text-[13px] font-bold py-2.5 rounded transition-all hover:bg-slate-50"
                            >
                                Preferences
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
