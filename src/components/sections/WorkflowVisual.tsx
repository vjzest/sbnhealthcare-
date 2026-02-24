'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface Step {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface WorkflowVisualProps {
    steps: Step[];
    title?: string;
    subtitle?: string;
}

const WorkflowVisual: React.FC<WorkflowVisualProps> = ({ steps, title, subtitle }) => {
    return (
        <div className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                {(title || subtitle) && (
                    <div className="text-center mb-20">
                        {subtitle && <span className="text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[4px] mb-4 block">{subtitle}</span>}
                        {title && <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary-color)] tracking-tight">{title}</h2>}
                    </div>
                )}

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-500 relative">
                                    <div className="text-3xl">
                                        {step.icon || <span className="font-black">{index + 1}</span>}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-300">
                                            <FaArrowRight className="rotate-90" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-xl font-black text-[var(--secondary-color)] mb-4 uppercase tracking-wide group-hover:text-[var(--primary-color)] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkflowVisual;
