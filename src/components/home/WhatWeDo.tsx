'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from '@/data/home';

const WhatWeDo = () => {
    // Benefit tags for cards
    const benefitTags = ["Automation First", "High Accuracy", "Fast Turnaround"];

    return (
        <section
            className="bg-white py-28 md:py-36 relative overflow-hidden"
        >
            {/* Background patterns simplified for cleaner look */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block bg-[#e8f4f3] text-[var(--primary-color)] font-bold text-xs tracking-[2px] uppercase px-4 py-1.5 rounded mb-4">
                        Capabilities
                    </span>
                    <h2 className="text-[2.5rem] md:text-[3.2rem] text-[var(--secondary-color)] mb-6 font-black leading-tight">
                        One Platform. Proven Results.
                    </h2>
                    <p className="text-slate-500 text-[1.15rem] max-w-3xl mx-auto leading-relaxed font-medium">
                        SBN Healthcare Solution harnesses advanced automation to drive meaningful outcomes,
                        ensuring providers reach peak financial performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuresData.map((feature, index) => {
                        const imgNum = index + 1;
                        const imgSrc = `/img/service${imgNum}.jpg`;

                        return (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-50 group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative overflow-hidden aspect-[16/10]">
                                    <img
                                        src={imgSrc}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-[var(--secondary-color)] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm">
                                            {benefitTags[index] || "Enterprise Ready"}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-[1.4rem] mb-4 font-bold text-[var(--secondary-color)] group-hover:text-[var(--primary-color)] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[1rem] text-slate-500 leading-relaxed font-medium">
                                        {feature.description}
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-[var(--primary-color)] font-bold text-sm">
                                        <span className="hover:underline cursor-pointer">Explore Solution</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
