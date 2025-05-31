"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { useTheme } from 'next-themes';
import TiltedCard from '@/components/ui/TiltedCard';

// Optimized tech stack display with AnimatePresence
const TechStack = React.memo(() => {
    const { theme } = useTheme();
    const [visibleTechs, setVisibleTechs] = useState(6);
    const techs = useMemo(() => [
        { name: 'React', color: 'from-blue-400 to-cyan-400' },
        { name: 'Node.js', color: 'from-green-400 to-emerald-400' },
        { name: 'Python', color: 'from-yellow-400 to-orange-400' },
        { name: 'TypeScript', color: 'from-blue-500 to-indigo-500' },
        { name: 'MongoDB', color: 'from-green-500 to-teal-500' },
        { name: 'AWS', color: 'from-orange-400 to-red-400' },
        { name: 'Docker', color: 'from-blue-600 to-blue-400' },
        { name: 'GraphQL', color: 'from-pink-400 to-purple-400' }
    ], []);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleTechs(prev => prev === techs.length ? 6 : techs.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [techs.length]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap gap-2 mt-6"
        >
            <AnimatePresence mode="wait">
                {techs.slice(0, visibleTechs).map((tech, index) => (
                    <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${tech.color} text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default`}
                    >
                        {tech.name}
                    </motion.span>
                ))}
            </AnimatePresence>
        </motion.div>
    );
});

// Simple static image component with just TiltedCard
const SimpleAvatar = React.memo(() => {
    return (
        <div className="relative w-full max-w-lg mx-auto lg:max-w-lg">
            <div className="relative rounded-2xl"> 
                <div className="relative z-20 w-full h-full rounded-2xl">
                    <TiltedCard
                        imageSrc="nitin.webp"
                        altText="Nitin Sharma - Full Stack Developer"
                        captionText="Nitin Sharma - Full Stack Developer"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="400px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <div className="absolute top-80 left-11 -translate-x-1/2 w-full flex justify-start">
                                <div className="flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-lg px-4 py-2 shadow-lg">
                                    <p 
                                        className="text-white font-semibold text-sm tracking-wide text-center" 
                                        style={{ fontFamily: 'monospace', whiteSpace: 'nowrap' }}
                                    >
                                        Nitin Sharma - Full Stack Developer
                                    </p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
});

// Mobile Avatar - smaller version for mobile
const MobileAvatar = React.memo(() => {
    return (
        <div className="relative w-full max-w-xs mx-auto">
            <div className="relative rounded-2xl"> 
                <div className="relative z-20 w-full h-full rounded-2xl">
                    <TiltedCard
                        imageSrc="nitin.webp"
                        altText="Nitin Sharma - Full Stack Developer"
                        captionText="Nitin Sharma - Full Stack Developer"
                        containerHeight="280px"
                        containerWidth="280px"
                        imageHeight="280px"
                        imageWidth="280px"
                        rotateAmplitude={8}
                        scaleOnHover={1}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <div className="absolute top-60 left-8 -translate-x-1/2 w-full flex justify-start">
                                <div className="flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-lg px-3 py-1.5 shadow-lg">
                                    <p 
                                        className="text-white font-semibold text-xs tracking-wide text-center" 
                                        style={{ fontFamily: 'monospace', whiteSpace: 'nowrap' }}
                                    >
                                        Nitin Sharma - Full Stack Developer
                                    </p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
});

// Main hero component
const OptimizedHeroSection = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

        return (
            <section className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative transition-colors duration-500 ${
                theme === 'dark'
                ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
                : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100'
            }`}>
                {/* Background elements */}
                <div className={`absolute inset-0 ${
                    theme === 'dark'
                        ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-950'
                        : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/40 via-indigo-100/60 to-purple-200/30'
                }`} />
                
                {/* Animated grid background */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: theme === 'dark' ? 0.1 : 0.15 }}
                    transition={{ duration: 2 }}
                    className={`absolute inset-0 bg-[linear-gradient(rgba(59,130,246,${theme === 'dark' ? '0.1' : '0.2'})_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,${theme === 'dark' ? '0.1' : '0.2'})_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]`}
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Desktop Layout - Unchanged */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left content - Desktop */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                            className="space-y-8"
                        >
                            {/* Status badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                                className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-full text-sm font-medium shadow-lg ${
                                    theme === 'dark'
                                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-300'
                                        : 'bg-gradient-to-r from-white/90 to-blue-50/90 border-blue-300/60 text-blue-900 shadow-blue-300/40'
                                }`}
                            >
                                <Sparkles className="h-4 w-4" />
                                Full-Stack Developer & Community Leader
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 bg-green-400 rounded-full"
                                />
                            </motion.div>

                            {/* Main heading */}
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight ${
                                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                                }`}
                            >
                                Creating{' '}
                                <span className="relative inline-block">
                                    <motion.span 
                                        className={`bg-gradient-to-r ${
                                            theme === 'dark' 
                                                ? 'from-blue-600 via-purple-600 to-indigo-600' 
                                                : 'from-blue-700 via-indigo-700 to-purple-700'
                                        } bg-clip-text text-transparent`}
                                        animate={{ 
                                            backgroundImage: theme === 'dark' 
                                                ? [
                                                    "linear-gradient(45deg, #2563eb, #7c3aed, #4f46e5)",
                                                    "linear-gradient(45deg, #7c3aed, #4f46e5, #2563eb)",
                                                    "linear-gradient(45deg, #4f46e5, #2563eb, #7c3aed)"
                                                ]
                                                : [
                                                    "linear-gradient(45deg, #1d4ed8, #6366f1, #7c2d12)",
                                                    "linear-gradient(45deg, #6366f1, #7c2d12, #1d4ed8)",
                                                    "linear-gradient(45deg, #7c2d12, #1d4ed8, #6366f1)"
                                                ]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        modern
                                    </motion.span>
                                    <motion.span 
                                        className={`absolute bottom-0 left-0 w-full h-1 rounded-full ${
                                            theme === 'dark' 
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                                                : 'bg-gradient-to-r from-blue-600 to-purple-600'
                                        }`}
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                    />
                                </span>
                                <br />
                                web experiences
                            </motion.h1>

                            {/* Description */}
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className={`text-lg lg:text-xl max-w-2xl leading-relaxed ${
                                    theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                                }`}
                            >
                                I design and build full-stack applications with a focus on{' '}
                                <span className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>user experience</span>,{' '}
                                <span className={`font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-indigo-700'}`}>performance</span>, and{' '}
                                <span className={`font-semibold ${theme === 'dark' ? 'text-cyan-400' : 'text-purple-700'}`}>clean code</span>. 
                                Passionate about community-driven development.
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.button
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: theme === 'dark' 
                                            ? "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
                                            : "0 25px 50px -12px rgba(79, 70, 229, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group relative text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                                        theme === 'dark' 
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                                            : 'bg-gradient-to-r from-blue-600 to-indigo-700 shadow-indigo-300/50'
                                    }`}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Get in Touch
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <motion.div
                                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                            theme === 'dark' 
                                                ? 'bg-gradient-to-r from-purple-600 to-blue-500' 
                                                : 'bg-gradient-to-r from-indigo-700 to-purple-700'
                                        }`}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </motion.button>
                                
                                <motion.button
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: theme === 'dark' ? "rgba(51, 65, 85, 0.8)" : "rgba(255, 255, 255, 0.95)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group backdrop-blur-sm border px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                                        theme === 'dark'
                                            ? 'bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white'
                                            : 'bg-white/80 border-indigo-300 text-indigo-800 hover:text-indigo-900 shadow-lg shadow-indigo-200/40'
                                    }`}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                        View Projects
                                    </span>
                                </motion.button>
                            </motion.div>

                            {/* Social links */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="flex gap-6 pt-4"
                            >
                                {[
                                    { 
                                        icon: () => (
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        ),
                                        href: "https://github.com/nitin-hackgramer", 
                                        color: theme === 'dark' ? "hover:text-blue-600" : "hover:text-indigo-700"
                                    },
                                    { 
                                        icon: () => (
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        ),
                                        href: "https://linkedin.com/in/nitin-sharma-a1a1a62ab",
                                        color: theme === 'dark' ? "hover:text-blue-700" : "hover:text-blue-800"
                                    },
                                    { 
                                        icon: () => (
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        ),
                                        href: "https://twitter.com/NitinSh60345544",
                                        color: theme === 'dark' ? "hover:text-slate-700" : "hover:text-slate-900"
                                    }
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`transition-all duration-300 p-2 rounded-full ${
                                            theme === 'dark'
                                                ? `text-slate-400 ${social.color} hover:bg-slate-800/50`
                                                : `text-slate-600 ${social.color} hover:bg-white/70 shadow-sm hover:shadow-indigo-200/50`
                                        }`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                                    >
                                        <social.icon />
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Tech stack */}
                            <TechStack />
                        </motion.div>

                        {/* Right content - Desktop Avatar */}
                        <div className="flex justify-center lg:justify-end">
                            <SimpleAvatar />
                        </div>
                    </div>

                    {/* Mobile Layout - Optimized Design */}
                    <div className="lg:hidden space-y-6">
                        {/* Status badge - Mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                            className={`flex justify-center mb-4`}
                        >
                            <div className={`inline-flex items-center gap-2 px-3 py-2 backdrop-blur-sm border rounded-full text-xs font-medium shadow-lg ${
                                theme === 'dark'
                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-300'
                                    : 'bg-gradient-to-r from-white/90 to-blue-50/90 border-blue-300/60 text-blue-900 shadow-blue-300/40'
                            }`}>
                                <Sparkles className="h-3 w-3" />
                                Full-Stack Developer
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-1.5 h-1.5 bg-green-400 rounded-full"
                                />
                            </div>
                        </motion.div>

                        {/* Main heading - Mobile (Smaller) */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className={`text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-center ${
                                theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}
                        >
                            Creating{' '}
                            <span className="relative inline-block">
                                <motion.span 
                                    className={`bg-gradient-to-r ${
                                        theme === 'dark' 
                                            ? 'from-blue-600 via-purple-600 to-indigo-600' 
                                            : 'from-blue-700 via-indigo-700 to-purple-700'
                                    } bg-clip-text text-transparent`}
                                >
                                    modern
                                </motion.span>
                                <motion.span 
                                    className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                                        theme === 'dark' 
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600'
                                    }`}
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                />
                            </span>
                            <br />
                            web experiences
                            <br />
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className={`text-sm leading-relaxed text-center px-6 ${
                                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                                }`}
                            >
                                Passionate about{' '}
                                <span className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>user experience</span> and{' '}
                                <span className={`font-semibold ${theme === 'dark' ? 'text-purple-400' : 'text-indigo-700'}`}>clean code</span>.
                            </motion.p>
                        </motion.h1>

                        {/* Mobile Avatar - Smaller */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="flex justify-center items-center py-4"
                        >
                            <div className="relative w-full max-w-xs mx-auto flex justify-center">
                                {/* Animated neon gradient glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl"
                                    animate={{
                                        background: [
                                            "radial-gradient(ellipse at center, rgba(59,130,246,0.6) 0%, rgba(99,102,241,0.5) 25%, rgba(168,85,247,0.4) 50%, rgba(59,130,246,0.3) 75%, transparent 100%)",
                                            "radial-gradient(ellipse at center, rgba(99,102,241,0.6) 0%, rgba(168,85,247,0.5) 25%, rgba(59,130,246,0.4) 50%, rgba(99,102,241,0.3) 75%, transparent 100%)",
                                            "radial-gradient(ellipse at center, rgba(168,85,247,0.6) 0%, rgba(59,130,246,0.5) 25%, rgba(99,102,241,0.4) 50%, rgba(168,85,247,0.3) 75%, transparent 100%)"
                                        ],
                                        scale: [1, 1.15, 1.05, 1.2, 1],
                                        opacity: [0.8, 1, 0.9, 1, 0.8]
                                    }}
                                    transition={{
                                        background: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    style={{
                                        filter: "blur(25px)",
                                        transform: "scale(1.3)"
                                    }}
                                />

                                {/* Pulsing inner ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl"
                                    animate={{
                                        background: [
                                            "radial-gradient(circle at center, rgba(59,130,246,0.4) 20%, rgba(168,85,247,0.3) 40%, transparent 70%)",
                                            "radial-gradient(circle at center, rgba(168,85,247,0.5) 20%, rgba(59,130,246,0.4) 40%, transparent 70%)",
                                            "radial-gradient(circle at center, rgba(99,102,241,0.4) 20%, rgba(59,130,246,0.3) 40%, transparent 70%)"
                                        ],
                                        scale: [0.9, 1.1, 0.95, 1.05, 0.9],
                                        rotate: [0, 120, 240, 360]
                                    }}
                                    transition={{
                                        background: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                                    }}
                                    style={{
                                        filter: "blur(15px)",
                                        transform: "scale(1.1)"
                                    }}
                                />

                                {/* Orbiting particles effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl"
                                    animate={{
                                        background: [
                                            "conic-gradient(from 0deg at 50% 50%, rgba(59,130,246,0.3) 0deg, transparent 60deg, rgba(168,85,247,0.3) 120deg, transparent 180deg, rgba(99,102,241,0.3) 240deg, transparent 300deg, rgba(59,130,246,0.3) 360deg)",
                                            "conic-gradient(from 60deg at 50% 50%, rgba(168,85,247,0.3) 0deg, transparent 60deg, rgba(99,102,241,0.3) 120deg, transparent 180deg, rgba(59,130,246,0.3) 240deg, transparent 300deg, rgba(168,85,247,0.3) 360deg)"
                                        ],
                                        rotate: [0, 360]
                                    }}
                                    transition={{
                                        background: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { duration: 12, repeat: Infinity, ease: "linear" }
                                    }}
                                    style={{
                                        filter: "blur(20px)",
                                        opacity: 0.6
                                    }}
                                />

                                <div className="relative rounded-2xl"> 
                                    <div className="relative z-20 w-full h-full rounded-2xl">
                                        <TiltedCard
                                            imageSrc="nitin.webp"
                                            altText="Nitin Sharma - Full Stack Developer"
                                            captionText="Nitin Sharma - Full Stack Developer"
                                            containerHeight="280px"
                                            containerWidth="280px"
                                            imageHeight="280px"
                                            imageWidth="280px"
                                            rotateAmplitude={8}
                                            scaleOnHover={1}
                                            showMobileWarning={false}
                                            showTooltip={true}
                                            displayOverlayContent={true}
                                            overlayContent={
                                                <div className="absolute top-60 left-36 -translate-x-1/2 flex justify-center">
                                                    <div className="flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg px-1 py-1.5 shadow-lg">
                                                        <p 
                                                            className={`font-semibold text-xs tracking-wide text-center ${
                                                                theme === 'dark' ? 'text-blue-100' : 'text-indigo-900'
                                                            }`}
                                                            style={{ fontFamily: 'monospace', whiteSpace: 'nowrap' }}
                                                        >
                                                            Nitin Sharma - Full Stack Developer
                                                        </p>
                                                    </div>
                                                </div>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>




                        {/* CTA buttons - Mobile (Compact and side by side) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex gap-3 justify-center px-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`group relative text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-lg transition-all duration-300 overflow-hidden ${
                                    theme === 'dark' 
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                                        : 'bg-gradient-to-r from-blue-600 to-indigo-700'
                                }`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-1.5">
                                    Get in Touch
                                    <ArrowRight className="h-3 w-3" />
                                </span>
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`group backdrop-blur-sm border px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                    theme === 'dark'
                                        ? 'bg-slate-800/50 border-slate-700 text-slate-300'
                                        : 'bg-white/80 border-indigo-300 text-indigo-800 shadow-lg'
                                }`}
                            >
                                <span className="flex items-center justify-center gap-1.5">
                                    <Play className="h-3 w-3" />
                                    Projects
                                </span>
                            </motion.button>
                        </motion.div>

                        {/* Social links - Mobile (Compact) */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="flex gap-4 justify-center pt-2"
                        >
                            {[
                                { 
                                    icon: () => (
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    ),
                                    href: "https://github.com/nitin-hackgramer"
                                },
                                { 
                                    icon: () => (
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    ),
                                    href: "https://linkedin.com/in/nitin-sharma-a1a1a62ab"
                                },
                                { 
                                    icon: () => (
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    ),
                                    href: "https://twitter.com/NitinSh60345544"
                                }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`transition-all duration-300 p-2 rounded-full ${
                                        theme === 'dark'
                                            ? 'text-slate-400 hover:text-blue-400 hover:bg-slate-800/50'
                                            : 'text-slate-600 hover:text-indigo-700 hover:bg-white/70 shadow-sm'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Tech stack - Mobile */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6, duration: 0.6 }}
                            className="flex flex-wrap gap-2 justify-center px-4"
                        >
                            {[
                                { name: 'React', color: 'from-blue-400 to-cyan-400' },
                                { name: 'Node.js', color: 'from-green-400 to-emerald-400' },
                                { name: 'Python', color: 'from-yellow-400 to-orange-400' },
                                { name: 'TypeScript', color: 'from-blue-500 to-indigo-500' },
                                { name: 'MongoDB', color: 'from-green-500 to-teal-500' },
                                { name: 'AWS', color: 'from-orange-400 to-red-400' }
                            ].slice(0, 6).map((tech, index) => (
                                <motion.span
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.8 + index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.05, y: -1 }}
                                    className={`px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${tech.color} text-white shadow-lg cursor-default`}
                                >
                                    {tech.name}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    };

    export default OptimizedHeroSection;
