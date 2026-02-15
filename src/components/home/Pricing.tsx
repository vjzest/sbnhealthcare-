'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { pricingModels } from '@/data/pricing';

const Pricing = () => {
    return (
        <section className="bg-slate-50 py-28 md:py-36 border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20 max-w-[800px] mx-auto">
                    <span className="inline-block bg-[#0B1F33]/5 text-[var(--secondary-color)] font-bold text-xs tracking-[2px] uppercase px-4 py-1.5 rounded mb-4">
                        Investment Models
                    </span>
                    <h2 className="text-[2.5rem] md:text-[3.2rem] font-black text-[var(--secondary-color)] mb-6 tracking-tight">Smart Pricing. Fast ROI.</h2>
                    <p className="text-slate-500 text-[1.1rem] leading-relaxed font-medium">
                        We help you save more, reduce costs, and minimize risk with transparent,
                        performance-based pricing models designed for healthcare enterprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
                    {pricingModels.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-2xl overflow-hidden relative text-white transition-all duration-500 ease-out shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-white/10 ${item.theme === 'red'
                                ? 'bg-gradient-to-br from-[#0B1F33] to-[#06121e] border-t-4 border-[var(--accent-color)]'
                                : 'bg-gradient-to-br from-[#102a43] to-[#011E39] border-t-4 border-[var(--primary-color)]'
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-10 flex-1 flex flex-col">
                                <h3 className="text-[1.4rem] font-black mb-6 pb-6 border-b border-white/10 min-h-[90px] flex items-center text-white leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[1.05rem] leading-relaxed text-white/80 mb-8 flex-grow font-medium">
                                    {item.description}
                                </p>
                                <div className="mt-4">
                                    <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3 rounded-lg border border-white/20 transition-all">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
