'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '@/store/slices/authSlice';
import { RootState, AppDispatch } from '@/store';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await dispatch(loginAdmin({ email, password }));
        if (loginAdmin.fulfilled.match(result)) {
            router.push('/admin/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-[var(--secondary-color)] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-[2rem] p-10 shadow-2xl">
                <div className="text-center mb-10">
                    <img src="/img/logo.jpg" alt="SBN Logo" className="h-24 mx-auto mb-2" />
                    <div className="mb-6">
                        <span className="block text-[var(--secondary-color)] font-black text-lg tracking-tight uppercase">SBN Healthcare</span>
                        <span className="block text-[var(--primary-color)] font-bold text-[10px] tracking-[3px] uppercase">Solution</span>
                    </div>
                    <h1 className="text-2xl font-black text-[var(--secondary-color)] border-t border-slate-100 pt-6">Admin Portal</h1>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-2">Authorized Personnel Only</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg text-red-700 text-sm font-bold">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] font-medium"
                            placeholder="admin@sbnhealthcare.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] font-medium"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--primary-color)] text-white font-black py-4 rounded-xl uppercase tracking-widest text-sm hover:bg-[#188c87] transition-all disabled:opacity-50"
                    >
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}
