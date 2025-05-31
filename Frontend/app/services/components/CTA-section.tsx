'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageCircle, ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const CTASection = () => {
    const handleWhatsAppContact = () => {
        const message = "Hi! I'm interested in your services. Can we discuss my project?"; 
        window.open(`https://wa.me/9968358455?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl overflow-hidden border border-gray-700/50"
                >
                    {/* Animated background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_70%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.15),transparent_70%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_80%)]"></div>
                    </div>
                    
                    <div className="relative p-12 md:p-16 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="inline-block mb-6"
                        >
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Rocket className="w-10 h-10 text-white" />
                            </div>
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Launch</span> Your Project?
                        </h2>
                        
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Join 100+ successful Indian businesses who've transformed their digital presence. 
                            Let's create something extraordinary together that drives real results for your business.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                            <button 
                                onClick={() => handleWhatsAppContact()}
                                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Start Your Project Today
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <button 
                                onClick={() => handleWhatsAppContact()}
                                className="group border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3"
                            >
                                View All Pricing
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        
                        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span>+91 9968358455</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-purple-400" />
                                <span>nitinkumar12082005@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-green-400" />
                                <span>Available 24/7</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;