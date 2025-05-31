"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import OptimizedHeroSection from './hero-section';
import { SkillsSection } from './skills-section';
import TechSection from './tech-stack-section';
import ProjectsSection from './project-section';
import EducationSection from './education-section';
import { ExperienceSection } from './experiance-section';
import ContactSection from './contact-section';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Mail, Zap } from 'lucide-react';
import CommunitySection from './community-section';


const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      const isDark = html.classList.contains('dark') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches && 
                     !html.classList.contains('light'));
      setIsDarkTheme(isDark);
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkTheme);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkTheme);
    };
  }, []);

  // Dynamic styles based on theme
  const getNavStyles = useCallback(() => {
    if (isDarkTheme) {
      return {
        background: 'bg-white/10 backdrop-blur-md border border-white/20',
        text: 'text-white',
        hoverText: 'hover:text-blue-400',
        hoverBg: 'hover:bg-white/10',
        activeText: 'text-blue-400',
        activeBg: 'bg-blue-500/20',
        buttonGradient: 'bg-gradient-to-r from-blue-600 to-purple-600'
      };
    } else {
      return {
        background: 'bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg',
        text: 'text-gray-700',
        hoverText: 'hover:text-blue-600',
        hoverBg: 'hover:bg-gray-100/80',
        activeText: 'text-blue-600',
        activeBg: 'bg-blue-50/80',
        buttonGradient: 'bg-gradient-to-r from-blue-500 to-purple-500'
      };
    }
  }, [isDarkTheme]);

  const navStyles = useMemo(() => getNavStyles(), [getNavStyles]);
  
  // Handle navigation clicks
  const handleNavClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  }, []);

  // Navigation items with icons for better UX
  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'tech', label: 'Tech', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ], []);

  // Create dock items from nav items
  const dockItems = useMemo(() => 
    navItems.map((item) => ({
      icon: <item.icon size={18} />,
      label: item.label,
      onClick: () => handleNavClick(item.id)
    })), [navItems, handleNavClick]
  );

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.8;
    
    setIsScrolled(scrollY > heroHeight);
    
    // Update active section based on scroll position
    const sections = navItems.map(item => item.id);
    let current = 'hero';
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section;
          break;
        }
      }
    }
    
    setActiveSection(current);
  }, [navItems]);

  // Throttled scroll event listener
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Call once to set initial state
    handleScroll();
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Handle desktop widget toggle
  const toggleDesktopNav = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        {/* Hero Section - Dock Navigation (positioned lower) */}
        <div  
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
            !isScrolled 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className={`${navStyles.background} rounded-2xl p-4 shadow-xl`}>
            <div className="flex items-center space-x-4">
              {dockItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className={`p-3 ${navStyles.text} ${navStyles.hoverText} ${navStyles.hoverBg} rounded-xl transition-all duration-200 hover:scale-110`}
                  title={item.label}
                  type="button"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Collapsed Left Widget */}
        <div 
          className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-700 ease-out ${
            isScrolled 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {/* Trigger Button */}
          <button
            onClick={toggleDesktopNav}
            className={`${navStyles.buttonGradient} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
              !isCollapsed ? 'rotate-180' : ''
            }`}
            type="button"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Expanded Navigation */}
          <div 
            className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2 ${navStyles.background} rounded-2xl shadow-xl transition-all duration-500 ease-out ${
              !isCollapsed 
                ? 'opacity-100 scale-100 translate-x-0' 
                : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
            }`}
          >
            <div className="p-4 min-w-[200px]">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li 
                      key={item.id}
                      className={`transition-all duration-300 ${
                        !isCollapsed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeSection === item.id
                            ? `${navStyles.activeBg} ${navStyles.activeText} shadow-sm`
                            : `${navStyles.text} ${navStyles.hoverText} ${navStyles.hoverBg}`
                        }`}
                        type="button"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Vertical Stack Style */}
      <div className="md:hidden">
        {/* Main FAB */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`fixed bottom-6 right-6 z-50 ${navStyles.buttonGradient} text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
            mobileMenuOpen ? 'rotate-45 scale-110' : 'hover:scale-110'
          }`}
          type="button"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Vertical Menu Items */}
        <div className={`fixed bottom-20 right-6 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}>
          <div className={`flex flex-col space-y-3 ${navStyles.background} rounded-2xl p-3 shadow-xl transition-all duration-300 ${
            mobileMenuOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}>
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 min-w-[140px] ${
                    activeSection === item.id
                      ? `${navStyles.activeBg} ${navStyles.activeText} ring-2 ${isDarkTheme ? 'ring-blue-400/50' : 'ring-blue-500/50'}`
                      : `${navStyles.text} ${navStyles.hoverText} ${navStyles.hoverBg}`
                  } ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                  type="button"
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* Actual Portfolio Sections */}
      <div className="space-y-0">
        <section id="hero">
          <OptimizedHeroSection />
        </section>
        
        <section id="skills">
          <SkillsSection/>
        </section>
        
        <section id="tech">
          <TechSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="community">
          <CommunitySection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default EnhancedNavbar;
