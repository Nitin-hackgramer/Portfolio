'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Code, 
    Palette, 
    TrendingUp, 
    Layout, 
    ArrowRight, 
    Check, 
    MessageCircle 
} from 'lucide-react';

interface PricingPlan {
    price: number;
    title: string;
    features: string[];
}

interface Service {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    longDescription: string;
    technologies: string[];
    color: string;
    gradient: string;
    pricing: {
        basic: PricingPlan;
        standard: PricingPlan;
        premium: PricingPlan;
    };
    deliveryTime: string;
    popular: boolean;
}

const ServicesSection = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedPlan, setSelectedPlan] = useState<string>('');

    const services: Service[] = [
        {
            id: 'web-dev',
            title: 'Modern Web Development',
            icon: <Code className="w-10 h-10" />,
            description: 'Lightning-fast, mobile-first websites that convert visitors into customers.',
            longDescription: 'Build your digital empire with cutting-edge frontend solutions. From stunning landing pages to interactive web applications, I create websites that not only look amazing but also drive real business results. Every line of code is optimized for speed, SEO, and user experience.',
            technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
            color: 'from-blue-500 to-cyan-400',
            gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20',
            pricing: {
                basic: { price: 3000, title: 'Landing Page', features: ['Single Page Design', 'Responsive Layout', 'Contact Form', 'Basic Animations', '1 Month Support'] },
                standard: { price: 6000, title: 'Business Website', features: ['Multi-page Website', 'Custom Animations', 'Interactive Components', 'Advanced SEO', 'Performance Optimization', '3 Months Support'] },
                premium: { price: 8000, title: 'Advanced Frontend', features: ['Complex Animations', 'Interactive Features', 'Advanced Components', 'State Management', 'API Integration', '6 Months Support'] }
            },
            deliveryTime: '7-21 days',
            popular: true
        },
        {
            id: 'ui-ux',
            title: 'UI/UX Design',
            icon: <Palette className="w-10 h-10" />,
            description: 'Beautiful, intuitive designs that users absolutely love and remember.',
            longDescription: 'Transform your ideas into visually stunning interfaces that not only look incredible but also provide seamless user experiences. Every pixel is crafted with purpose, ensuring your brand stands out in the crowded digital landscape.',
            technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems', 'Framer'],
            color: 'from-purple-500 to-pink-500',
            gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
            pricing: {
                basic: { price: 2000, title: 'UI Design', features: ['2-3 Screen Designs', 'Mobile View Design', 'Basic Figma File', 'Simple Layout', '1 Design Revision'] },
                standard: { price: 3000, title: 'Complete UX/UI', features: ['5-7 Screen Designs', 'Mobile + Desktop Views', 'Interactive Prototype', 'Basic Design System', '2 Design Revisions'] },
                premium: { price: 5000, title: 'Design + Frontend', features: ['10+ Screen Designs', 'Complete Design System', 'Advanced Prototype', 'Responsive Implementation', '3 Design Revisions'] }
            },
            deliveryTime: '5-15 days',
            popular: false
        },
        {
            id: 'seo',
            title: 'SEO Optimization',
            icon: <TrendingUp className="w-10 h-10" />,
            description: 'Dominate Google search results and get more customers organically.',
            longDescription: 'Get your business discovered by the right customers at the right time. My proven SEO strategies have helped businesses increase their organic traffic by 300%+ and achieve top rankings for competitive keywords.',
            technologies: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Google Analytics', 'Search Console', 'Performance Optimization'],
            color: 'from-green-500 to-emerald-400',
            gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-400/20',
            pricing: {
                basic: { price: 2000, title: 'SEO Audit', features: ['Basic Keyword Research', 'Simple SEO Audit', 'Recommendations Report', 'Basic Competitor Check'] },
                standard: { price: 3000, title: 'SEO Optimization', features: ['Keyword Research & Analysis', 'On-Page SEO Setup', 'Meta Tags Optimization', 'Basic Technical SEO', 'Monthly Progress Report'] },
                premium: { price: 5000, title: 'Complete SEO Package', features: ['Advanced Keyword Strategy', 'Complete Technical SEO', 'Content Optimization', 'Local SEO Setup', 'Competitor Analysis', 'Monthly Reports & Support'] }
            },
            deliveryTime: '10-30 days',
            popular: false
        },
        {
            id: 'responsive',
            title: 'Responsive Design',
            icon: <Layout className="w-10 h-10" />,
            description: 'Perfect experience on every device - mobile, tablet, and desktop.',
            longDescription: 'In today\'s mobile-first world, your website must look and work flawlessly on every device. I ensure your site provides an exceptional experience whether your customers are browsing on their phones during their commute or on desktop at work.',
            technologies: ['Mobile-First Design', 'Flexible Layouts', 'Touch Optimization', 'Performance Optimization', 'Cross-browser Testing', 'CSS Animations'],
            color: 'from-red-500 to-rose-400',
            gradient: 'bg-gradient-to-br from-red-500/20 to-rose-400/20',
            pricing: {
                basic: { price: 2500, title: 'Mobile Optimization', features: ['Mobile View Design', 'Basic Responsiveness', 'Simple Layout', 'Basic Touch Support', '1 Month Support'] },
                standard: { price: 3500, title: 'Full Responsive Design', features: ['Mobile + Tablet + Desktop', 'Improved Navigation', 'Smooth Scrolling', 'Better Performance', '3 Months Support'] },
                premium: { price: 6000, title: 'Advanced Responsive', features: ['All Device Optimization', 'Advanced Animations', 'Touch Gestures', 'Fast Loading', 'Cross-browser Support', '6 Months Support'] }
            },
            deliveryTime: '5-14 days',
            popular: false
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const handleWhatsAppContact = (service: Service) => {
        const message = `Hi! I'm interested in your ${service.title} service. Can we discuss the details?`;
        const phoneNumber = '1234567890'; // Replace with your WhatsApp number
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <section className="py-20 px-4 md:px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Services That <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Deliver Results</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Choose from our carefully crafted service packages designed specifically for Indian businesses and startups.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={item}
                                whileHover={{ 
                                    y: -15, 
                                    scale: 1.02,
                                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
                                    transition: { duration: 0.3, ease: "easeOut" } 
                                }}
                                className={`relative rounded-3xl border border-gray-800/50 bg-gray-900/60 backdrop-blur-lg p-8 cursor-pointer transition-all duration-300 overflow-hidden group ${service.popular ? 'ring-2 ring-blue-500/50' : ''}`}
                                onClick={() => setSelectedService(service)}
                            >
                                <div className={`inline-flex p-4 rounded-2xl mb-6 ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">Starting at</span>
                                        <span className="text-2xl font-bold text-green-400">₹{service.pricing.basic.price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">Delivery</span>
                                        <span className="text-sm font-medium text-blue-400">{service.deliveryTime}</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                                        View Details
                                    </span>
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                                
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selectedService && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm px-4"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-gray-900 border border-gray-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className="absolute top-6 right-6 text-gray-400 hover:text-white z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
                                onClick={() => setSelectedService(null)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col lg:flex-row gap-8 mb-12">
                                    <div className={`rounded-2xl p-6 ${selectedService.gradient} flex items-center justify-center lg:w-32 lg:h-32`}>
                                        <div className="text-white w-16 h-16">
                                            {selectedService.icon}
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                            {selectedService.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                            {selectedService.longDescription}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedService.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="px-4 py-2 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <h4 className="text-2xl font-bold mb-8 text-center">Choose Your Plan</h4>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {Object.entries(selectedService.pricing).map(([key, plan]) => (
                                            <div 
                                                key={key}
                                                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                                    key === 'standard' 
                                                        ? 'border-blue-500 bg-blue-500/5 transform scale-105' 
                                                        : 'border-gray-800 bg-gray-800/30 hover:border-gray-700'
                                                }`}
                                                onClick={() => setSelectedPlan(key)}
                                            >
                                                {key === 'standard' && (
                                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                                        Most Popular
                                                    </div>
                                                )}
                                                
                                                <div className="text-center mb-6">
                                                    <h5 className="font-bold text-lg mb-2">{plan.title}</h5>
                                                    <div className="text-3xl font-bold text-green-400 mb-1">₹{plan.price.toLocaleString()}</div>
                                                    <div className="text-gray-400 text-sm">One-time payment</div>
                                                </div>
                                                
                                                <ul className="space-y-3">
                                                    {plan.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                                            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                                            <span className="text-sm">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                <button 
                                                    onClick={() => handleWhatsAppContact(selectedService)}
                                                    className={`w-full mt-6 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                                                        key === 'standard'
                                                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                                                            : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                                                    }`}
                                                >
                                                    Get Started
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button 
                                        onClick={() => handleWhatsAppContact(selectedService)}
                                        className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Discuss This Project
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ServicesSection;