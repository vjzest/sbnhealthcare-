
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesList } from '@/data/services';
import PageHeader from '@/components/layout/PageHeader';
import { getDynamicMetadata } from '@/utils/seo';
import KPIMetrics from '@/components/sections/KPIMetrics';
import WorkflowVisual from '@/components/sections/WorkflowVisual';
import ProblemSnapshot from '@/components/sections/ProblemSnapshot';
import AIIndicator from '@/components/sections/AIIndicator';
import ComplianceShield from '@/components/sections/ComplianceShield';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const dynamic = await getDynamicMetadata(slug);
    const service = servicesList.find((s) => s.slug === slug);
    if (!service) return { title: dynamic?.title || 'Service Not Found' };

    return {
        title: dynamic?.title || `${service.title} - SBN Healthcare Solution`,
        description: dynamic?.description || service.description,
    };
}

export async function generateStaticParams() {
    return servicesList.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesList.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="service-page">
            <PageHeader
                title={service.bannerTitle}
                subtitle="Enterprise Solutions"
                description={service.description}
            />

            {/* Dynamic Sections */}
            {service.sections.map((section, index) => {
                const isBgGray = index % 2 !== 0 && section.type !== 'cta';
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

                // Base classes for standard sections
                let sectionClasses = "py-[100px] relative";
                if (isBgGray) sectionClasses += " bg-[#f8faff]";
                if (isCta) sectionClasses = "bg-[var(--secondary-color)] text-white relative py-[80px] overflow-hidden";

                return (
                    <section key={index} className={sectionClasses}>
                        <div className="container mx-auto px-4">
                            {isCta ? (
                                <div className="flex flex-col md:flex-row items-center justify-between gap-[40px]">
                                    <div className="flex-1">
                                        <h2 className="text-[32px] font-bold mb-[15px] text-white">
                                            {section.title}
                                        </h2>
                                        {section.content && (
                                            <p className="text-[18px] text-slate-300 max-w-[600px] leading-[1.6]">
                                                {section.content}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href="/contact-us" className="bg-[var(--accent-color)] text-black px-8 py-4 rounded-lg font-bold inline-block transition-all duration-300 uppercase tracking-widest hover:bg-[#eabd55] hover:-translate-y-0.5 hover:shadow-lg no-underline">
                                            TALK TO AN EXPERT
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col md:flex-row items-center gap-[60px]">
                                    {section.image && section.imagePosition === 'left' && (
                                        <div className="flex-1 min-w-[300px] w-full">
                                            <div className="w-full relative">
                                                <img
                                                    src={section.image}
                                                    alt={section.title || service.title}
                                                    className="w-full h-auto rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.02] border-4 border-white block"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className={`${section.image ? 'flex-1 min-w-[300px]' : 'flex-1 w-full'}`}>
                                        {section.title && (
                                            <h2 className="text-[32px] font-bold text-slate-800 mb-[30px] leading-[1.3]">
                                                {section.title}
                                            </h2>
                                        )}

                                        {section.content && (
                                            Array.isArray(section.content) ? (
                                                section.content.map((para, i) => <p key={i} className="text-slate-600 leading-[1.9] mb-[25px] text-[17px]">{para}</p>)
                                            ) : (
                                                <p className="text-slate-600 leading-[1.9] mb-[25px] text-[17px]">{section.content}</p>
                                            )
                                        )}

                                        {section.list && (
                                            <ul className="list-none p-0 m-[30px_0_0]">
                                                {section.list.map((item, i) => (
                                                    <li key={i} className="relative pl-[35px] mb-[15px] text-slate-700 text-[17px] font-medium before:content-['✓'] before:absolute before:left-0 before:top-[2px] before:text-[var(--primary-color)] before:font-black before:text-[14px] before:bg-[#1fa6a0]/10 before:w-[24px] before:h-[24px] before:rounded-full before:flex before:items-center before:justify-center">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {section.image && section.imagePosition === 'right' && (
                                        <div className="flex-1 min-w-[300px] w-full">
                                            <div className="w-full relative">
                                                <img
                                                    src={section.image}
                                                    alt={section.title || service.title}
                                                    className="w-full h-auto rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.02] border-4 border-white block"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                );
            })}

            {/* High-Impact Features Section */}
            {service.features && (
                <section className="py-[100px] relative bg-[#f8faff] bg-[radial-gradient(#e1e7f5_1px,transparent_1px)] bg-[length:20px_20px]">
                    <div className="container mx-auto px-4">
                        {service.featuresTitle && (
                            <div className="text-center mb-[70px]">
                                <h2 className="text-[36px] font-bold text-slate-800 mb-[20px] relative pb-[25px] inline-block after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[4px] after:bg-[var(--primary-color)] after:rounded-sm">
                                    {service.featuresTitle}
                                </h2>
                                {service.featuresDescription && (
                                    <p className="text-slate-500 max-w-[700px] mx-auto text-[18px] leading-[1.7]">
                                        {service.featuresDescription}
                                    </p>
                                )}
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
                            {service.features.map((feature, index) => (
                                <div key={index} className="bg-white p-[40px_30px] rounded-xl shadow-[0_10px_30px_rgba(11,31,51,0.05)] text-center transition-all duration-500 border border-slate-100 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(11,31,51,0.12)] hover:border-slate-200 group">
                                    <div className="text-[48px] text-[var(--primary-color)] mb-[25px] bg-[#1fa6a0]/10 w-[90px] h-[90px] flex items-center justify-center rounded-full mx-auto transition-all duration-300 group-hover:bg-[var(--primary-color)] group-hover:text-white group-hover:[transform:rotateY(180deg)]">
                                        <feature.icon />
                                    </div>
                                    <h3 className="text-[22px] font-bold mb-[15px] text-slate-800">
                                        {feature.title}
                                    </h3>
                                    {feature.description && (
                                        <p className="text-slate-500 leading-[1.7] text-[16px]">
                                            {feature.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
