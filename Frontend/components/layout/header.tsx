"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, Moon, Sun, ChevronRight, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isTogglingTheme, setIsTogglingTheme] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const { theme, resolvedTheme, setTheme } = useTheme();

  // Memoize active path check for performance
  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 20);
  }, []);

  // Fix hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Optimized scroll event listener
  useEffect(() => {
    let ticking = false;
    
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", throttledScrollHandler);
  }, [handleScroll]);

  // Simplified theme toggle with page reload
  const handleThemeToggle = useCallback(async () => {
    if (!mounted || isTogglingTheme) return;
    
    setIsTogglingTheme(true);
    
    try {
      const currentTheme = resolvedTheme || theme || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Set the new theme
      setTheme(newTheme);
      
      // Wait a moment for the theme to be set in localStorage
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Reload the page to ensure theme is properly applied
      window.location.reload();
      
    } catch (error) {
      console.error('Error toggling theme:', error);
      setIsTogglingTheme(false);
    }
  }, [mounted, isTogglingTheme, resolvedTheme, theme, setTheme]);

  // Get current theme with proper fallbacks
  const currentTheme = useMemo(() => {
    if (!mounted) return 'light';
    return resolvedTheme || theme || 'light';
  }, [mounted, resolvedTheme, theme]);

  // Memoized animation variants
  const fadeIn = useMemo(() => ({
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }), []);

  const scaleOnHover = useMemo(() => ({
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }), []);

  // Enhanced Theme Toggle Button with loading state
  const ThemeToggleButton = ({ isMobile = false }: { isMobile?: boolean }) => {
    // Show loading state until mounted or while toggling
    if (!mounted) {
      return (
        <div className={cn(
          "h-9 w-9 rounded-full flex items-center justify-center bg-muted/50",
          isMobile ? "mr-2" : "border border-primary/20"
        )}>
          <div className="h-4 w-4 rounded-full bg-muted-foreground/20 animate-pulse" />
        </div>
      );
    }

    const isDark = currentTheme === 'dark';

    return (
      <motion.div 
        variants={scaleOnHover}
        whileHover="hover" 
        whileTap="tap"
        data-interactive-cursor="true"
      >
        <Button
          variant={isMobile ? "ghost" : "outline"}
          size="icon"
          onClick={handleThemeToggle}
          disabled={isTogglingTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          className={cn(
            "relative overflow-hidden transition-all duration-300",
            isMobile 
              ? "mr-2 hover:bg-primary/10" 
              : "rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 shadow-sm hover:shadow-md",
            "group",
            isDark 
              ? "bg-slate-900/80 border-slate-600 text-slate-100" 
              : "bg-white/80 border-gray-300 text-gray-900",
            isTogglingTheme && "opacity-50 cursor-not-allowed"
          )}
        >
          <div className="flex items-center justify-center">
            {isTogglingTheme ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : isDark ? (
              <Moon className="h-4 w-4 text-blue-400 transition-all duration-300" />
            ) : (
              <Sun className="h-4 w-4 text-yellow-500 transition-all duration-300" />
            )}
          </div>
          
          {/* Subtle glow effect */}
          <div className={cn(
            "absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300",
            isDark ? "bg-blue-400" : "bg-yellow-400"
          )} />
        </Button>
      </motion.div>
    );
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo Area - Enhanced */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2" data-interactive-cursor="true">
                <img src="Portfolio_logo.webp" alt="NS" className="h-8 w-8" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Nitin Sharma
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden md:flex md:gap-x-1 bg-background/40 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-primary/10">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative group px-4 py-2 rounded-full transition-all duration-300"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  data-interactive-cursor="true"
                >
                  <span className={cn(
                    "text-sm font-medium transition-all duration-300 relative z-10",
                    isActive(item.href) 
                      ? "text-primary-foreground" 
                      : "text-foreground/80 hover:text-foreground group-hover:text-primary"
                  )}>
                    {item.name}
                  </span>
                  
                  {/* Active/Hover background */}
                  <AnimatePresence>
                    {(isActive(item.href) || hoveredItem === item.name) && (
                      <motion.div 
                        layoutId="navBackground"
                        className={cn(
                          "absolute inset-0 rounded-full",
                          isActive(item.href) 
                            ? "bg-primary shadow-lg" 
                            : "bg-primary/10"
                        )}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Action Buttons - Enhanced */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggleButton isMobile={false} />
            
            <motion.div 
              variants={scaleOnHover}
              whileHover="hover" 
              whileTap="tap"
              data-interactive-cursor="true"
            >
              <Button 
                asChild 
                className={cn(
                  "rounded-full px-6 py-2 font-medium shadow-lg transition-all duration-300",
                  "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                  "hover:shadow-xl hover:shadow-primary/25 border-0",
                  "group relative overflow-hidden"
                )}
              >
                <Link href="/contact" className="flex items-center gap-2 relative z-10">
                  <span>Let's talk</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Navigation - Enhanced */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggleButton isMobile={true} />
            
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <motion.div
                  variants={scaleOnHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    variant="outline" 
                    size="icon" 
                    aria-label="Open menu"
                    className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 shadow-sm"
                    data-interactive-cursor="true"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="border-l-primary/10 bg-background/95 backdrop-blur-xl"
              >
                <div className="flex flex-col space-y-2 mt-8">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsSheetOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 group",
                          isActive(item.href) 
                            ? "bg-primary text-primary-foreground shadow-lg" 
                            : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                        )}
                        data-interactive-cursor="true"
                      >
                        <span className="text-lg font-medium">{item.name}</span>
                        <motion.div
                          animate={isActive(item.href) ? { x: [0, 4, 0] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ChevronRight className={cn(
                            "h-4 w-4 transition-transform group-hover:translate-x-1",
                            isActive(item.href) ? "text-primary-foreground" : "text-primary"
                          )} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button 
                    asChild 
                    className={cn(
                      "w-full rounded-xl py-6 text-lg font-medium shadow-lg",
                      "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                      "hover:shadow-xl transition-all duration-300"
                    )}
                    data-interactive-cursor="true"
                  >
                    <Link 
                      href="/contact" 
                      onClick={() => setIsSheetOpen(false)}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Let's talk</span>
                      <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Loading overlay during theme toggle */}
      <AnimatePresence>
        {isTogglingTheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/50 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Switching theme...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}