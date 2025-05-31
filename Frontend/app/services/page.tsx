// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { 
//   Sparkles, Code, Layout, TrendingUp, Palette,
//   ArrowRight, Star, Check, Clock, Users,
//   Phone, Mail, MessageCircle, ChevronDown, ChevronUp,
//   Target, Rocket, BadgeCheck
// } from 'lucide-react';

// // Enhanced services data with Indian market focus
// const services = [
//   {
//     id: 'web-dev',
//     title: 'Modern Web Development',
//     icon: <Code className="w-10 h-10" />,
//     description: 'Lightning-fast, mobile-first websites that convert visitors into customers.',
//     longDescription: 'Build your digital empire with cutting-edge frontend solutions. From stunning landing pages to interactive web applications, I create websites that not only look amazing but also drive real business results. Every line of code is optimized for speed, SEO, and user experience.',
//     technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
//     color: 'from-blue-500 to-cyan-400',
//     gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20',
//     pricing: {
//       basic: { price: 3000, title: 'Landing Page', features: ['Single Page Design', 'Responsive Layout', 'Contact Form', 'Basic Animations', '1 Month Support'] },
//       standard: { price: 6000, title: 'Business Website', features: ['Multi-page Website', 'Custom Animations', 'Interactive Components', 'Advanced SEO', 'Performance Optimization', '3 Months Support'] },
//       premium: { price: 8000, title: 'Advanced Frontend', features: ['Complex Animations', 'Interactive Features', 'Advanced Components', 'State Management', 'API Integration', '6 Months Support'] }
//     },
//     deliveryTime: '7-21 days',
//     popular: true
//   },
//   {
//     id: 'ui-ux',
//     title: 'UI/UX Design',
//     icon: <Palette className="w-10 h-10" />,
//     description: 'Beautiful, intuitive designs that users absolutely love and remember.',
//     longDescription: 'Transform your ideas into visually stunning interfaces that not only look incredible but also provide seamless user experiences. Every pixel is crafted with purpose, ensuring your brand stands out in the crowded digital landscape.',
//     technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems', 'Framer'],
//     color: 'from-purple-500 to-pink-500',
//     gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
//     pricing: {
//       basic: { price: 2000, title: 'UI Design', features: ['2-3 Screen Designs', 'Mobile View Design', 'Basic Figma File', 'Simple Layout', '1 Design Revision'] },
//       standard: { price: 3000, title: 'Complete UX/UI', features: ['5-7 Screen Designs', 'Mobile + Desktop Views', 'Interactive Prototype', 'Basic Design System', '2 Design Revisions'] },
//       premium: { price: 5000, title: 'Design + Frontend', features: ['10+ Screen Designs', 'Complete Design System', 'Advanced Prototype', 'Responsive Implementation', '3 Design Revisions'] }
//     },
//     deliveryTime: '5-15 days',
//     popular: false
//   },
//   {
//     id: 'seo',
//     title: 'SEO Optimization',
//     icon: <TrendingUp className="w-10 h-10" />,
//     description: 'Dominate Google search results and get more customers organically.',
//     longDescription: 'Get your business discovered by the right customers at the right time. My proven SEO strategies have helped businesses increase their organic traffic by 300%+ and achieve top rankings for competitive keywords.',
//     technologies: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Google Analytics', 'Search Console', 'Performance Optimization'],
//     color: 'from-green-500 to-emerald-400',
//     gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-400/20',
//     pricing: {
//       basic: { price: 2000, title: 'SEO Audit', features: ['Basic Keyword Research', 'Simple SEO Audit', 'Recommendations Report', 'Basic Competitor Check'] },
//       standard: { price: 3000, title: 'SEO Optimization', features: ['Keyword Research & Analysis', 'On-Page SEO Setup', 'Meta Tags Optimization', 'Basic Technical SEO', 'Monthly Progress Report'] },
//       premium: { price: 5000, title: 'Complete SEO Package', features: ['Advanced Keyword Strategy', 'Complete Technical SEO', 'Content Optimization', 'Local SEO Setup', 'Competitor Analysis', 'Monthly Reports & Support'] }
//     },
//     deliveryTime: '10-30 days',
//     popular: false
//   },
//   {
//     id: 'responsive',
//     title: 'Responsive Design',
//     icon: <Layout className="w-10 h-10" />,
//     description: 'Perfect experience on every device - mobile, tablet, and desktop.',
//     longDescription: 'In today\'s mobile-first world, your website must look and work flawlessly on every device. I ensure your site provides an exceptional experience whether your customers are browsing on their phones during their commute or on desktop at work.',
//     technologies: ['Mobile-First Design', 'Flexible Layouts', 'Touch Optimization', 'Performance Optimization', 'Cross-browser Testing', 'CSS Animations'],
//     color: 'from-red-500 to-rose-400',
//     gradient: 'bg-gradient-to-br from-red-500/20 to-rose-400/20',
//     pricing: {
//       basic: { price: 2500, title: 'Mobile Optimization', features: ['Mobile View Design', 'Basic Responsiveness', 'Simple Layout', 'Basic Touch Support', '1 Month Support'] },
//       standard: { price: 3500, title: 'Full Responsive Design', features: ['Mobile + Tablet + Desktop', 'Improved Navigation', 'Smooth Scrolling', 'Better Performance', '3 Months Support'] },
//       premium: { price: 6000, title: 'Advanced Responsive', features: ['All Device Optimization', 'Advanced Animations', 'Touch Gestures', 'Fast Loading', 'Cross-browser Support', '6 Months Support'] }
//     },
//     deliveryTime: '5-14 days',
//     popular: false
//   }
// ];

