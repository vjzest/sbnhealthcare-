'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBlog, FaEnvelope, FaEye, FaUsers } from 'react-icons/fa';
import { RootState, AppDispatch } from '@/store';
import { fetchBlogs } from '@/store/slices/blogSlice';
import { fetchContacts } from '@/store/slices/contactSlice';

export default function DashboardOverview() {
    const { blogs, loading: blogsLoading } = useSelector((state: RootState) => state.blogs);
    const { contacts, loading: contactsLoading } = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchBlogs());
        dispatch(fetchContacts());
    }, [dispatch]);

    // Assuming blogs and contacts from Redux state are arrays or objects with a 'data' property
    // If blogs and contacts are arrays directly:
    const totalBlogs = blogs.length;
    const totalContacts = contacts.length;
    const newContacts = contacts.filter((c: any) => c.status === 'New').length;

    // If blogs and contacts are objects like { data: [], count: number }:
    // const totalBlogs = blogs.count;
    // const totalContacts = contacts.count;
    // const newContacts = contacts.data.filter((c: any) => c.status === 'New').length;


    const loading = blogsLoading || contactsLoading;

    const cards = [
        { name: 'Total Blogs', value: totalBlogs, icon: <FaBlog />, color: 'bg-blue-500' },
        { name: 'Total Inquiries', value: totalContacts, icon: <FaEnvelope />, color: 'bg-green-500' },
        { name: 'New Inquiries', value: newContacts, icon: <FaEye />, color: 'bg-orange-500' },
        { name: 'Active Users', value: 1, icon: <FaUsers />, color: 'bg-purple-500' },
    ];

    if (loading) return <div>Loading statistics...</div>;

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl font-black text-[var(--secondary-color)]">Dashboard Overview</h1>
                <p className="text-slate-500 font-medium">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cards.map((card) => (
                    <div key={card.name} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{card.name}</p>
                            <h3 className="text-4xl font-black text-[var(--secondary-color)]">{card.value}</h3>
                        </div>
                        <div className={`w-14 h-14 ${card.color} text-white rounded-2xl flex items-center justify-center text-xl shadow-lg`}>
                            {card.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Placeholder for recent activity chart or list */}
            <div className="mt-12 bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100">
                <h3 className="text-xl font-black text-[var(--secondary-color)] mb-6">Recent Activity</h3>
                <div className="space-y-6">
                    <p className="text-slate-500 italic">No recent activities to display.</p>
                </div>
            </div>
        </div>
    );
}
