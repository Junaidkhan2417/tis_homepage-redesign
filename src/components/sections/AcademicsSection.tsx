import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACADEMIC_STAGES } from '../../data/tisData';
import { RevealOnScroll } from '../animation/RevealOnScroll';
import { Badge } from '../ui/Badge';
import { BookOpen, CheckCircle2, ArrowRight, Microchip, Compass } from 'lucide-react';
import { Button } from '../ui/Button';

interface AcademicsSectionProps {
  onOpenInquiry: (grade?: string) => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenInquiry }) => {
  const [selectedStageId, setSelectedStageId] = useState('middle');

  const activeStage = ACADEMIC_STAGES.find(s => s.id === selectedStageId) || ACADEMIC_STAGES[0];

  return (
    <section id="academics" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <RevealOnScroll direction="down">
            <Badge variant="teal" size="md">
              Academic Excellence • CBSE & Cambridge Standards
            </Badge>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Progressive Academic Pathways
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.15}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              From foundational middle school exploration to rigorous board mastery and integrated university entrance coaching, TIS equips scholars for global leadership.
            </p>
          </RevealOnScroll>
        </div>

        {/* Stage Selection Tabs */}
        <RevealOnScroll direction="up" delay={0.2} className="mt-12 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 max-w-2xl mx-auto border border-slate-200 dark:border-slate-800">
            {ACADEMIC_STAGES.map(stage => {
              const isSelected = stage.id === selectedStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`flex-1 min-w-[150px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#b90124] to-[#99001b] text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <div>{stage.title}</div>
                  <div className={`text-[10px] font-normal ${isSelected ? 'text-amber-200' : 'text-slate-400'}`}>
                    {stage.grades}
                  </div>
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Stage Detailed Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left"
          >
            {/* Left Stage Overview */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="gold" size="sm">
                    {activeStage.ageGroup}
                  </Badge>
                  <Badge variant="neutral" size="sm">
                    {activeStage.curriculum}
                  </Badge>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {activeStage.title} ({activeStage.grades})
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeStage.overview}
                </p>

                <div className="pt-2 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Pedagogical Highlights
                  </h4>
                  {activeStage.features.map(feat => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#007a83] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Curriculum aligned with National Education Policy (NEP 2020)
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onOpenInquiry(activeStage.grades)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Apply for {activeStage.grades}
                </Button>
              </div>
            </div>

            {/* Right Curriculum Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-white">
                      Subject Combinations & Streams
                    </h4>
                    <p className="text-xs text-amber-400">
                      Certified CBSE Board Affiliation
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeStage.subjects.map(subject => (
                    <span
                      key={subject}
                      className="text-xs px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-bold text-amber-300">
                    <Microchip className="w-4 h-4" />
                    <span>In-House Competitive Edge</span>
                  </div>
                  <p>
                    Classes XI & XII receive concurrent integrated faculty coaching for JEE, NEET, CUET, CLAT & SAT with simulated mock testing series.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Global University Guidance Desk</span>
                </span>
                <span className="font-bold text-white">100% Placements</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
