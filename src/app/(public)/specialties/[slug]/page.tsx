
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { specialtiesList } from '@/data/services';
import PageHeader from '@/components/layout/PageHeader';
import { getDynamicMetadata } from '@/utils/seo';
import KPIMetrics from '@/components/sections/KPIMetrics';
import WorkflowVisual from '@/components/sections/WorkflowVisual';
import ProblemSnapshot from '@/components/sections/ProblemSnapshot';
import AIIndicator from '@/components/sections/AIIndicator';
import ComplianceShield from '@/components/sections/ComplianceShield';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const dynamic = await getDynamicMetadata(`specialty-${slug}`);
    const specialty = specialtiesList.find((s) => s.slug === slug);
    if (!specialty) return { title: dynamic?.title || 'Specialty Not Found' };

    return {
        title: dynamic?.title || `${specialty.title} - SBN Healthcare Solution`,
        description: dynamic?.description || specialty.description,
    };
}

export async function generateStaticParams() {
    return specialtiesList.map((specialty) => ({
        slug: specialty.slug,
    }));
}

export default async function SpecialtyPage({ params }: Props) {
    const { slug } = await params;
    const specialty = specialtiesList.find((s) => s.slug === slug);

    if (!specialty) {
        notFound();
    }

    return (
        <main className="specialty-page">
            <PageHeader
                title={specialty.bannerTitle}
                subtitle="Industry Expertise"
                description={specialty.description}
            />

            {/* Dynamic Sections */}
            {specialty.sections.map((section, index) => {
                const isCta = section.type === 'cta';

                // Handle Specialized Section Types
                if (section.type === 'problem-snapshot') {
                    return <ProblemSnapshot key={index} title={section.title} points={section.data || []} />;
                }

                if (section.type === 'workflow') {
                    return <WorkflowVisual key={index} title={section.title} subtitle={section.subtitle} steps={section.data || []} />;
                }

                if (section.type === 'kpi') {
                    return <KPIMetrics key={index} title={section.title} subtitle={section.subtitle} metrics={section.data || []} />;
                }

                if (section.type === 'ai-indicator') {
                    return <AIIndicator key={index} stage={section.stage || ''} description={section.description || ''} impact={section.data || ''} />;
                }

                if (section.type === 'compliance-shield') {
                    return <ComplianceShield key={index} />;
                }

                // Standard Section Fallback
                return (
                    <section key={index} className={`py-24 ${index % 2 !== 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <div className="container mx-auto px-4">
                            {isCta ? (
                                <div className="bg-[var(--secondary-color)] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
                                            {section.title}
                                        </h2>
                                        {section.content && (
                                            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                                                {section.content}
                                            </p>
                                        )}
                                        <Link href="/contact-us" className="bg-[var(--primary-color)] text-white px-12 py-5 rounded-2xl font-black inline-flex items-center gap-4 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 no-underline uppercase tracking-widest text-sm">
                                            Get Specialized Audit <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col md:flex-row items-center gap-16">
                                    <div className={`flex-1 ${section.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                                        <h2 className="text-3xl font-black text-[var(--secondary-color)] mb-8 tracking-tight uppercase">
                                            {section.title}
                                        </h2>
                                        {section.content && (
                                            Array.isArray(section.content) ? (
                                                section.content.map((para, i) => <p key={i} className="text-slate-500 font-medium leading-relaxed text-lg mb-6">{para}</p>)
                                            ) : (
                                                <p className="text-slate-500 font-medium leading-relaxed text-lg mb-6">{section.content}</p>
                                            )
                                        )}
                                        {section.list && (
                                            <ul className="space-y-4">
                                                {section.list.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-slate-700 font-bold uppercase text-sm tracking-wide">
                                                        <span className="w-6 h-6 rounded-full bg-[var(--primary-color)]/10 text-[var(--primary-color)] flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    {section.image && (
                                        <div className={`flex-1 ${section.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                                            <img
                                                src={section.image}
                                                alt={section.title || specialty.title}
                                                className="w-full rounded-[2.5rem] shadow-2xl border-8 border-white"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
