'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory, isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || isLoading) return;

        const userMessage = message.trim();
        setMessage('');
        setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ai/chat`, {
                message: userMessage,
                history: chatHistory.map(m => ({
                    role: m.role,
                    parts: [{ text: m.text }]
                }))
            });

            if (response.data.success) {
                setChatHistory(prev => [...prev, { role: 'model', text: response.data.data }]);
            }
        } catch (error) {
            setChatHistory(prev => [...prev, { role: 'model', text: "I'm sorry, I'm experiencing a temporary connectivity issue. Please try again or contact our support team directly." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[9999]">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[var(--secondary-color)] text-white p-5 rounded-3xl shadow-[0_20px_40px_rgba(11,31,51,0.3)] flex items-center justify-center border-2 border-[var(--primary-color)]/30 backdrop-blur-md relative"
            >
                {isOpen ? <FaTimes size={24} /> : (
                    <div className="flex items-center gap-3">
                        <FaRobot size={26} className="text-[var(--primary-color)]" />
                        <span className="text-sm font-black uppercase tracking-widest pr-2 hidden md:block">AI Assistant</span>
                    </div>
                )}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--primary-color)] rounded-full animate-pulse border-2 border-[var(--secondary-color)]"></span>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="absolute bottom-24 right-0 w-[calc(100vw-3rem)] md:w-[450px] max-h-[calc(100vh-160px)] h-[600px] bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[-20px_20px_60px_rgba(0,0,0,0.15)] border border-white flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[var(--secondary-color)] p-8 text-white relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary-color)]/5 opacity-50"></div>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-14 h-14 bg-[var(--primary-color)]/20 rounded-2xl flex items-center justify-center border border-[var(--primary-color)]/30 backdrop-blur-sm">
                                    <FaRobot size={28} className="text-[var(--primary-color)]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black tracking-tight leading-tight text-white">SBN AI Specialist</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse"></span>
                                        <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Medical Intelligence Core</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto bg-slate-50/50 flex flex-col gap-6">
                            {chatHistory.length === 0 && (
                                <div className="text-center mt-12 bg-white/50 p-8 rounded-3xl border border-white shadow-sm">
                                    <FaRobot size={40} className="text-[var(--primary-color)] mx-auto mb-4 opacity-20" />
                                    <p className="text-slate-800 font-black text-lg mb-2 tracking-tight">Enterprise RCM AI</p>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                        How can I assist your practice with high-octane revenue cycle management today?
                                    </p>
                                </div>
                            )}
                            {chatHistory.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-5 rounded-[1.8rem] text-[15px] font-medium leading-relaxed shadow-sm transition-all ${m.role === 'user'
                                        ? 'bg-[var(--secondary-color)] text-white rounded-tr-none'
                                        : 'bg-white text-slate-700 border border-white rounded-tl-none'
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-center gap-2 bg-white/50 w-fit p-4 rounded-2xl border border-white">
                                    <div className="flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-bounce"></span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Analyzing Record</span>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-6 bg-white border-t border-slate-50">
                            <form onSubmit={handleSendMessage} className="flex gap-3 bg-slate-50 p-2 rounded-[1.5rem] border border-slate-100 focus-within:border-[var(--primary-color)]/30 focus-within:bg-white transition-all shadow-inner">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your inquiry..."
                                    className="flex-grow px-4 py-3 bg-transparent text-sm focus:outline-none font-bold text-slate-700 placeholder:text-slate-400"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !message.trim()}
                                    className="bg-[var(--primary-color)] text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-105 transition-all shadow-lg shadow-[var(--primary-color)]/20 disabled:opacity-30 disabled:grayscale"
                                >
                                    <FaPaperPlane size={16} />
                                </button>
                            </form>
                            <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-[2px] mt-4">
                                Confidential • HIPAA Compliant AI Environment
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
