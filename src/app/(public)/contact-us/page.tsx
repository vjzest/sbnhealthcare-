import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/contact/ContactForm';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('contact-us');
    return {
        title: dynamic?.title || 'Contact Us - SBN Healthcare Solution',
        description: dynamic?.description || 'Get in touch with SBN Healthcare Solution for your medical billing needs.',
    };
}

export default function ContactUs() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Speak With Our Experts"
                subtitle="Contact Us"
                description="Have questions about our services or need a customized quote? Join our network of successful providers by getting in touch today."
            />

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
                    <div>
                        <div className="flex flex-col gap-[30px]">
                            <div>
                                <h3 className="text-[var(--primary-color)] mb-[5px] text-[1.2rem] font-bold">Email</h3>
                                <p className="text-[var(--text-color)] text-[1.1rem]">info@sbnhealthcaresolution.com</p>
                            </div>
                            <div>
                                <h3 className="text-[var(--primary-color)] mb-[5px] text-[1.2rem] font-bold">Phone</h3>
                                <p className="text-[var(--text-color)] text-[1.1rem]">+1 (123) 456-7890</p>
                            </div>
                            <div>
                                <h3 className="text-[var(--primary-color)] mb-[5px] text-[1.2rem] font-bold">Address</h3>
                                <p className="text-[var(--text-color)] text-[1.1rem]">Your Business Address Here<br />City, State, Zip Code</p>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
