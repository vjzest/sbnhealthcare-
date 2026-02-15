'use client';

import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
                ...formData,
                subject: 'General Inquiry' // Default subject for contact form
            });
            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
    };

    return (
        <div className="bg-[#f8faff] p-[40px] rounded-2xl shadow-sm border border-slate-100">
            {status.message && (
                <div className={`mb-8 p-4 rounded-xl text-sm font-bold border ${status.type === 'success' ? 'bg-green-50 text-green-600 border-green-100' :
                    status.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' :
                        'bg-blue-50 text-blue-600 border-blue-100'
                    }`}>
                    {status.message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-[20px]">
                    <label htmlFor="name" className="block mb-[8px] font-semibold text-[var(--dark-color)]">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-lg transition-all focus:outline-none focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/5"
                    />
                </div>

                <div className="mb-[20px]">
                    <label htmlFor="email" className="block mb-[8px] font-semibold text-[var(--dark-color)]">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-lg transition-all focus:outline-none focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/5"
                    />
                </div>

                <div className="mb-[20px]">
                    <label htmlFor="phone" className="block mb-[8px] font-semibold text-[var(--dark-color)]">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-200 rounded-lg transition-all focus:outline-none focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/5"
                    />
                </div>

                <div className="mb-[25px]">
                    <label htmlFor="message" className="block mb-[8px] font-semibold text-[var(--dark-color)]">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-lg transition-all focus:outline-none focus:border-[var(--primary-color)] focus:ring-4 focus:ring-[var(--primary-color)]/5"
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-[var(--primary-color)] text-white font-bold py-4 rounded-lg uppercase tracking-widest transition-all hover:bg-[var(--secondary-color)] hover:shadow-lg active:scale-[0.98]">
                    Send Message
                </button>
            </form>
        </div>
    );
}
