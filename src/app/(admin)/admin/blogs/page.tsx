'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchBlogs, createBlog, updateBlog, deleteBlog } from '@/store/slices/blogSlice';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaImage, FaHashtag, FaNewspaper, FaClock } from 'react-icons/fa';

export default function BlogManagement() {
    const dispatch = useDispatch<AppDispatch>();
    const { blogs, loading } = useSelector((state: RootState) => state.blogs);
    const [isEditing, setIsEditing] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        excerpt: '',
        content: '',
        category: '',
        image: '/img/bg1.jpg',
        readTime: '5 Min Read'
    });

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const showStatus = (type: string, message: string) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (formData._id) {
                await dispatch(updateBlog({ id: formData._id, data: formData })).unwrap();
                showStatus('success', 'Blog updated successfully!');
            } else {
                const { _id, ...newData } = formData;
                await dispatch(createBlog(newData)).unwrap();
                showStatus('success', 'Blog created successfully!');
            }
            setIsEditing(false);
            setFormData({ _id: '', title: '', excerpt: '', content: '', category: '', image: '/img/bg1.jpg', readTime: '5 Min Read' });
        } catch (err: any) {
            showStatus('error', err || 'Something went wrong');
        }
    };

    const handleEdit = (blog: any) => {
        setFormData(blog);
        setIsEditing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;
        try {
            await dispatch(deleteBlog(id)).unwrap();
            showStatus('success', 'Blog deleted successfully!');
        } catch (err: any) {
            showStatus('error', err || 'Failed to delete blog');
        }
    };

    if (loading && blogs.length === 0) return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-4xl font-black text-[var(--secondary-color)] tracking-tight">Blog Insights</h1>
                    <p className="text-slate-500 font-medium mt-1 text-lg">Manage your expert healthcare articles and news.</p>
                </div>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-[var(--primary-color)] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-[var(--primary-color)]/20 hover:scale-105 active:scale-95 transition-all"
                    >
                        <FaPlus /> Create New Post
                    </button>
                )}
            </div>

            {/* Status Notification */}
            {status.message && (
                <div className={`fixed top-10 right-10 z-50 px-8 py-4 rounded-2xl shadow-2xl animate-slideIn flex items-center gap-3 font-bold text-white ${status.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}>
                    <FaCheck /> {status.message}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Form Section */}
                {isEditing && (
                    <div className="lg:col-span-12 animate-fadeIn">
                        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 italic-gradient">
                            <div className="p-10">
                                <div className="flex justify-between items-center mb-10">
                                    <h2 className="text-2xl font-black text-[var(--secondary-color)] flex items-center gap-3">
                                        <FaNewspaper className="text-[var(--primary-color)]" />
                                        {formData._id ? 'Refine Post' : 'Compose New Insight'}
                                    </h2>
                                    <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                                        <FaTimes size={24} />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] ml-2 flex items-center gap-2">
                                                <FaEdit /> Article Title
                                            </label>
                                            <input
                                                className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--primary-color)] font-bold text-slate-800 transition-all placeholder:text-slate-300"
                                                placeholder="Enter a compelling title..."
                                                value={formData.title}
                                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] ml-2 flex items-center gap-2">
                                                    <FaHashtag /> Category
                                                </label>
                                                <input
                                                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--primary-color)] font-bold text-slate-800 transition-all"
                                                    placeholder="E.g. Medical Billing"
                                                    value={formData.category}
                                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] ml-2 flex items-center gap-2">
                                                    <FaClock /> Read Time
                                                </label>
                                                <input
                                                    className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--primary-color)] font-bold text-slate-800 transition-all"
                                                    placeholder="5 Min Read"
                                                    value={formData.readTime}
                                                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] ml-2 flex items-center gap-2">
                                            <FaImage /> Cover Image URL
                                        </label>
                                        <input
                                            className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--primary-color)] font-bold text-slate-800 transition-all"
                                            placeholder="/img/blog/default.jpg"
                                            value={formData.image}
                                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] ml-2">Brief Excerpt</label>
                                        <textarea
                                            className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--primary-color)] font-bold text-slate-800 transition-all resize-none"
                                            rows={3}
                                            placeholder="Sum up the post in 2-3 sentences..."
                                            value={formData.excerpt}
                                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-[2px] ml-2">Full Content</label>
                                        <textarea
                                            className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--primary-color)] font-bold text-slate-800 transition-all min-h-[400px]"
                                            placeholder="Write your expert analysis here..."
                                            value={formData.content}
                                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <button type="submit" className="flex-1 bg-[var(--primary-color)] text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-2xl shadow-[var(--primary-color)]/20 hover:opacity-90 transition-all">
                                            <FaCheck /> {formData._id ? 'Update Insight' : 'Publish Article'}
                                        </button>
                                        <button type="button" onClick={() => setIsEditing(false)} className="px-10 py-5 rounded-2xl bg-slate-100 text-slate-500 font-black hover:bg-slate-200 transition-all uppercase text-xs tracking-widest">
                                            Discard Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* List Section */}
                <div className={`col-span-1 lg:col-span-12 ${isEditing ? 'opacity-50 pointer-events-none blur-sm grayscale' : 'animate-fadeIn'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog: any) => (
                            <div key={blog._id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] overflow-hidden group hover:shadow-[0_30px_60px_rgba(11,31,51,0.1)] transition-all duration-500">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-[var(--primary-color)] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                            {blog.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <button
                                            onClick={() => handleEdit(blog)}
                                            className="w-10 h-10 bg-white/90 backdrop-blur-md text-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:text-white shadow-lg transition-all"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(blog._id)}
                                            className="w-10 h-10 bg-white/90 backdrop-blur-md text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white shadow-lg transition-all"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-[var(--secondary-color)] leading-tight mb-3 line-clamp-2">{blog.title}</h3>
                                    <p className="text-slate-500 text-sm line-clamp-2 font-medium leading-relaxed">{blog.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {blogs.length === 0 && (
                        <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100 italic-gradient">
                            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaNewspaper className="text-slate-300" size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-300">No Insights Found</h3>
                            <p className="text-slate-400 font-medium">Start your thought leadership journey by publishing your first post.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
