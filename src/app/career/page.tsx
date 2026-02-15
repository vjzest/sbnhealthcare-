import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { getDynamicMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('career');
    return {
        title: dynamic?.title || 'Careers - SBN Healthcare Solution',
        description: dynamic?.description || 'Join our team of healthcare professionals and experts.',
    };
}

const Career = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Join Our High-Performance Team"
                subtitle="Future of Healthcare"
                description="Our people are our greatest asset. We value ambitious go-getters who are ready to provide the best career experience in the healthcare billing industry."
            />

            <section className="py-[80px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-[50px]">
                        <div className="flex-1 min-w-[300px]">
                            <h2 className="text-[32px] font-bold text-slate-800 mb-[25px] relative after:block after:content-[''] after:w-[60px] after:h-[4px] after:bg-[#FFAD01] after:mt-[15px] after:rounded-sm">
                                Join our team
                            </h2>
                            <p className="text-slate-600 leading-[1.8] text-[17px] mb-[25px]">
                                We are a high-performance organization. And we value ambitious go-getters.<br /><br />
                                Be it our award-winning people practices, world-class training programs, attractive benefits, or state-of-the-art offices, we ensure we provide the best career experience to our employees. We always have openings for AR, Payment Posting & Charge Entry.<br /><br />
                                email your resume at <a href="mailto:info@sbnhealthcaresolution.com" className="text-blue-600 font-semibold no-underline transition-colors hover:text-blue-800 hover:underline">Info@sbnhealthcaresolution.com</a> will get back to you within 24 hours.
                            </p>
                        </div>
                        <div className="flex-1 min-w-[300px] flex justify-center">
                            <img
                                src="/img/career.jpg"
                                alt="Career"
                                className="w-full max-w-[500px] h-[350px] object-cover rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 border-white transition-transform duration-300 hover:-translate-y-1"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
