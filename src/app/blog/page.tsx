import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import PageHeader from '@/components/layout/PageHeader';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('blog');
    return {
        title: dynamic?.title || 'Our Blog - Latest Healthcare Insights | SBN Healthcare',
        description: dynamic?.description || 'Insights, news and trends from the healthcare billing and RCM world.',
    };
}

async function getBlogPosts() {
    try {
        // Adding { cache: 'no-store' } for real-time updates if using fetch, 
        // but since we use axios, we might rely on the API being reached.
        // For Next.js to not cache the page, we either export const revalidate = 0
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
            params: { _t: Date.now() } // Cache busting for axios in some environments
        });
        return res.data.data;
    } catch (err) {
        console.error('Error fetching blogs:', err);
        return [];
    }
}

export const revalidate = 0; // Force dynamic rendering

export default async function BlogPage() {
    const blogPosts = await getBlogPosts();

    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Blog & Insights"
                subtitle="Thought Leadership"
                description="Expert analysis, industry trends, and strategic guides designed to empower healthcare providers in the modern financial landscape."
            />

            <section className="py-24 md:py-32">
                <div className="container mx-auto px-4">
                    {blogPosts.length === 0 ? (
                        <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
                            <h3 className="text-2xl font-black text-slate-300">Stay Tuned</h3>
                            <p className="text-slate-400 font-medium mt-2">More expert insights are coming soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {blogPosts.map((post: any) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(11,31,51,0.1)] transition-all duration-500"
                                >
                                    <div className="relative h-[240px] overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-[var(--primary-color)] text-white text-[10px] font-black uppercase tracking-[2px] px-4 py-1.5 rounded-full shadow-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-10">
                                        <div className="flex items-center gap-3 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span>{post.readTime || '5 min read'}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-[var(--secondary-color)] leading-tight mb-4 group-hover:text-[var(--primary-color)] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-[var(--primary-color)] font-black text-xs uppercase tracking-[2px]">
                                            Read Article
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

