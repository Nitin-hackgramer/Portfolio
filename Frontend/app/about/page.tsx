'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Palette, Zap, Award, Users, Clock, ArrowUpRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import Particles from '@/components/ui/Particles';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'React & Next.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'UI/UX Design', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'TailwindCSS', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'Django & APIs', level: 75, color: 'from-indigo-500 to-purple-500' },
    { name: 'Database Design', level: 70, color: 'from-pink-500 to-rose-500' }
  ];

  const achievements = [
    { icon: Code, title: 'Projects Completed', value: '25+', color: 'text-blue-400' },
    { icon: Users, title: 'Happy Clients', value: '15+', color: 'text-green-400' },
    { icon: Clock, title: 'Years Experience', value: '2+', color: 'text-purple-400' },
    { icon: Award, title: 'Hackathons', value: '5+', color: 'text-orange-400' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Startup Founder', text: 'Exceptional work! Delivered exactly what we needed on time.', rating: 5 },
    { name: 'Mike Chen', role: 'Product Manager', text: 'Great communication and technical skills. Highly recommended!', rating: 5 },
    { name: 'Priya Sharma', role: 'Marketing Director', text: 'Transformed our vision into a beautiful, functional website.', rating: 5 }
  ];

  const timeline = [
    { year: '2022', title: 'Started Web Development Journey', desc: 'Began learning React and modern web technologies' },
    { year: '2023', title: 'First Freelance Projects', desc: 'Completed multiple client projects and built portfolio' },
    { year: '2024', title: 'Full-Stack Development', desc: 'Expanded to backend technologies and complex applications' },
    { year: '2025', title: 'Growing Business', desc: 'Scaling freelance business and taking on bigger challenges' }
  ];

  return (

    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 md:px-20 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-800/20 backdrop-blur-3xl"></div>
      <div style={{ width: '100%', height: '800px', position: 'absolute', top: '7%', left: 30, zIndex: 1 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1500}
          particleSpread={20}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative max-w-6xl mx-auto z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
          <Zap className="w-4 h-4 text-blue-300" />
          <span className="text-blue-200 text-sm">Available for freelance work</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
          About Me
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          I'm a passionate <span className="text-blue-300 font-semibold">full-stack developer</span> who transforms ideas into 
          <span className="text-slate-200 font-semibold"> stunning digital experiences</span> through modern technologies, 
          clean code, and intuitive design.
          </p>
        </div>

        {/* Profile Image & Quick Info */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="relative group">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 p-1">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center overflow-hidden">
        <img 
          src="/Nitin.webp" 
          alt="Nitin Sharma" 
          className="w-full h-full rounded-full object-cover"
        />
        </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Nitin Sharma</h2>
          <p className="text-xl text-blue-300 mb-6">Full-Stack Developer & UI/UX Designer</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
        <div className="flex items-center gap-2 bg-slate-900/70 rounded-lg px-4 py-2 border border-slate-700/50">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        <span className="text-sm">Available for work</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-900/70 rounded-lg px-4 py-2 border border-slate-700/50">
        <Clock className="w-4 h-4 text-blue-300" />
        <span className="text-sm">Quick responder</span>
        </div>
          </div>
          <div className="flex justify-center lg:justify-start gap-4">
        <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-lg transition-all hover:scale-105 border border-blue-600/50">
        <Download className="w-4 h-4" />
        Download CV
        </button>
        <button className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg transition-all hover:scale-105 bg-slate-900/30">
        <Mail className="w-4 h-4" />
        Get In Touch
        </button>
          </div>
          </div>
        </div>
        </div>
      </div>
      </section>

      {/* Statistics */}
      <section className="px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center group">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900/70 border border-slate-700/50 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
            <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
          </div>
          <div className="text-3xl font-bold mb-2">{achievement.value}</div>
          <div className="text-slate-400 text-sm">{achievement.title}</div>
          </div>
        ))}
        </div>
      </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-slate-400 text-lg">Technologies I use to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-600/40 transition-all">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold">{skill.name}</span>
            <span className="text-sm text-slate-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div 
            className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
            ></div>
          </div>
          </div>
        ))}
        </div>
      </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My Journey</h2>
        <p className="text-slate-400 text-lg">From beginner to professional developer</p>
        </div>

        <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800"></div>
        {timeline.map((item, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
            <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-600/40 transition-all">
            <div className="text-blue-300 font-bold text-lg mb-2">{item.year}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400">{item.desc}</p>
            </div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-950"></div>
          </div>
        ))}
        </div>
      </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
        <p className="text-slate-400 text-lg">Testimonials from satisfied clients</p>
        </div>

        <div className="relative">
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center">
          <div className="flex justify-center mb-4">
          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
            <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
          ))}
          </div>
          <p className="text-xl mb-6 text-slate-300">"{testimonials[currentTestimonial].text}"</p>
          <div>
          <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
          <div className="text-blue-300">{testimonials[currentTestimonial].role}</div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === index ? 'bg-blue-600' : 'bg-slate-700'}`}
          />
          ))}
        </div>
        </div>
      </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-20 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-900/30 to-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-blue-700/40">
        <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="text-xl text-slate-300 mb-8">
          Let's create something amazing together. I'm always excited to take on new challenges and bring ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 border border-blue-600/50">
          Start a Project <ArrowUpRight className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center gap-2 border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 bg-slate-900/30">
          View Portfolio <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors">
          <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors">
          <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors">
          <Mail className="w-6 h-6" />
          </a>
        </div>
        </div>
      </div>
      </section>
    </div>
  );
}
