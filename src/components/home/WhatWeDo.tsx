'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { featuresData } from '@/data/home';

const WhatWeDo = () => {
    // Benefit tags for cards
    const benefitTags = ["Automation First", "High Accuracy", "Fast Turnaround"];

    return (
        <section
            className="bg-white py-32 md:py-48 relative overflow-hidden"
        >
            {/* Background Architecture */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] opacity-60 -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--primary-color)]/5 rounded-full blur-[120px] opacity-40 -ml-64 -mb-64"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-block bg-[var(--primary-color)]/10 text-[var(--primary-color)] font-black text-[10px] tracking-[6px] uppercase px-6 py-2 rounded-full mb-6"
                    >
                        Capabilities
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl text-[var(--secondary-color)] mb-8 font-black leading-[1.1] tracking-tight">
                        One Enterprise Platform. <br className="hidden md:block" /> Proven Financial Outcomes.
                    </h2>
                    <p className="text-slate-500 text-[1.2rem] max-w-2xl mx-auto leading-relaxed font-medium tracking-tight">
                        SBN Healthcare Solution harnesses proprietary automation to drive surgical precision in RCM,
                        eliminating administrative leakage at every touchpoint.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {featuresData.map((feature, index) => {
                        const imgNum = index + 1;
                        const imgSrc = `/img/service${imgNum}.jpg`;

                        return (
                            <motion.div
                                key={index}
                                className="group bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-3 overflow-hidden border border-slate-100 flex flex-col h-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative overflow-hidden aspect-[16/11]">
                                    <img
                                        src={imgSrc}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-color)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/95 backdrop-blur-md text-[var(--secondary-color)] text-[9px] font-black uppercase tracking-[2px] px-4 py-2 rounded-xl shadow-xl">
                                            {benefitTags[index] || "Enterprise Ready"}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <h3 className="text-xl mb-4 font-black text-[var(--secondary-color)] group-hover:text-[var(--primary-color)] transition-colors duration-300 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[15px] text-slate-500 leading-relaxed font-medium mb-8 flex-grow">
                                        {feature.description}
                                    </p>
                                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                                        <Link href="/services" className="text-[var(--primary-color)] font-black text-[11px] uppercase tracking-[2px] flex items-center group/link">
                                            Analyze Solution
                                            <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
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
