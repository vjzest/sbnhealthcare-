import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import axios from 'axios';
import { getDynamicMetadata } from '@/utils/seo';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/layout/PageHeader';

async function getPost(slug: string) {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/slug/${slug}`);
        return res.data.data;
    } catch (err) {
        return null;
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPost(params.slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} - SBN Insights`,
        description: post.excerpt,
    };
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-[var(--primary-color)] font-bold">Return to Insights</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-white min-h-screen">
            <PageHeader
                title={post.title}
                subtitle={post.category || 'Insights'}
                description={post.excerpt}
            />

            <article className="py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-[800px] mx-auto">

                        <div className="flex items-center gap-6 mb-12 pb-12 border-b border-slate-100">
                            <div className="w-12 h-12 bg-[var(--primary-color)] rounded-full flex items-center justify-center text-white font-black text-xl">
                                {post.author ? post.author.charAt(0) : 'S'}
                            </div>
                            <div>
                                <p className="text-sm font-black text-slate-800">{post.author || 'SBN Editorial Team'}</p>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                                    Published {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })}
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none">
                            <div className="text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
                                {post.content}
                            </div>

                            <div className="my-16 p-10 bg-[var(--secondary-color)] rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-4">Ready to Optimize Your Revenue?</h3>
                                    <p className="text-slate-300 mb-8 max-w-[500px]">
                                        Speak with an SBN platform specialist to discover how our Governance Framework can transform your practice.
                                    </p>
                                    <Link href="/contact-us" className="inline-block bg-[var(--primary-color)] text-white font-black px-8 py-4 rounded-xl uppercase tracking-[2px] text-xs hover:scale-105 transition-transform shadow-xl shadow-[var(--primary-color)]/20">
                                        Get Expert Consultation
                                    </Link>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                            </div>
                        </div>

                        <div className="mt-24 pt-12 border-t border-slate-100">
                            <Link href="/blog" className="flex items-center gap-2 text-[var(--primary-color)] font-black text-xs uppercase tracking-[2px] group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                                Back to Insights
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
