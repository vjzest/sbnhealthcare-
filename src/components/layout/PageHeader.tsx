'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    bgImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    description,
    bgImage = '/img/bg1.jpg'
}) => {
    return (
        <div
            className="relative py-[140px] md:py-[220px] text-center text-white overflow-hidden bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `linear-gradient(rgba(11, 31, 51, 0.80), rgba(11, 31, 51, 0.80)), url('${bgImage}')` }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-[1000px] mx-auto"
                >
                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 bg-[var(--primary-color)]/10 border border-[var(--primary-color)]/30 text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[5px] mb-8 px-6 py-2 rounded-full backdrop-blur-md shadow-2xl"
                        >
                            <span className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse"></span>
                            {subtitle}
                        </motion.div>
                    )}
                    <h1 className="text-[3.5rem] md:text-[5.5rem] font-black text-white leading-[1.05] mb-8 tracking-[-0.03em] drop-shadow-2xl">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-[0.2em] last:mr-0">{word}</span>
                        ))}
                    </h1>
                    {description && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[1.1rem] md:text-[1.4rem] text-slate-300 max-w-[800px] mx-auto leading-relaxed font-medium tracking-tight"
                        >
                            {description}
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default PageHeader;
