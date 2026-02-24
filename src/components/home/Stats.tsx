'use client';

import React from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { statsData } from '@/data/home';

const Counter = ({ value }: { value: string }) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    // Parse number and suffix (matched against starting digits)
    const numericValue = parseInt(value, 10);
    const suffix = value.replace(numericValue.toString(), '');

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 60, damping: 15 });

    React.useEffect(() => {
        if (inView) {
            motionValue.set(numericValue);
        }
    }, [inView, motionValue, numericValue]);

    React.useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // Formatting: avoid decimals during counting
                ref.current.textContent = `${Math.floor(latest)}${suffix}`;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className="text-[3rem] font-extrabold mb-2 text-[var(--secondary-color)]">{0}{suffix}</span>;
};

const Stats = () => {
    const statContext: Record<string, string> = {
        "Revenue Improved": "Average lift for our client network",
        "Costs Reduced": "Operational savings via automation",
        "Patient Experience Transformed": "Patient satisfaction score increase",
        "Years of Experience": "Dedicated healthcare expertise"
    };

    return (
        <section className="relative py-24 md:py-40 bg-white overflow-hidden">
            {/* Subtle Tech Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[6px] mb-4 inline-block"
                    >
                        Network Performance
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary-color)] tracking-tight leading-tight">
                        Proven results that justify <br className="hidden md:block" /> your transition to SBN.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary-color)]/5 rounded-bl-full translate-x-12 -translate-y-12 transition-transform group-hover:scale-150 duration-700"></div>

                            <div className="relative z-10">
                                <div className="mb-6 flex items-baseline gap-1 focus:outline-none">
                                    <Counter value={stat.value} />
                                </div>
                                <h3 className="text-sm font-black text-[var(--secondary-color)] mb-3 uppercase tracking-widest">
                                    {stat.label}
                                </h3>
                                <div className="w-10 h-1 bg-[var(--primary-color)] mb-4 rounded-full transition-all group-hover:w-20 duration-500"></div>
                                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                    {statContext[stat.label] || "Accelerated financial results"}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
