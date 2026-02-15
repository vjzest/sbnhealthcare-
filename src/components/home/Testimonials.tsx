'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaQuoteLeft, FaTimes } from 'react-icons/fa';

interface Testimonial {
    id: number;
    name: string;
    title: string;
    practice: string;
    metric: string;
    metricLabel: string;
    quote: string;
    avatar: string;
    videoUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Dr. Sarah Mitchell",
        title: "Medical Director",
        practice: "Mitchell Family Practice",
        metric: "35%",
        metricLabel: "Reduction in A/R Days",
        quote: "SBN Healthcare transformed our revenue cycle. We saw an immediate impact on our cash flow within the first 90 days. Their automated scrubbing is a game changer.",
        avatar: "/img/avatar1.jpg",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video
    },
    {
        id: 2,
        name: "James Wilson",
        title: "Practice Administrator",
        practice: "Oakwood Orthopedics",
        metric: "98%",
        metricLabel: "First-Pass Acceptance",
        quote: "The level of transparency SBN provides is unmatched. We finally feel like we have a partner who is as invested in our financial success as we are.",
        avatar: "/img/avatar2.jpg",
        videoUrl: "https://www.w3schools.com/html/movie.mp4" // Placeholder video
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        title: "Operations Manager",
        practice: "Sunshine Pediatrics",
        metric: "$1.2M+",
        metricLabel: "Revenue Recovered",
        quote: "Processing denials used to be a nightmare. With SBN, it's seamless. Our staff can finally focus on patient care instead of fighting with payers.",
        avatar: "/img/avatar3.jpg",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video
    }
];

const Testimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-[800px] mx-auto">
                    <span className="text-[var(--primary-color)] font-bold uppercase text-xs tracking-[4px] mb-4 block">Proof of Success</span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary-color)] tracking-tight mb-6">
                        Trusted by High-Performance Practices
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        Discover how SBN Healthcare empowers providers to achieve peak financial performance through data-driven clinical integrity and proactive denial management.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {testimonials.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(11,31,51,0.12)] transition-all duration-500 flex flex-col cursor-pointer group overflow-hidden"
                            onClick={() => setSelectedVideo(item.videoUrl)}
                        >
                            {/* Large Video Header */}
                            <div className="relative h-[240px] w-full bg-black overflow-hidden group">
                                <video
                                    src={item.videoUrl}
                                    muted
                                    autoPlay
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-color)]/80 to-transparent" />

                                {/* Play Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[var(--primary-color)] group-hover:border-transparent transition-all duration-300">
                                        <FaPlay className="text-white text-xl ml-1" />
                                    </div>
                                </div>

                                {/* Floating Metric on Video */}
                                <div className="absolute bottom-6 left-8">
                                    <span className="text-white font-black text-4xl m-0 tracking-tighter block shadow-sm">
                                        {item.metric}
                                    </span>
                                    <span className="text-white/70 text-[10px] font-bold uppercase tracking-[2px]">
                                        {item.metricLabel}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-10 pt-8 flex flex-col flex-grow">
                                <div className="relative mb-8 flex-grow">
                                    <FaQuoteLeft className="text-[var(--primary-color)] opacity-10 text-4xl absolute -top-2 -left-2" />
                                    <p className="text-[1.1rem] leading-[1.7] text-slate-600 font-medium italic relative z-10">
                                        "{item.quote}"
                                    </p>
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-black text-sm border border-slate-200">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-800 tracking-tight text-sm">{item.name}</h4>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                                            {item.title} <span className="mx-1 opacity-30">|</span> {item.practice}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Video Modal */}
                <AnimatePresence>
                    {selectedVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[var(--secondary-color)]/95 backdrop-blur-sm"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative w-full max-w-[1000px] aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
                                    onClick={() => setSelectedVideo(null)}
                                >
                                    <FaTimes size={20} />
                                </button>
                                <video
                                    src={selectedVideo}
                                    autoPlay
                                    controls
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-6 z-20 flex flex-col">
                                    <img src="/img/logo.jpg" alt="SBN Logo" className="h-10 opacity-50 grayscale invert" />
                                    <span className="text-[8px] font-black text-white/40 uppercase tracking-[2px] mt-1">SBN Healthcare Solution</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Testimonials;
