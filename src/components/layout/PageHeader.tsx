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
            className="relative bg-cover bg-center py-[120px] md:py-[180px] text-center text-white overflow-hidden"
            style={{ backgroundImage: `linear-gradient(rgba(11, 31, 51, 0.85), rgba(11, 31, 51, 0.95)), url('${bgImage}')` }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[900px] mx-auto"
                >
                    {subtitle && (
                        <span className="inline-block bg-[var(--primary-color)] text-white font-bold uppercase text-[12px] tracking-[3px] mb-6 px-4 py-1.5 rounded-full shadow-lg">
                            {subtitle}
                        </span>
                    )}
                    <h1 className="text-[3rem] md:text-[4.5rem] font-black text-white leading-tight mb-6 tracking-tight">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-[1.1rem] md:text-[1.35rem] text-slate-200 max-w-[750px] mx-auto leading-relaxed opacity-90 font-medium">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary-color)]/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
    );
};

export default PageHeader;
