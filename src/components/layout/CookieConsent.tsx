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
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-6 right-6 z-[9999] max-w-[320px] w-full"
                >
                    <div className="bg-[#0B1F2A]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 p-4">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--primary-color)]/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-[var(--primary-color)] text-lg">🍪</span>
                            </div>
                            <div className="text-white/80 text-[12px] leading-relaxed">
                                <p>
                                    We use cookies to enhance your experience and analyze traffic.
                                    <a href="/privacy-policy" className="text-[var(--primary-color)] ml-1 hover:underline font-bold">Policy</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-[var(--primary-color)] text-white text-[11px] font-black py-2 rounded-xl transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-wider"
                            >
                                Accept
                            </button>
                            <button
                                onClick={handlePreferences}
                                className="px-4 bg-white/5 text-white/60 border border-white/10 text-[11px] font-bold py-2 rounded-xl transition-all hover:bg-white/10"
                            >
                                Settings
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
