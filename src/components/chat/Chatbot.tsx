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
            setChatHistory(prev => [...prev, { role: 'model', text: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[var(--primary-color)] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
            >
                {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-[-10px_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[var(--secondary-color)] p-5 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                    <FaRobot size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold">SBN Assistant</h3>
                                    <p className="text-[10px] text-[var(--primary-color)] font-medium">Online • Powered by Gemini</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-grow p-5 overflow-y-auto bg-slate-50 flex flex-col gap-4">
                            {chatHistory.length === 0 && (
                                <div className="text-center mt-10">
                                    <p className="text-slate-400 text-sm">Hi! How can I help you with our healthcare services today?</p>
                                </div>
                            )}
                            {chatHistory.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user'
                                        ? 'bg-[var(--secondary-color)] text-white rounded-tr-none'
                                        : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start italic text-slate-400 text-xs animate-pulse">
                                    Assistant is thinking...
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Ask a question..."
                                className="flex-grow px-4 py-3 bg-slate-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all font-medium"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !message.trim()}
                                className="bg-[var(--primary-color)] text-white p-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                <FaPaperPlane size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
