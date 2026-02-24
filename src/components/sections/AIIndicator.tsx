'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUserShield, FaBolt } from 'react-icons/fa';

interface AIIndicatorProps {
    stage: string;
    description: string;
    impact: string;
}

const AIIndicator: React.FC<AIIndicatorProps> = ({ stage, description, impact }) => {
    return (
        <div className="py-20 bg-[var(--secondary-color)] overflow-hidden relative">
            {/* Background Animation */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(31,165,159,0.3)]">
                            <FaRobot size={40} className="text-white" />
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-[var(--primary-color)] rounded-full opacity-20"
                            ></motion.div>
                        </div>
                    </div>

                    <div className="flex-grow text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-[var(--primary-color)]/20 text-[var(--primary-color)] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                            <FaBolt /> AI-Assisted Output
                        </div>
                        <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                            {stage}
                        </h3>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed mb-6">
                            {description}
                        </p>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Efficiency Gain</span>
                                <span className="text-xl font-black text-[var(--primary-color)]">{impact}</span>
                            </div>
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex items-center gap-4">
                                <FaUserShield className="text-[var(--primary-color)]" size={24} />
                                <div className="text-left">
                                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block">Quality Guard</span>
                                    <span className="text-xs font-bold text-white uppercase">Human Oversight Required</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIIndicator;
