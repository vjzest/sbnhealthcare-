'use client';

import React from 'react';

const softwareList = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    logo: `/img/software/software${i + 1}.jpg`
}));

// Duplicate to create seamless loop
const row1 = [...softwareList.slice(0, 8), ...softwareList.slice(0, 8)];
const row2 = [...softwareList.slice(8, 16), ...softwareList.slice(8, 16)];

const SoftwareExpertise = () => {
    return (
        <section className="py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-[var(--secondary-color)] inline-block relative pb-4">
                        Software we Expertise
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--primary-color)]"></div>
                    </h2>
                </div>
            </div>

            {/* Row 1 — scrolls left */}
            <div className="relative w-full mb-4 overflow-hidden">
                <div className="flex gap-4 animate-marquee-left">
                    {row1.map((sw, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[90px] h-[60px] bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center p-2 hover:shadow-md hover:border-slate-200 transition-all duration-300"
                        >
                            <img
                                src={sw.logo}
                                alt={`Software ${sw.id}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 — scrolls right */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-4 animate-marquee-right">
                    {row2.map((sw, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[90px] h-[60px] bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center p-2 hover:shadow-md hover:border-slate-200 transition-all duration-300"
                        >
                            <img
                                src={sw.logo}
                                alt={`Software ${sw.id}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-center text-slate-400 font-bold uppercase tracking-[2px] text-[10px] mt-10">
                Seamless integration with 50+ EMR/EHR platforms
            </p>
        </section>
    );
};

export default SoftwareExpertise;