// // Enhanced testimonials with Indian context
// const testimonials = [
//   {
//     name: "Priya Sharma",
//     position: "Founder, Mumbai Boutique",
//     text: "My online store's sales increased by 400% after the website redesign. The mobile experience is incredible - most of my customers now shop from their phones!",
//     avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face&auto=format",
//     rating: 5,
//     location: "Mumbai, Maharashtra"
//   },
//   {
//     name: "Rajesh Kumar",
//     position: "CEO, TechSolutions Bangalore",
//     text: "Our website now ranks #1 on Google for our main keywords. The SEO work was phenomenal - organic traffic increased by 300% in just 3 months!",
//     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
//     rating: 5,
//     location: "Bangalore, Karnataka"
//   },
//   {
//     name: "Sneha Patel",
//     position: "Restaurant Owner, Ahmedabad",
//     text: "The website design perfectly captures our restaurant's vibe. Online orders have tripled, and customers love how easy it is to browse our menu on mobile.",
//     avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format",
//     rating: 5,
//     location: "Ahmedabad, Gujarat"
//   }
// ];

// // Process steps
// const processSteps = [
//   { icon: <MessageCircle className="w-8 h-8" />, title: "Discovery Call", desc: "We discuss your vision, goals, and requirements" },
//   { icon: <Target className="w-8 h-8" />, title: "Strategy & Planning", desc: "Create a detailed roadmap and timeline" },
//   { icon: <Palette className="w-8 h-8" />, title: "Design & Development", desc: "Bring your vision to life with pixel-perfect execution" },
//   { icon: <Rocket className="w-8 h-8" />, title: "Launch & Support", desc: "Go live and provide ongoing support" }
// ];

// // FAQ data
// const faqs = [
//   {
//     question: "What's included in the website cost?",
//     answer: "All packages include responsive design, modern animations, interactive components, and mobile optimization. Premium packages include advanced animations, custom interactions, and extended support."
//   },
//   {
//     question: "How long does it take to build a website?",
//     answer: "Simple landing pages take 5-7 days, while complex animated websites can take 10-21 days. I'll provide you with a detailed timeline after understanding your design requirements."
//   },
//   {
//     question: "Do you provide ongoing support?",
//     answer: "Yes! All packages include free support (duration varies by package). After that, I offer affordable monthly maintenance plans starting from ₹1,500/month for updates and modifications."
//   },
//   {
//     question: "What kind of animations do you create?",
//     answer: "I specialize in smooth page transitions, hover effects, scroll animations, loading animations, and interactive micro-interactions using Framer Motion and CSS animations."
//   },
//   {
//     question: "Do you work with businesses outside India?",
//     answer: "Yes, I work with clients globally. However, my pricing and approach are optimized for the Indian market and businesses targeting Indian customers."
//   }
// ];

// export default function EnhancedServicesPage() {
//   const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
//   const [openFaq, setOpenFaq] = useState<number | null>(null)
//   const heroRef = useRef(null)
//   const [showPricing, setShowPricing] = useState(false)
  
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"]
//   });
  
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       }
//     }
//   };

