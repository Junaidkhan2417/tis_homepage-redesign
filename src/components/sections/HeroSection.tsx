import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, MapPin, ShieldCheck, Trophy } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { RevealOnScroll } from '../animation/RevealOnScroll';

interface HeroSectionProps {
  onOpenInquiry: (grade?: string) => void;
  onOpenTour: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry, onOpenTour }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 overflow-hidden">
      {/* Background Ambience & Himalayas Atmospheric Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-slate-900/5 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#b90124]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-[#007a83]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Traditional Yantra / Mandala Geometry Watermark */}
      <div className="absolute right-10 top-1/4 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="450" height="450" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
          <polygon points="50,10 85,75 15,75" stroke="currentColor" strokeWidth="1" fill="none" />
          <polygon points="50,90 85,25 15,25" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & High-Converting Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Accreditations Badge */}
            <RevealOnScroll direction="down" delay={0.05}>
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="crimson" size="md">
                  <Trophy className="w-3.5 h-3.5 text-[#b90124]" />
                  <span>Ranked #1 Boarding School in Uttarakhand</span>
                </Badge>
                <Badge variant="gold" size="md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Admissions Open 2025–26</span>
                </Badge>
              </div>
            </RevealOnScroll>

            {/* Main Headline */}
            <RevealOnScroll direction="up" delay={0.15}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.12] tracking-tight">
                Modern Gurukul.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#b90124] via-[#c09d59] to-[#007a83]">
                  Timeless Values.
                </span>{' '}
                Limitless Future.
              </h1>
            </RevealOnScroll>

            {/* Compelling Value Proposition */}
            <RevealOnScroll direction="up" delay={0.25}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                Nestled across <strong className="text-slate-900 dark:text-white">22+ lush acres</strong> in the Himalayan Doon Valley, Tula's International School integrates ancient <em>Guru-Shishya</em> mentorship with world-class CBSE academics, 16+ Olympic sports, and transformative residential boarding.
              </p>
            </RevealOnScroll>

            {/* Micro Highlights Pill Row */}
            <RevealOnScroll direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>100% Gated & Secure Co-Ed Campus</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#b90124]" />
                  <span>Dehradun, Uttarakhand</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#c09d59]" />
                  <span>Classes IV to XII</span>
                </span>
              </div>
            </RevealOnScroll>

            {/* Dual High Converting CTAs */}
            <RevealOnScroll direction="up" delay={0.35}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <Button
                  variant="primary"
                  size="xl"
                  onClick={() => onOpenInquiry()}
                  icon={<ArrowRight className="w-5 h-5" />}
                  glow={true}
                  className="shadow-xl"
                >
                  Apply for 2025–26 Session
                </Button>

                <Button
                  variant="outline"
                  size="xl"
                  onClick={onOpenTour}
                  icon={<Play className="w-4 h-4 text-[#b90124] fill-[#b90124]" />}
                  iconPosition="left"
                >
                  Schedule Campus Tour
                </Button>
              </div>
            </RevealOnScroll>

            {/* Trust Indicator */}
            <RevealOnScroll direction="fade" delay={0.4}>
              <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                <span>Over 450+ inquiries received this month • Limited hostel seats per cohort</span>
              </p>
            </RevealOnScroll>
          </div>

          {/* Right Column: Dynamic Visual Card & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll direction="scale" delay={0.25} className="relative z-10">
              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/3] sm:aspect-[1/1] max-w-lg mx-auto group">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  alt="Tula's International School Campus and Students"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                    <MapPin className="w-3.5 h-3.5 text-[#b90124]" />
                    <span>Dehradun Foothills, India</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white">
                    Where Character Precedes Knowledge
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 max-w-xs">
                    "We feel supported in what we do and nudged further to do more."
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Guru-Shishya Ratio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#c09d59] flex items-center justify-center font-bold font-serif text-lg">
                  1:8
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    Guru-Shishya Ratio
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Individual Attention
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Olympic Sports Foundation */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#b90124]/10 text-[#b90124] flex items-center justify-center font-bold font-serif text-base">
                  16+
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    Olympic Disciplines
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    Archery • Polo • Swimming
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
