
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { servicesList } from '@/data/services';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import PageHeader from '@/components/layout/PageHeader';

export const metadata: Metadata = {
    title: 'Solutions & Specialties - SBN Healthcare Solution',
    description: 'Explore our enterprise-grade RCM solutions and specialized healthcare billing services.',
};

export default function ServicesListing() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Service Portfolio"
                subtitle="High-Octane RCM"
                description="We don't just process claims; we optimize your entire financial lifecycle. Explore our specialized solutions designed for enterprise healthcare growth."
            />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-px bg-slate-200 flex-grow"></div>
                        <h2 className="text-sm font-black text-slate-400 uppercase tracking-[5px]">Core RCM Solutions</h2>
                        <div className="h-px bg-slate-200 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service) => (
                            <Link
                                href={`/services/${service.slug}`}
                                key={service.slug}
                                className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-[var(--primary-color)]/5 hover:-translate-y-2 transition-all duration-500 flex flex-col no-underline text-inherit"
                            >
                                <div className="mb-8">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-500 mb-6">
                                        <FaCheckCircle size={28} />
                                    </div>
                                    <h3 className="text-2xl font-black text-[var(--secondary-color)] mb-4 tracking-tight group-hover:text-[var(--primary-color)] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 font-medium leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between text-[var(--primary-color)] font-bold text-sm uppercase tracking-widest">
                                    View Solution <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialties Section Placeholder */}
            <section className="py-24 bg-[var(--secondary-color)]">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[5px] mb-4 block">Tailored Expertise</span>
                    <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Industry-Specific Specialties</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['Behavioral Health', 'DME / Orthopedics', 'Urgent Care & Telehealth', 'Small–Mid Practices'].map((spec) => (
                            <div key={spec} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors">
                                {spec}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
