'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroData } from '@/data/home';

const Hero = () => {
    return (
        <section
            className="relative py-[160px] md:py-[220px] bg-no-repeat bg-center bg-cover min-h-screen flex items-center overflow-hidden"
            style={{ backgroundImage: "linear-gradient(rgba(11, 31, 51, 0.80), rgba(11, 31, 51, 0.80)), url('/img/bg1.jpg')" }}
        >
            {/* Subtle teal highlight glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-color)]/10 rounded-full blur-[150px] -mr-64 -mt-64 animate-pulse pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-[1100px] mx-auto text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/20 text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[6px] mb-10 px-6 py-2.5 rounded-full backdrop-blur-md shadow-2xl"
                    >
                        <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse"></span>
                        {heroData.subheadline}
                    </motion.div>

                    <motion.h1
                        className="text-[3.5rem] md:text-[5.5rem] font-black text-white leading-[1] mb-10 tracking-[-0.04em] drop-shadow-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="block text-white/90">Peak Financial Performance</span>
                        <span className="text-[var(--primary-color)]">for Healthcare Providers</span>
                    </motion.h1>

                    <motion.p
                        className="text-[1.2rem] md:text-[1.5rem] text-slate-300 mb-14 max-w-[800px] mx-auto lg:mx-0 leading-relaxed font-medium tracking-tight opacity-90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        Next-generation RCM infrastructure designed to simplify medical payments,
                        eliminate administrative friction, and accelerate liquidity for elite medical practices.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Link href="/contact-us" className="btn-premium btn-premium-teal group">
                            <span className="btn-text-default">Accelerate Revenue</span>
                            <span className="btn-text-hover">Get Started Now</span>
                        </Link>

                        <Link href="/services" className="btn-premium btn-premium-dark group">
                            <span className="btn-text-default">Explore Platform</span>
                            <span className="btn-text-hover text-[var(--primary-color)]">View Solutions</span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Modern Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-[9px] font-black uppercase tracking-[4px] text-white">Analytics Below</span>
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
