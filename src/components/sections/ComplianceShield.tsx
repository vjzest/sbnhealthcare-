
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserSecret, FaRegFileAlt } from 'react-icons/fa';

const ComplianceShield = () => {
    const protocols = [
        { icon: FaLock, title: 'HIPAA Compliant', desc: 'Full adherence to healthcare security standards.' },
        { icon: FaShieldAlt, title: 'SOC 2 Ready', desc: 'Enterprise-grade data protection protocols.' },
        { icon: FaUserSecret, title: 'Data Encryption', desc: 'Secure AES-256 encryption for all patient data.' },
        { icon: FaRegFileAlt, title: 'Annual Audits', desc: 'Strict governance and regular security reviews.' }
    ];

    return (
        <section className="py-24 bg-[var(--secondary-color)] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-color)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="w-20 h-20 bg-[var(--primary-color)]/20 text-[var(--primary-color)] rounded-3xl flex items-center justify-center mx-auto mb-6 border border-[var(--primary-color)]/30"
                        >
                            <FaShieldAlt size={40} />
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            Enterprise-Grade <span className="text-[var(--primary-color)]">Compliance</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed">
                            Security isn't just a requirement; it's our foundation. We maintain the highest standards of data governance to protect your practice and your patients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {protocols.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group lg:flex items-center gap-6"
                            >
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 lg:mb-0 group-hover:bg-[var(--primary-color)] group-hover:scale-110 transition-all">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceShield;
