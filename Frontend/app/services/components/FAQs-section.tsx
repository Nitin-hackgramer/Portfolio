'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';


export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        {
            question: "What's included in the website cost?",
            answer: "All packages include responsive design, modern animations, interactive components, and mobile optimization. Premium packages include advanced animations, custom interactions, and extended support."
        },
        {
            question: "How long does it take to build a website?",
            answer: "Simple landing pages take 5-7 days, while complex animated websites can take 10-21 days. I'll provide you with a detailed timeline after understanding your design requirements."
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes! All packages include free support (duration varies by package). After that, I offer affordable monthly maintenance plans starting from ₹1,500/month for updates and modifications."
        },
        {
            question: "What kind of animations do you create?",
            answer: "I specialize in smooth page transitions, hover effects, scroll animations, loading animations, and interactive micro-interactions using Framer Motion and CSS animations."
        },
        {
            question: "Do you work with businesses outside India?",
            answer: "Yes, I work with clients globally. However, my pricing and approach are optimized for the Indian market and businesses targeting Indian customers."
        }
    ];

    return (
        <section className="py-20 px-4 md:px-6 bg-gray-900/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-300">Everything you need to know about my services</p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden"
                        >
                            <button
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <h3 className="font-semibold text-lg text-white pr-4">{faq.question}</h3>
                                {openFaq === index ? (
                                    <ChevronUp className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            
                            <AnimatePresence>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}