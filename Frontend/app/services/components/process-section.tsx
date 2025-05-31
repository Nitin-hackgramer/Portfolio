'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Target, Palette, Rocket } from 'lucide-react';

const processSteps = [
  { icon: <MessageCircle className="w-8 h-8" />, title: "Discovery Call", desc: "We discuss your vision, goals, and requirements" },
  { icon: <Target className="w-8 h-8" />, title: "Strategy & Planning", desc: "Create a detailed roadmap and timeline" },
  { icon: <Palette className="w-8 h-8" />, title: "Design & Development", desc: "Bring your vision to life with pixel-perfect execution" },
  { icon: <Rocket className="w-8 h-8" />, title: "Launch & Support", desc: "Go live and provide ongoing support" }
];

export default function ProcessSection() {
    return (
        <section className="py-20 px-4 md:px-6 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Work</h2>
                    <p className="text-xl text-gray-300">Simple, transparent process from idea to launch</p>
                </motion.div>
                
                <div className="grid md:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center relative"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                                {step.icon}
                            </div>
                            <h3 className="font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.desc}</p>
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}