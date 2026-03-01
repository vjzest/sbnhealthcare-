'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaExpand } from 'react-icons/fa';

const OfficeOperations = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <section className="py-24 md:py-32 bg-[var(--secondary-color)] overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[var(--primary-color)] font-bold uppercase text-xs tracking-[4px] mb-4 block">
                        Behind The Scenes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                        Our Office & Operations
                    </h2>
                    <p className="text-lg text-slate-400 font-medium max-w-[700px] mx-auto leading-relaxed">
                        A look inside our state-of-the-art operations center where our expert team works around the clock to maximize your revenue performance.
                    </p>
                </div>

                {/* Video Player */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 group">
                        <video
                            ref={videoRef}
                            src="/img/v1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full aspect-video object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Controls */}
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={togglePlay}
                                    className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center border border-white/20 transition-all duration-300"
                                >
                                    {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
                                </button>
                                <span className="text-white text-sm font-bold uppercase tracking-widest opacity-70">
                                    SBN Operations Center
                                </span>
                            </div>
                            <button
                                onClick={handleFullscreen}
                                className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/20 transition-all duration-300"
                            >
                                <FaExpand size={14} />
                            </button>
                        </div>

                        {/* SBN Watermark */}
                        <div className="absolute top-6 left-6 pointer-events-none">
                            <span className="text-[9px] font-black text-white/30 uppercase tracking-[3px]">SBN Healthcare Solution</span>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Below Video */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto text-center">
                    {[
                        { value: '200+', label: 'Billing Specialists' },
                        { value: '24/7', label: 'Operations Coverage' },
                        { value: '11+', label: 'Years of Excellence' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className="text-4xl font-black text-[var(--primary-color)] tracking-tight">{stat.value}</div>
                            <div className="text-slate-400 font-bold uppercase text-[10px] tracking-[3px] mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficeOperations;
