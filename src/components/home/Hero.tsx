'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroData } from '@/data/home';

const Hero = () => {
    return (
        <section
            className="py-[140px] md:py-[200px] bg-no-repeat bg-center bg-cover min-h-[90vh] flex items-center overflow-hidden relative"
            style={{ backgroundImage: "linear-gradient(rgba(11, 31, 51, 0.7), rgba(11, 31, 51, 0.7)), url('/img/bg1.jpg')" }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-[850px] text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block bg-[var(--primary-color)] text-white font-bold uppercase text-[12px] tracking-[3px] mb-6 px-4 py-1.5 rounded-full shadow-lg">
                        {heroData.subheadline}
                    </span>
                    <h1 className="text-[3rem] md:text-[4.5rem] font-black text-white leading-[1.1] mb-8 tracking-[-1px]">
                        Peak Financial Performance <br className="hidden lg:block" /> for Healthcare Providers
                    </h1>
                    <p className="text-[1.2rem] md:text-[1.35rem] text-slate-200 mb-12 max-w-[700px] leading-relaxed font-medium">
                        Waystar-inspired end-to-end revenue cycle solutions designed to simplify payments and accelerate results for practices of all sizes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <Link href={heroData.ctaLink} className="bg-[var(--primary-color)] text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:bg-[#188c87] hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                            {heroData.ctaText}
                        </Link>
                        <Link href="/services/medical-coding" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:bg-white hover:text-[var(--secondary-color)] hover:-translate-y-1">
                            Explore Platform
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
