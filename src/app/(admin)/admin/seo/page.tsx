'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchAllSeo, upsertSeo, deleteSeo } from '@/store/slices/seoSlice';
import { FaSave, FaGlobe, FaTrash, FaPlus, FaLightbulb } from 'react-icons/fa';

export default function SeoManagement() {
    const dispatch = useDispatch<AppDispatch>();
    const { seoList: seos, loading } = useSelector((state: RootState) => state.seo);
    const [formData, setFormData] = useState({
        page: '',
        title: '',
        description: '',
        keywords: ''
    });

    const suggestions = [
        'home', 'about-us', 'services', 'contact-us', 'rcm-calculator', 'blog',
        'medical-billing', 'medical-coding', 'eligibility-verification',
        'ar-follow-up', 'credentialing', 'credit-balance'
    ];

    useEffect(() => {
        dispatch(fetchAllSeo());
    }, [dispatch]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(upsertSeo(formData));
            setFormData({ page: '', title: '', description: '', keywords: '' });
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Delete this SEO entry?')) {
            dispatch(deleteSeo(id));
        }
    };

    if (loading) return <div>Loading SEO settings...</div>;

    return (
        <div className="pb-20">
            <div className="mb-10 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-black text-[var(--secondary-color)]">Dynamic SEO Control</h1>
                    <p className="text-slate-500 font-medium">Manage and add SEO metadata for any site page dynamically.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Form Section */}
                <div className="lg:col-span-4">
                    <div className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm sticky top-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-full flex items-center justify-center">
                                <FaPlus />
                            </div>
                            <h3 className="text-xl font-black text-[var(--secondary-color)]">Configure Page</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Page Identifier</label>
                                <input
                                    className="w-full px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:border-[var(--primary-color)] font-medium text-sm"
                                    value={formData.page}
                                    onChange={(e) => setFormData({ ...formData, page: e.target.value })}
                                    placeholder="e.g. services/billing"
                                    required
                                />
                                <div className="mt-4">
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mb-2 flex items-center gap-1">
                                        <FaLightbulb /> Suggestions:
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {suggestions.map(s => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, page: s })}
                                                className={`text-[9px] px-3 py-1 rounded-full border transition-all font-bold ${formData.page === s
                                                    ? 'bg-[var(--primary-color)] text-white border-[var(--primary-color)]'
                                                    : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-[var(--primary-color)]'
                                                    }`}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Meta Title</label>
                                <input
                                    className="w-full px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:border-[var(--primary-color)] font-medium text-sm"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Meta Description</label>
                                <textarea
                                    className="w-full px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:border-[var(--primary-color)] font-medium text-sm"
                                    rows={4}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-[var(--secondary-color)] text-white font-black py-4 rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-black transition-all">
                                <FaSave /> Publish SEO Tags
                            </button>
                        </form>
                    </div>
                </div>

                {/* List Section */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="flex items-center justify-between mb-4 px-4">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Metadata Entries ({seos.length})</p>
                    </div>
                    {seos.map((seo: any) => (
                        <div key={seo._id} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex items-start gap-8 group">
                            <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-[1.5rem] flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[var(--primary-color)]/10 group-hover:text-[var(--primary-color)] transition-all">
                                <FaGlobe />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="bg-blue-50 text-blue-500 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">{seo.page}</span>
                                        <h3 className="text-xl font-black text-[var(--secondary-color)] mt-3 leading-tight">{seo.title}</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setFormData({ page: seo.page, title: seo.title, description: seo.description, keywords: seo.keywords || '' })}
                                            className="text-[var(--primary-color)] font-black text-[10px] uppercase tracking-widest hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(seo._id)}
                                            className="text-red-400 font-black text-[10px] uppercase tracking-widest hover:text-red-600 hover:underline flex items-center gap-1"
                                        >
                                            <FaTrash /> Delete
                                        </button>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2">{seo.description}</p>
                            </div>
                        </div>
                    ))}
                    {seos.length === 0 && (
                        <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                            <div className="w-20 h-20 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                                <FaGlobe />
                            </div>
                            <h3 className="text-xl font-black text-slate-400">No SEO tags configured yet</h3>
                            <p className="text-slate-400 mt-2">Start by adding metadata for your site pages.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
