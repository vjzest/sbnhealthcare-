'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
    value: string;
    label: string;
    description?: string;
}

interface KPIMetricsProps {
    metrics: Metric[];
    title?: string;
    subtitle?: string;
}

const KPIMetrics: React.FC<KPIMetricsProps> = ({ metrics, title, subtitle }) => {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {subtitle && <span className="text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[4px] mb-4 block">{subtitle}</span>}
                        {title && <h2 className="text-4xl font-black text-[var(--secondary-color)] tracking-tight">{title}</h2>}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
                        >
                            <div className="text-5xl font-black text-[var(--primary-color)] mb-4 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                                {metric.value}
                            </div>
                            <div className="text-lg font-black text-[var(--secondary-color)] mb-2 uppercase tracking-wide">
                                {metric.label}
                            </div>
                            {metric.description && (
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {metric.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KPIMetrics;