//   const item = {
//     hidden: { y: 30, opacity: 0 },
//     show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   const handleWhatsAppContact = (service: typeof services[0] | null = null) => {
//     const message = service 
//       ? `Hi! I'm interested in your ${service.title} service. Can we discuss my project?`
//       : "Hi! I'd like to know more about your services. Can we discuss my project?";
//     window.open(`https://wa.me/9968358455?text=${encodeURIComponent(message)}`, '_blank');
//   };

//   return (
//     <div className="bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1e293b] text-white min-h-screen overflow-x-hidden">
//       {/* Enhanced Hero section */}
//       <section ref={heroRef} className="relative overflow-hidden py-20 px-4 md:px-6 min-h-screen flex items-center">
//         <motion.div 
//           style={{ y, opacity }}
//           className="absolute inset-0 z-0"
//         >
//           <EnhancedParticles />
//         </motion.div>
        
//         {/* Animated background gradient */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto relative z-10 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
//               className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-8"
//             >
//               <Sparkles className="w-5 h-5 text-yellow-400" />
//               <span className="text-sm font-medium">Crafting Digital Excellence for Indian Businesses</span>
//             </motion.div>
            
//             <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
//               <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
//                 Premium Web
//               </span>
//               <span className="block text-white mt-2">Solutions</span>
//               <motion.span 
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 1, duration: 0.8 }}
//                 className="block text-2xl md:text-4xl font-normal text-gray-300 mt-4"
//               >
//                 Starting at just ₹3,000
//               </motion.span>
//             </h1>
            
//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
//             >
//               Transform your business with lightning-fast, mobile-first websites that convert visitors into customers. 
//               <span className="text-blue-400 font-semibold"> Trusted by 100+ Indian businesses.</span>
//             </motion.p>

//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 0.8 }}
//               className="flex flex-col sm:flex-row items-center justify-center gap-6"
//             >
//               <button 
//                 onClick={() => handleWhatsAppContact()}
//                 className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
//               >
//                 <MessageCircle className="w-5 h-5" />
//                 WhatsApp Me Now
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button 
//                 onClick={() => handleWhatsAppContact()}
//                 className="group border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3"
//               >
//                 View Pricing
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.5, duration: 0.8 }}
//               className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400"
//             >
//               <div className="flex items-center gap-2">
//                 <Users className="w-5 h-5 text-blue-400" />
//                 <span>100+ Happy Clients</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-5 h-5 text-green-400" />
//                 <span>7-Day Delivery</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <BadgeCheck className="w-5 h-5 text-purple-400" />
//                 <span>100% Satisfaction</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced Services section */}
//       <section className="py-20 px-4 md:px-6 relative">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <h2 className="text-4xl md:text-6xl font-bold mb-6">
//               Services That <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Deliver Results</span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Choose from our carefully crafted service packages designed specifically for Indian businesses and startups.
//             </p>
//           </motion.div>

//           <motion.div 
//             variants={container}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
//           >
//             {services.map((service) => (
//               <motion.div
//                 key={service.id}
//                 variants={item}
//                 whileHover={{ 
//                   y: -15, 
//                   scale: 1.02,
//                   boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
//                   transition: { duration: 0.3, ease: "easeOut" } 
//                 }}
//                 className={`relative rounded-3xl border border-gray-800/50 bg-gray-900/60 backdrop-blur-lg p-8 cursor-pointer transition-all duration-300 overflow-hidden group ${service.popular ? 'ring-2 ring-blue-500/50' : ''}`}
//                 onClick={() => setSelectedService(service)}
//               >
                
//                 <div className={`inline-flex p-4 rounded-2xl mb-6 ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
//                   <div className="text-white">
//                     {service.icon}
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-gray-300 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>
                
//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-400">Starting at</span>
//                     <span className="text-2xl font-bold text-green-400">₹{service.pricing.basic.price.toLocaleString()}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-400">Delivery</span>
//                     <span className="text-sm font-medium text-blue-400">{service.deliveryTime}</span>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                   <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
//                     View Details
//                   </span>
//                   <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
//                     <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
                
//                 {/* Hover effect gradient */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
//               </motion.div>
//                 ))
//             }
//           </motion.div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 px-4 md:px-6 bg-gray-900/30">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Work</h2>
//             <p className="text-xl text-gray-300">Simple, transparent process from idea to launch</p>
//           </motion.div>
          
