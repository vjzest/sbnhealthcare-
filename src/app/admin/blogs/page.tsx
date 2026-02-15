'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchBlogs, createBlog, updateBlog, deleteBlog } from '@/store/slices/blogSlice';
import { FaPlus, FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

export default function BlogManagement() {
    const dispatch = useDispatch<AppDispatch>();
    const { blogs, loading } = useSelector((state: RootState) => state.blogs);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        excerpt: '',
        content: '',
        category: '',
        image: '/img/bg1.jpg'
    });

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (formData._id) {
                await dispatch(updateBlog({ id: formData._id, data: formData }));
            } else {
                const { _id, ...newData } = formData;
                await dispatch(createBlog(newData));
            }
            setIsEditing(false);
            setFormData({ _id: '', title: '', excerpt: '', content: '', category: '', image: '/img/bg1.jpg' });
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;
        try {
            await dispatch(deleteBlog(id));
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <div>Loading blogs...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black text-[var(--secondary-color)]">Blog Management</h1>
                    <p className="text-slate-500 font-medium">Create, edit, and publish your latest healthcare insights.</p>
                </div>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-[var(--primary-color)] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-[#188c87] transition-all"
                    >
                        <FaPlus /> New Blog Post
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100">
                    <h2 className="text-xl font-black text-[var(--secondary-color)] mb-8">{formData._id ? 'Edit Blog' : 'New Blog'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Title</label>
                                <input
                                    className="w-full px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:border-[var(--primary-color)] font-medium"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Category</label>
                                <input
                                    className="w-full px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:border-[var(--primary-color)] font-medium"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Excerpt</label>
                            <textarea
                                className="w-full px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:border-[var(--primary-color)] font-medium"
                                rows={2}
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Content (Markdown supported)</label>
                            <textarea
                                className="w-full px-6 py-4 rounded-xl border border-slate-100 focus:outline-none focus:border-[var(--primary-color)] font-medium"
                                rows={10}
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                required
                            />
                        </div>
                        <div className="flex gap-4">
                            <button type="submit" className="bg-[var(--primary-color)] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2">
                                <FaCheck /> Save Changes
                            </button>
                            <button type="button" onClick={() => setIsEditing(false)} className="bg-slate-100 text-slate-600 px-8 py-4 rounded-xl font-bold">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {blogs.map((blog: any) => (
                        <div key={blog._id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-between group animate-fadeIn">
                            <div className="flex items-center gap-8">
                                <img src={blog.image} className="w-32 h-20 object-cover rounded-2xl" alt="" />
                                <div>
                                    <span className="text-[10px] font-black uppercase text-[var(--primary-color)] tracking-widest">{blog.category}</span>
                                    <h3 className="text-xl font-black text-[var(--secondary-color)] mt-1">{blog.title}</h3>
                                    <p className="text-slate-400 text-sm">{new Date(blog.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setFormData(blog); setIsEditing(true); }}
                                    className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDelete(blog._id)}
                                    className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                    {blogs.length === 0 && <div className="text-center py-20 text-slate-400 font-bold">No blogs found. Start by creating one!</div>}
                </div>
            )}
        </div>
    );
}
