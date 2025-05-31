'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight, Users, Clock, BadgeCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const handleWhatsAppContact = () => {
        // Add your WhatsApp contact logic here
        window.open('https://wa.me/9968358455', '_blank');
    };

    return (
        <section ref={heroRef} className="relative overflow-hidden py-20 px-4 md:px-6 min-h-screen flex items-center">
            <motion.div 
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <EnhancedParticles />
            </motion.div>
            
            {/* Animated background gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-8"
                    >
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium">Crafting Digital Excellence for Indian Businesses</span>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Premium Web
                        </span>
                        <span className="block text-white mt-2">Solutions</span>
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="block text-2xl md:text-4xl font-normal text-gray-300 mt-4"
                        >
                            Starting at just ₹3,000
                        </motion.span>
                    </h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                    >
                        Transform your business with lightning-fast, mobile-first websites that convert visitors into customers. 
                        <span className="text-blue-400 font-semibold"> Trusted by 100+ Indian businesses.</span>
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button 
                            onClick={() => handleWhatsAppContact()}
                            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Me Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button 
                            onClick={() => handleWhatsAppContact()}
                            className="group border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3"
                        >
                            View Pricing
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-400" />
                            <span>100+ Happy Clients</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-green-400" />
                            <span>7-Day Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BadgeCheck className="w-5 h-5 text-purple-400" />
                            <span>100% Satisfaction</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
function EnhancedParticles() {
const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    color: string;
}>>([])

useEffect(() => {
    const generateParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 80; i++) {
        newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.8 + 0.2,
        color: ['blue', 'purple', 'pink', 'cyan'][Math.floor(Math.random() * 4)]
        });
    }
    setParticles(newParticles);
    };
    
    generateParticles();
}, []);

return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particles.map((particle) => (
        <motion.div
        key={particle.id}
        className={`absolute rounded-full bg-${particle.color}-400`}
        style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
        }}
        animate={{
            y: ['0%', '100vh'],
            opacity: [particle.opacity, 0],
            scale: [1, 1.5, 0.5],
        }}
        transition={{
            duration: 15 / particle.speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            delay: Math.random() * 15,
        }}
        />
    ))}
    
    {/* Floating geometric shapes */}
    {[...Array(10)].map((_, i) => (
        <motion.div
        key={`shape-${i}`}
        className="absolute border border-blue-500/20 rounded-lg"
        style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
        }}
        animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
        }}
        />
    ))}
    </div>
);
}
export default HeroSection;