//           <div className="grid md:grid-cols-4 gap-8">
//             {processSteps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="text-center relative"
//               >
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
//                   {step.icon}
//                 </div>
//                 <h3 className="font-bold mb-2">{step.title}</h3>
//                 <p className="text-gray-400 text-sm">{step.desc}</p>
//                 {index < processSteps.length - 1 && (
//                   <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Service Details Modal */}
//       <AnimatePresence>
//         {selectedService && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm px-4"
//             onClick={() => setSelectedService(null)}
//           >
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               className="bg-gray-900 border border-gray-800 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button 
//                 className="absolute top-6 right-6 text-gray-400 hover:text-white z-10 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
//                 onClick={() => setSelectedService(null)}
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </button>
              
//               <div className="p-8 md:p-12">
//                 {/* Header */}
//                 <div className="flex flex-col lg:flex-row gap-8 mb-12">
//                   <div className={`rounded-2xl p-6 ${selectedService.gradient} flex items-center justify-center lg:w-32 lg:h-32`}>
//                     <div className="text-white w-16 h-16">
//                       {selectedService.icon}
//                     </div>
//                   </div>
                  
//                   <div className="flex-1">
//                     <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//                       {selectedService.title}
//                     </h3>
//                     <p className="text-gray-300 text-lg mb-6 leading-relaxed">
//                       {selectedService.longDescription}
//                     </p>
//                     <div className="flex flex-wrap gap-3">
//                       {selectedService.technologies.map((tech, idx) => (
//                         <span 
//                           key={idx} 
//                           className="px-4 py-2 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Pricing Plans */}
//                 <div className="mb-12">
//                   <h4 className="text-2xl font-bold mb-8 text-center">Choose Your Plan</h4>
//                   <div className="grid md:grid-cols-3 gap-6">
//                     {Object.entries(selectedService.pricing).map(([key, plan]) => (
//                       <div 
//                         key={key}
//                         className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
//                           key === 'standard' 
//                             ? 'border-blue-500 bg-blue-500/5 transform scale-105' 
//                             : 'border-gray-800 bg-gray-800/30 hover:border-gray-700'}
//                         onClick={() => setSelectedPlan(key)}
//                       >
//                         {key === 'standard' && (
//                           <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
//                             Most Popular
//                           </div>
//                         )}
//                         }`}
//                         onClick={() => setSelectedPlan(key)}
//                         >                        
//                         <div className="text-center mb-6">
//                           <h5 className="font-bold text-lg mb-2">{plan.title}</h5>
//                           <div className="text-3xl font-bold text-green-400 mb-1">₹{plan.price.toLocaleString()}</div>
//                           <div className="text-gray-400 text-sm">One-time payment</div>
//                         </div>
                        
//                         <ul className="space-y-3">
//                           {plan.features.map((feature, idx) => (
//                             <li key={idx} className="flex items-center gap-3 text-gray-300">
//                               <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
//                               <span className="text-sm">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
                        
//                         <button 
//                           onClick={() => handleWhatsAppContact(selectedService)}
//                           className={`w-full mt-6 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
//                             key === 'standard'
//                               ? 'bg-blue-500 hover:bg-blue-600 text-white'
//                               : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
//                           }`}
//                         >
//                           Get Started
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="text-center">
//                   <button 
//                     onClick={() => handleWhatsAppContact(selectedService)}
//                     className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
//                   >
//                     <MessageCircle className="w-5 h-5" />
//                     Discuss This Project
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Enhanced Testimonials */}
//       <section className="py-20 px-4 md:px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients Say</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:border-gray-600"
//               >
//                 <div className="flex items-center mb-6">
//                   <img 
//                     src={testimonial.avatar} 
//                     alt={testimonial.name} 
//                     className="w-16 h-16 rounded-full object-cover border-2 border-gray-600"
//                   />
//                   <div className="ml-4">
//                     <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-400">{testimonial.position}</p>
//                     <p className="text-xs text-blue-400">{testimonial.location}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
                
//                 <div className="relative">
//                   <svg className="w-8 h-8 text-blue-500/20 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                   </svg>
//                   <p className="text-gray-300 relative z-10 leading-relaxed">{testimonial.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 md:px-6 bg-gray-900/30">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
//             <p className="text-xl text-gray-300">Everything you need to know about my services</p>
//           </motion.div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden"
//               >
//                 <button
//                   className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors"
//                   onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                 >
//                   <h3 className="font-semibold text-lg text-white pr-4">{faq.question}</h3>
//                   {openFaq === index ? (
//                     <ChevronUp className="w-6 h-6 text-blue-400 flex-shrink-0" />
//                   ) : (
//                     <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
//                   )}
//                 </button>
                
