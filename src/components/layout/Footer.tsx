'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    // Hide footer on admin pages
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <footer className="bg-[var(--secondary-color)] pt-[80px] text-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[50px]">
                    <div className="mb-[20px]">
                        <h3 className="text-[1.25rem] font-bold text-white mb-[20px] relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)]">
                            About Us
                        </h3>
                        <p className="text-[#e0e0e0] text-[0.95rem] leading-[1.6] mb-[15px]">
                            We have more than 11+ years of experience in Medical Billing Services. The major benefit of outsourcing billing with SBN Healthcare Solution is an improvement in your financial performance.
                        </p>
                        <div className="flex gap-[10px] mt-[20px]">
                            <a href="https://www.facebook.com/BillingGiant/" target="_blank" className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 text-white rounded-[2px] transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com/sbnhealthcare" target="_blank" className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 text-white rounded-[2px] transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="https://in.linkedin.com/company/sbn-healthcare-solution-llc" target="_blank" className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 text-white rounded-[2px] transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="mb-[20px]">
                        <h3 className="text-[1.25rem] font-bold text-white mb-[20px] relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)]">
                            Our Services
                        </h3>
                        <ul className="flex flex-col gap-[12px] list-none p-0">
                            {[
                                { name: 'Eligibility Verification', href: '/services/eligibility-verification' },
                                { name: 'Medical Billing', href: '/services/medical-billing' },
                                { name: 'Medical Coding', href: '/services/medical-coding' },
                                { name: 'AR Follow-up & Denial Management', href: '/services/ar-follow-up-and-denial-management' },
                                { name: 'Credentialing & Contracting', href: '/services/credentialing-and-contracting' },
                                { name: 'RCM Denial Calculator', href: '/rcm-calculator' },
                                { name: 'Credit Balance Resolution', href: '/services/credit-balance-resolution' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[#e0e0e0] text-[0.95rem] transition-all duration-300 flex items-center hover:text-[var(--accent-color)] hover:pl-[5px] before:content-['-'] before:mr-[10px] before:text-[var(--primary-color)]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-[20px]">
                        <h3 className="text-[1.25rem] font-bold text-white mb-[20px] relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)]">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-[12px] list-none p-0">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about-us' },
                                { name: 'Insights / Blog', href: '/blog' },
                                { name: 'RCM Calculator', href: '/rcm-calculator' },
                                { name: 'Pricing', href: '/pricing' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-[#e0e0e0] text-[0.95rem] transition-all duration-300 flex items-center hover:text-[var(--accent-color)] hover:pl-[5px] before:content-['-'] before:mr-[10px] before:text-[var(--primary-color)]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-[20px]">
                        <h3 className="text-[1.25rem] font-bold text-white mb-[20px] relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[30px] after:h-[2px] after:bg-[var(--primary-color)]">
                            Contact Us
                        </h3>
                        <p className="text-[#e0e0e0] text-[0.95rem] leading-[1.6] mb-[5px]">1309 COFFEEN AVENUE STE</p>
                        <p className="text-[#e0e0e0] text-[0.95rem] leading-[1.6] mb-[20px]">1200 SHERIDAN, WY 82801</p>
                        <p className="text-[#e0e0e0] text-[0.95rem] leading-[1.6] mb-[5px]">
                            <strong className="text-white">Phone:</strong> (805)426-4609
                        </p>
                        <p className="text-[#e0e0e0] text-[0.95rem] leading-[1.6]">
                            <strong className="text-white">Email:</strong> info@sbnhealthcaresolution.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#081624] py-[25px] text-center text-[#aaa] text-[0.9rem]">
                <div className="container mx-auto px-4">
                    &copy; {new Date().getFullYear()} SBN Healthcare Solution. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
