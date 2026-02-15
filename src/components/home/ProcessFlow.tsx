'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/home';

const ProcessFlow = () => {
    return (
        <section className="bg-white p-0">
            <div className="w-full p-0">
                <div className="flex flex-col lg:flex-row">
                    {processSteps.map((step, index) => {
                        // 1-based index for image matching (feature1, feature2, feature3)
                        const imgIndex = index + 1;

                        // Determine overlay color based on index (simulating nth-child logic)
                        // 2nd item (index 1) gets darker overlay
                        const overlayColor = index === 1
                            ? 'rgba(6, 18, 30, 0.95)' // Darker Navy
                            : 'rgba(11, 31, 51, 0.9)'; // Deep Enterprise Navy

                        return (
                            <motion.div
                                key={index}
                                className="flex-1 bg-cover bg-center relative text-center py-28 px-10 text-white min-h-[450px] flex flex-col justify-center group overflow-hidden"
                                style={{ backgroundImage: `url('/img/feature${imgIndex}.jpg')` }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className="absolute inset-0 z-10 bg-[#0B1F33]/90 group-hover:bg-[#0B1F33]/80 transition-all duration-500"
                                ></div>
                                <div className="relative z-20 transition-transform duration-500 group-hover:scale-105">
                                    <span className="text-[var(--primary-color)] text-[11px] font-bold tracking-[3px] uppercase mb-4 block opacity-80 group-hover:opacity-100">
                                        Phase 0{imgIndex}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl text-white mb-6 font-black uppercase tracking-tight leading-tight">{step.title}</h3>
                                    <p className="text-slate-200 text-base md:text-[1.05rem] leading-relaxed max-w-[320px] mx-auto font-medium opacity-90">{step.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
