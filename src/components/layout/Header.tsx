'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
        name: 'Our Services',
        href: '#',
        dropdown: [
            { name: 'Eligibility Verification', href: '/services/eligibility-verification' },
            { name: 'Medical Billing', href: '/services/medical-billing' },
            { name: 'Medical Coding', href: '/services/medical-coding' },
            { name: 'AR Follow-up & Denial Management', href: '/services/ar-follow-up-and-denial-management' },
            { name: 'Credentialing & Contracting', href: '/services/credentialing-and-contracting' },
            { name: 'Credit Balance Resolution', href: '/services/credit-balance-resolution' },
            { name: 'More Services', href: '/services' },
        ]
    },
    { name: 'White Paper', href: '/white-paper' },
    { name: 'Security', href: '/security' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'RCM Calculator', href: '/rcm-calculator' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact-us' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            <div className="bg-[#06121e] text-slate-300 py-[10px] text-[14px]">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="mr-[20px]">(805)426-4609</span>
                        <span>info@sbnhealthcaresolution.com</span>
                    </div>
                    {/* Social icons would go here */}
                </div>
            </div>

            <div className="bg-[var(--secondary-color)] h-[90px] flex items-center border-b border-white/10">
                <div className="w-full px-4 lg:px-8 flex justify-between items-center h-full">
                    <Link href="/" className="flex items-center gap-2 no-underline group py-1">
                        <img src="/img/logo.jpg" alt="SBN Healthcare Solution" className="max-h-[55px] w-auto transition-transform group-hover:scale-105" />
                        <div className="flex flex-col justify-center leading-none">
                            <span className="text-white font-black text-[14px] lg:text-[18px] tracking-[1px] uppercase">
                                SBN Healthcare
                            </span>
                            <span className="text-[var(--primary-color)] font-black text-[9px] lg:text-[11px] tracking-[3px] uppercase mt-0.5">
                                Solution
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block h-full">
                        <ul className="flex gap-0 h-full items-center m-0 p-0 list-none">
                            {navLinks.map((link) => (
                                <li key={link.name} className="relative h-full flex items-center group">
                                    <Link
                                        href={link.href}
                                        className="text-white font-medium hover:text-[var(--accent-color)] px-[15px] h-[90px] flex items-center uppercase text-[14px] tracking-[0.5px] transition-colors duration-300 whitespace-nowrap"
                                    >
                                        {link.name} {link.dropdown && <FaAngleDown className="ml-[5px] text-[12px]" />}
                                    </Link>

                                    {link.dropdown && (
                                        <ul className="absolute top-full left-0 bg-white min-w-[250px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] py-[15px] hidden group-hover:block border-t-[3px] border-t-[var(--primary-color)] z-[1100]">
                                            {link.dropdown.map((subLink) => (
                                                <li key={subLink.name}>
                                                    <Link
                                                        href={subLink.href}
                                                        className="block py-[10px] px-[20px] text-[var(--text-color)] text-[14px] border-b border-[#f1f1f1] transition-all duration-300 hover:bg-[#f9f9f9] hover:text-[var(--primary-color)] hover:pl-[25px]"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden bg-transparent border-none text-[1.5rem] text-white cursor-pointer"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="lg:hidden absolute top-full left-0 right-0 bg-white p-[20px] shadow-md"
                            >
                                <ul className="flex flex-col gap-[15px] p-0 m-0 list-none">
                                    {navLinks.map((link) => (
                                        <motion.li
                                            key={link.name}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {link.dropdown ? (
                                                <>
                                                    <span className="text-[1.1rem] font-bold text-[var(--text-color)] block cursor-default">
                                                        {link.name}
                                                    </span>
                                                    <ul className="mt-[10px] mb-[10px] flex flex-col gap-[10px]">
                                                        {link.dropdown.map(subLink => (
                                                            <li key={subLink.name}>
                                                                <Link
                                                                    href={subLink.href}
                                                                    className="text-[0.9em] font-medium text-[var(--text-color)] block pl-[30px]"
                                                                    onClick={toggleMenu}
                                                                >
                                                                    {subLink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-[1.1rem] font-medium text-[var(--text-color)] block"
                                                    onClick={toggleMenu}
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Header;
