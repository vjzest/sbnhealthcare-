'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AdminAuthProvider, useAdminAuth } from '@/components/admin/AdminAuthProvider';
import { FaTachometerAlt, FaBlog, FaEnvelope, FaSearch, FaSignOutAlt } from 'react-icons/fa';

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { logout, loading, admin } = useAdminAuth();

    if (pathname === '/admin') return <>{children}</>;

    // Only show loading if we have a token but haven't fetched the admin yet
    const hasToken = typeof window !== 'undefined' && localStorage.getItem('adminToken');
    if (loading && !admin && hasToken) {
        return <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-[var(--primary-color)] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-400 font-bold text-sm">Authenticating...</p>
            </div>
        </div>;
    }

    if (!admin && !loading) return null;

    const navItems = [
        { name: 'Overview', href: '/admin/dashboard', icon: <FaTachometerAlt /> },
        { name: 'Blogs', href: '/admin/blogs', icon: <FaBlog /> },
        { name: 'Contacts', href: '/admin/contacts', icon: <FaEnvelope /> },
        { name: 'SEO Settings', href: '/admin/seo', icon: <FaSearch /> },
    ];

    return (
        <div className="flex h-[calc(100vh-135px)] overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-[var(--secondary-color)] text-white flex flex-col h-full border-r border-white/5">
                <div className="p-8 border-b border-white/5">
                    <p className="text-[10px] font-black uppercase text-[var(--primary-color)] tracking-[3px]">Admin Panel</p>
                </div>

                <nav className="flex-grow mt-6 px-4 overflow-y-auto custom-scrollbar">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-xl font-bold text-sm transition-all ${pathname === item.href
                                        ? 'bg-[var(--primary-color)] text-white'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-8 border-t border-white/5">
                    <button
                        onClick={logout}
                        className="flex items-center gap-4 px-6 py-4 rounded-xl font-bold text-sm text-red-400 hover:bg-red-500/10 transition-all w-full"
                    >
                        <FaSignOutAlt />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto bg-slate-50 p-10 custom-scrollbar">
                {children}
            </main>
        </div>
    );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminAuthProvider>
            <DashboardLayoutContent>{children}</DashboardLayoutContent>
        </AdminAuthProvider>
    );
}
