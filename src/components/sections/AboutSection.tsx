import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GURUKUL_PILLARS } from '../../data/tisData';
import { RevealOnScroll } from '../animation/RevealOnScroll';
import { Badge } from '../ui/Badge';
import { Brain, Flame, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface AboutSectionProps {
  onOpenInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  const [activePillar, setActivePillar] = useState('mind');

  const selected = GURUKUL_PILLARS.find(p => p.id === activePillar) || GURUKUL_PILLARS[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <RevealOnScroll direction="down">
            <Badge variant="gold" size="md">
              Ancient Wisdom • Modern Innovation
            </Badge>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              The Modern Gurukul of India
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.15}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Established in 2012 under the aegis of <strong>Rishabh Educational Trust</strong>, TIS blends traditional Indian educational values with contemporary pedagogy, cutting-edge laboratories, and a home-like residential sanctuary.
            </p>
          </RevealOnScroll>
        </div>

        {/* Authentic Highlight Quote Card */}
        <RevealOnScroll direction="up" delay={0.2} className="my-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#b90124] to-[#880017] text-white shadow-xl relative overflow-hidden text-left">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
              <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="text-amber-300 font-serif text-2xl sm:text-3xl italic">
                “When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine.”
              </div>
              <p className="text-sm text-rose-100 font-medium">
                At Tulas International School, teachers are revered as <em>Gurus</em>—dedicated mentors who do not just teach textbooks, but sculpt the character and ignite the potential inside every young soul.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* 3 Pillars Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left mt-8">
          {/* Pillar Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              The Three Pillars of Holistic Development
            </h3>

            {GURUKUL_PILLARS.map(pillar => {
              const isCurrent = pillar.id === activePillar;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar.id)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isCurrent
                      ? 'bg-white dark:bg-slate-900 border-[#c09d59] shadow-lg shadow-amber-500/10'
                      : 'bg-white/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isCurrent
                        ? 'bg-gradient-to-br from-[#b90124] to-[#c09d59] text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {getIcon(pillar.iconName)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {pillar.sanskrit}
                      </span>
                      {isCurrent && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300">
                          Active Focus
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-medium text-[#c09d59] mt-0.5">
                      {pillar.english}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {pillar.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Content of Active Pillar */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-[#c09d59] flex items-center justify-center">
                    {getIcon(selected.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                      {selected.sanskrit} • {selected.english}
                    </h3>
                    <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                      {selected.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selected.description}
                </p>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Core Curriculum Integrations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selected.highlights.map(item => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Discover how our Gurus mentor each child individually.
                  </span>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={onOpenInquiry}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Inquire for Admission
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
