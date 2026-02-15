import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('about-us');
    return {
        title: dynamic?.title || 'About Us - SBN Healthcare Solution',
        description: dynamic?.description || 'Learn more about SBN Healthcare Solution and our 11+ years of experience in Medical Billing Services.',
    };
}

export default function AboutUs() {
    return (
        <main>
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center py-[100px] text-center text-white overflow-hidden"
                style={{ backgroundImage: "linear-gradient(rgba(11, 31, 51, 0.8), rgba(11, 31, 51, 0.9)), url('/img/bg1.jpg')" }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-[42px] font-extrabold m-0 text-white drop-shadow-lg relative z-10 tracking-tighter">About Us</h1>
                </div>
            </div>

            {/* Introduction Section - Split Row */}
            <section className="py-[80px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-[60px]">
                        {/* Text Column */}
                        <div className="flex-1 min-w-[300px]">
                            <h2 className="text-[32px] font-bold text-slate-800 mb-[25px] leading-tight relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-[4px] after:bg-[var(--primary-color)] after:rounded-sm">
                                About SBN Healthcare Solution
                            </h2>
                            <p className="text-slate-600 leading-[1.8] text-[17px] mb-[20px]">
                                We have more than 11+ years of experience in Medical Billing Services. The major benefit of outsourcing billing with SBN Healthcare Solution is an improvement in your financial performance.
                            </p>
                            <p className="text-slate-600 leading-[1.8] text-[17px] mb-[20px]">
                                With our experienced staff, you can meet and exceed your business goals while saving more time and money than you would be trying to take care of your patient and other admin work. We function as an extension of your practice, ensuring seamless operations.
                            </p>
                        </div>

                        {/* Image Column */}
                        <div className="flex-1 min-w-[300px]">
                            <div className="relative rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 border-white overflow-hidden group">
                                <img
                                    src="/img/intro-img.jpg"
                                    alt="About SBN Healthcare"
                                    className="w-full h-[400px] object-cover block transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Gray Background */}
            <section className="py-[80px] bg-[#f8faff] border-y border-[#eef2fa]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-[60px]">
                        {/* Text Column */}
                        <div className="flex-1 min-w-[300px]">
                            <h2 className="text-[32px] font-bold text-slate-800 mb-[25px] leading-tight relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60px] after:h-[4px] after:bg-[var(--primary-color)] after:rounded-sm">
                                Why Choose Us?
                            </h2>
                            <p className="text-slate-600 leading-[1.8] text-[17px] mb-[20px]">
                                In the complex world of medical billing, precision and reliability are paramount. Here is how we deliver value to your practice:
                            </p>
                            <ul className="list-none p-0 my-[20px]">
                                {[
                                    { strong: "Revenue Improved", text: "We consistently help our clients increase their revenue by 20% or more through accurate coding and timely follow-ups." },
                                    { strong: "Costs Reduced", text: "Outsourcing significantly lowers your administrative overhead by up to 40%, eliminating the need for in-house billing staff." },
                                    { strong: "Patient Experience", text: "By handing over the billing burden to us, we allow you to focus entirely on patient care." }
                                ].map((item, idx) => (
                                    <li key={idx} className="relative pl-[35px] mb-[15px] text-slate-700 text-[17px] font-medium before:content-['✓'] before:absolute before:left-0 before:top-[2px] before:text-[#2563eb] before:font-black before:text-[14px] before:bg-blue-600/10 before:w-[24px] before:h-[24px] before:rounded-full before:flex before:items-center before:justify-center">
                                        <strong>{item.strong}:</strong> {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Column */}
                        <div className="flex-1 min-w-[300px]">
                            <div className="relative rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 border-white overflow-hidden group">
                                <img
                                    src="/img/feature1.jpg"
                                    alt="Why Choose Us"
                                    className="w-full h-[400px] object-cover block transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-[80px]">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-[800px] mx-auto">
                        <h2 className="text-[32px] font-bold text-slate-800 mb-[20px] flex justify-center pb-[15px] relative after:content-[''] after:absolute after:bottom-0 after:w-[60px] after:h-[4px] after:bg-[var(--primary-color)] after:rounded-sm">
                            Our Mission
                        </h2>
                        <p className="text-[20px] font-medium text-slate-600 leading-[1.8] max-w-[800px] mx-auto">
                            "To provide comprehensive, efficient, and transparent billing solutions that empower healthcare providers to focus on what they do best: caring for patients."
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
