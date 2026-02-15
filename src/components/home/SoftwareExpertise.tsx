'use client';

import React from 'react';
import { motion } from 'framer-motion';

const softwareList = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    logo: `/img/software/software${i + 1}.jpg`
}));

const SoftwareExpertise = () => {
    return (
        <section className="py-5 md:py-5 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-black text-[var(--secondary-color)] inline-block relative pb-4">
                        Software we Expertise
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--primary-color)]"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 max-w-[1000px] mx-auto border-t border-l border-slate-100">
                    {softwareList.map((sw) => (
                        <motion.div
                            key={sw.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 aspect-[4/3] flex items-center justify-center border-r border-b border-slate-100 hover:shadow-2xl hover:z-10 transition-all duration-300 group"
                        >
                            <img
                                src={sw.logo}
                                alt={`Software Expertise ${sw.id}`}
                                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-400 font-bold uppercase tracking-[2px] text-[10px]">
                        Seamless integration with 50+ EMR/EHR platforms
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SoftwareExpertise;