//                 <AnimatePresence>
//                   {openFaq === index && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden"
//                     >
//                       <div className="p-6 pt-0 text-gray-300 leading-relaxed">
//                         {faq.answer}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="py-20 px-4 md:px-6">
//         <div className="max-w-6xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl overflow-hidden border border-gray-700/50"
//           >
//             {/* Animated background */}
//             <div className="absolute inset-0">
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_70%)]"></div>
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.15),transparent_70%)]"></div>
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_80%)]"></div>
//             </div>
            
//             <div className="relative p-12 md:p-16 text-center">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//                 className="inline-block mb-6"
//               >
//                 <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
//                   <Rocket className="w-10 h-10 text-white" />
//                 </div>
//               </motion.div>
              
//               <h2 className="text-4xl md:text-6xl font-bold mb-6">
//                 Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Launch</span> Your Project?
//               </h2>
              
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
//                 Join 100+ successful Indian businesses who've transformed their digital presence. 
//                 Let's create something extraordinary together that drives real results for your business.
//               </p>
              
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
//                 <button 
//                   onClick={() => handleWhatsAppContact()}
//                   className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
//                 >
//                   <MessageCircle className="w-6 h-6" />
//                   Start Your Project Today
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
                
//                   <button 
//                     onClick={() => handleWhatsAppContact()}
//                     className="group border-2 border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3"
//                   >
//                     View All Pricing
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
                
//                 <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
//                   <div className="flex items-center gap-2">
//                     <Phone className="w-5 h-5 text-blue-400" />
//                     <span>+91 99999 99999</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Mail className="w-5 h-5 text-purple-400" />
//                     <span>hello@yourname.com</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-5 h-5 text-green-400" />
//                     <span>Available 24/7</span>
//                   </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Enhanced animated particles component
// function EnhancedParticles() {
//   const [particles, setParticles] = useState<Array<{
//     id: number;
//     x: number;
//     y: number;
//     size: number;
//     opacity: number;
//     speed: number;
//     color: string;
//   }>>([])
  
//   useEffect(() => {
//     const generateParticles = () => {
//       const newParticles = [];
//       for (let i = 0; i < 80; i++) {
//         newParticles.push({
//           id: i,
//           x: Math.random() * 100,
//           y: Math.random() * 100,
//           size: Math.random() * 4 + 1,
//           opacity: Math.random() * 0.6 + 0.1,
//           speed: Math.random() * 0.8 + 0.2,
//           color: ['blue', 'purple', 'pink', 'cyan'][Math.floor(Math.random() * 4)]
//         });
//       }
//       setParticles(newParticles);
//     };
    
//     generateParticles();
//   }, []);
  
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((particle) => (
//         <motion.div
//           key={particle.id}
//           className={`absolute rounded-full bg-${particle.color}-400`}
//           style={{
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             opacity: particle.opacity,
//           }}
//           animate={{
//             y: ['0%', '100vh'],
//             opacity: [particle.opacity, 0],
//             scale: [1, 1.5, 0.5],
//           }}
//           transition={{
//             duration: 15 / particle.speed,
//             repeat: Infinity,
//             ease: "linear",
//             repeatType: "loop",
//             delay: Math.random() * 15,
//           }}
//         />
//       ))}
      
//       {/* Floating geometric shapes */}
//       {[...Array(10)].map((_, i) => (
//         <motion.div
//           key={`shape-${i}`}
//           className="absolute border border-blue-500/20 rounded-lg"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             width: `${Math.random() * 60 + 20}px`,
//             height: `${Math.random() * 60 + 20}px`,
//           }}
//           animate={{
//             rotate: [0, 360],
//             scale: [1, 1.2, 1],
//             opacity: [0.1, 0.3, 0.1],
//           }}
//           transition={{
//             duration: Math.random() * 20 + 10,
//             repeat: Infinity,
//             ease: "linear",
//             delay: Math.random() * 10,
//           }}
//         />
//       ))}
//     </div>
//   );
// }


import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import ProcessSection from "./components/process-section";
import {TestimonialSection} from "./components/testimonial-section";
import FAQSection from "./components/FAQs-section";
import CTASection from "./components/CTA-section";



export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-br from-[#0a0f1c] via-[#0f172a] to-[#1e293b] text-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}