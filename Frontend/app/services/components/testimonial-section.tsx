'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Priya Sharma",
        position: "Founder, Mumbai Boutique",
        text: "My online store's sales increased by 400% after the website redesign. The mobile experience is incredible - most of my customers now shop from their phones!",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face&auto=format",
        rating: 5,
        location: "Mumbai, Maharashtra"
    },
    {
        name: "Rajesh Kumar",
        position: "CEO, TechSolutions Bangalore",
        text: "Our website now ranks #1 on Google for our main keywords. The SEO work was phenomenal - organic traffic increased by 300% in just 3 months!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
        rating: 5,
        location: "Bangalore, Karnataka"
    },
    {
        name: "Sneha Patel",
        position: "Restaurant Owner, Ahmedabad",
        text: "The website design perfectly captures our restaurant's vibe. Online orders have tripled, and customers love how easy it is to browse our menu on mobile.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
        rating: 5,
        location: "Ahmedabad, Gujarat"
    }
];

export function TestimonialSection() {
    return (
        <section className="py-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients Say</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:border-gray-600"
                        >
                            <div className="flex items-center mb-6">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
                                />
                                <div className="ml-4">
                                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                                    <p className="text-xs text-blue-400">{testimonial.location}</p>
                                </div>
                            </div>
                            
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            
                            <div className="relative">
                                <svg className="w-8 h-8 text-blue-500/20 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-gray-300 relative z-10 leading-relaxed">{testimonial.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}