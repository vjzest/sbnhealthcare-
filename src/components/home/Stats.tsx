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
    // Adding context mapping for stats
    const statContext: Record<string, string> = {
        "Revenue Improved": "Average lift for our client network",
        "Costs Reduced": "Operational savings via automation",
        "Patient Experience Transformed": "Patient satisfaction score increase",
        "Years of Experience": "Dedicated healthcare expertise"
    };

    return (
        <section className="bg-slate-50 py-24 md:py-32 border-y border-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[var(--primary-color)] font-bold uppercase text-xs tracking-widest mb-3 inline-block">Our Impact</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary-color)]">Proven results. Meaningful outcomes.</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4">
                                <Counter value={stat.value} />
                            </div>
                            <h3 className="text-lg font-bold text-[var(--secondary-color)] mb-2 uppercase tracking-wide">
                                {stat.label}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[200px]">
                                {statContext[stat.label] || "Accelerated financial results"}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
