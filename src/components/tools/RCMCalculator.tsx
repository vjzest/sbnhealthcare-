'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RCMCalculator = () => {
    // Inputs
    const [monthlyClaims, setMonthlyClaims] = useState(500);
    const [avgBilledAmount, setAvgBilledAmount] = useState(150);
    const [denialRate, setDenialRate] = useState(15);
    const [recoveryPotential, setRecoveryPotential] = useState(50); // SBN potential recovery %

    // Outputs
    const [monthlyRevenue, setMonthlyRevenue] = useState(0);
    const [annualLeakage, setAnnualLeakage] = useState(0);
    const [projectedAnnualRecovery, setProjectedAnnualRecovery] = useState(0);

    useEffect(() => {
        const rev = monthlyClaims * avgBilledAmount;
        const leakage = rev * (denialRate / 100) * 12;
        const recovery = leakage * (recoveryPotential / 100);

        setMonthlyRevenue(rev);
        setAnnualLeakage(leakage);
        setProjectedAnnualRecovery(recovery);
    }, [monthlyClaims, avgBilledAmount, denialRate, recoveryPotential]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left: Inputs */}
                <div className="p-8 md:p-12 lg:p-16 bg-slate-50">
                    <div className="mb-10">
                        <span className="text-[var(--primary-color)] font-bold uppercase text-[10px] tracking-[4px] mb-4 block">Input Metrics</span>
                        <h3 className="text-3xl font-black text-slate-800 tracking-tight">Configure Your Practice</h3>
                    </div>

                    <div className="space-y-12">
                        {/* Monthly Claims */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-slate-700 font-bold text-sm uppercase tracking-wide">Monthly Claims Submitted</label>
                                <span className="text-[var(--primary-color)] font-black text-2xl">{monthlyClaims.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="10000"
                                step="100"
                                value={monthlyClaims}
                                onChange={(e) => setMonthlyClaims(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary-color)]"
                            />
                            <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold">
                                <span>100</span>
                                <span>10,000+</span>
                            </div>
                        </div>

                        {/* Avg Billed Amount */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-slate-700 font-bold text-sm uppercase tracking-wide">Avg. Billed Amount per Claim</label>
                                <span className="text-[var(--primary-color)] font-black text-2xl">{formatCurrency(avgBilledAmount)}</span>
                            </div>
                            <input
                                type="range"
                                min="50"
                                max="1000"
                                step="10"
                                value={avgBilledAmount}
                                onChange={(e) => setAvgBilledAmount(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary-color)]"
                            />
                            <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold">
                                <span>$50</span>
                                <span>$1,000</span>
                            </div>
                        </div>

                        {/* Denial Rate */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="text-slate-700 font-bold text-sm uppercase tracking-wide">Current Denial Rate</label>
                                <span className="text-red-500 font-black text-2xl">{denialRate}%</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                step="1"
                                value={denialRate}
                                onChange={(e) => setDenialRate(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                            />
                            <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold">
                                <span>1%</span>
                                <span>40% (High Risk)</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Est. Monthly Revenue</p>
                            <p className="text-xl font-black text-slate-800">{formatCurrency(monthlyRevenue)}</p>
                        </div>
                    </div>
                </div>

                {/* Right: Outputs */}
                <div className="p-8 md:p-12 lg:p-16 bg-[var(--secondary-color)] text-white relative overflow-hidden">
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-12">
                            <span className="text-[var(--primary-color)] font-bold uppercase text-[10px] tracking-[4px] mb-4 block">Financial Impact</span>
                            <h3 className="text-3xl font-black text-white tracking-tight">Revenue Opportunity</h3>
                        </div>

                        <div className="space-y-10 flex-grow">
                            {/* Leakage Card */}
                            <motion.div
                                layout
                                className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10"
                            >
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2">Annual Revenue Leakage</p>
                                <p className="text-4xl md:text-5xl font-black text-red-400 tracking-tighter mb-4">
                                    {formatCurrency(annualLeakage)}
                                </p>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(denialRate / 40) * 100}%` }}
                                        className="h-full bg-red-500"
                                    />
                                </div>
                                <p className="mt-4 text-xs text-slate-400 leading-relaxed font-medium">
                                    This is the estimated amount of revenue currently lost due to claim denials and processing inefficiencies.
                                </p>
                            </motion.div>

                            {/* Recovery Card */}
                            <motion.div
                                layout
                                className="p-8 bg-[var(--primary-color)] rounded-3xl shadow-xl shadow-[var(--primary-color)]/20"
                            >
                                <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest mb-2">SBN Projected Annual Recovery</p>
                                <p className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                                    {formatCurrency(projectedAnnualRecovery)}
                                </p>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-[10px] font-black bg-white/20 px-2 py-0.5 rounded-full uppercase">50% Recovery Lift</span>
                                    <div className="flex-grow h-px bg-white/20"></div>
                                </div>
                                <p className="text-xs text-white/80 leading-relaxed font-medium">
                                    With SBN's automated scrubbing and proactive denial management, we aim to recover at least 50% of your current leakage.
                                </p>
                            </motion.div>
                        </div>

                        <div className="mt-12">
                            <button className="w-full bg-white text-[var(--secondary-color)] font-black py-5 rounded-2xl uppercase tracking-[2px] text-sm shadow-xl transition-all hover:scale-[1.02] hover:bg-[var(--accent-color)] hover:text-white active:scale-[0.98]">
                                Claim Your Recovery Report
                            </button>
                            <p className="text-center mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                Free Consultation included with every report
                            </p>
                        </div>
                    </div>

                    {/* Background Deco */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-color)]/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
                </div>

            </div>
        </div>
    );
};

export default RCMCalculator;
