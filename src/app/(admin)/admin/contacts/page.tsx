'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchContacts, updateContactStatus } from '@/store/slices/contactSlice';
import { FaTrash, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function ContactManagement() {
    const dispatch = useDispatch<AppDispatch>();
    const { contacts, loading } = useSelector((state: RootState) => state.contacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const updateStatus = async (id: string, status: string) => {
        dispatch(updateContactStatus({ id, status }));
    };

    if (loading) return <div>Loading inquiries...</div>;

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-3xl font-black text-[var(--secondary-color)]">Inquiry Management</h1>
                <p className="text-slate-500 font-medium">Manage leads and patient inquiries from your website forms.</p>
            </div>

            <div className="overflow-hidden bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                            <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-[2px]">Contact</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-[2px]">Subject</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-[2px]">Status</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-[2px]">Date</th>
                            <th className="px-8 py-6 text-[10px] font-black uppercase text-slate-400 tracking-[2px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {contacts.map((contact: any) => (
                            <tr key={contact._id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-8 py-6">
                                    <p className="font-black text-[var(--secondary-color)]">{contact.name}</p>
                                    <p className="text-xs text-slate-400">{contact.email}</p>
                                </td>
                                <td className="px-8 py-6">
                                    <p className="font-medium text-slate-600 truncate max-w-[200px]">{contact.subject}</p>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${contact.status === 'New' ? 'bg-blue-100 text-blue-600' :
                                        contact.status === 'Contacted' ? 'bg-orange-100 text-orange-600' :
                                            'bg-green-100 text-green-600'
                                        }`}>
                                        {contact.status}
                                    </span>
                                </td>
                                <td className="px-8 py-6 text-sm text-slate-400">
                                    {new Date(contact.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex gap-2">
                                        {contact.status !== 'Closed' && (
                                            <button
                                                onClick={() => updateStatus(contact._id, 'Closed')}
                                                className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                                                title="Mark as Closed"
                                            >
                                                <FaCheckCircle />
                                            </button>
                                        )}
                                        <button className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center hover:bg-white hover:shadow-lg transition-all" title="View Details">
                                            <FaExclamationCircle />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {contacts.length === 0 && <div className="text-center py-20 text-slate-400 font-bold">No inquiries found.</div>}
            </div>
        </div>
    );
}
